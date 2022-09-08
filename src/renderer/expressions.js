import { parse } from 'equation-parser';
import electronLog from 'electron-log';

const logger = electronLog.scope('expressions.js');
const signs = {
  positive: 0,
  negative: 1,
  both: 2,
};
const types = {
  func: 0,
  constant: 1,
  variable: 2,
  number: 3,
  quotient: 4,
  product: 5,
  power: 6,
  expression: 7,
  sum: 8,
  matrix: 9,
};
const equality = {
  equals: 0,
  less: 1,
  greater: 2,
  lte: 3,
  gte: 4,
  approximate: 5,
};
const eqMap = {
  'equals': equality.equals,
  'less-than': equality.less,
  'greater-than': equality.greater,
  'less-than-equals': equality.lte,
  'greater-than-equals': equality.gte,
  'approximates': equality.approximates,
};
const equalityTextMap = {
  [equality.equals]: '=',
  [equality.less]: '<',
  [equality.greater]: '>',
  [equality.lte]: '≤',
  [equality.gte]: '≥',
  [equality.approximates]: '≈',
};
const signMap = {
  'plus': signs.positive,
  'minus': signs.negative,
  'plus-minus': signs.both,
};
const sumTypes = [
  'plus',
  'minus',
  'plus-minus',
];
const productTypes = [
  'positive-negative',
  'multiply-implicit',
  'multiply-dot',
  'multiply-cross',
  'divide-fraction',
  'divide-inline',
];
const quotientTypes = [
  'divide-fraction',
  'divide-inline',
];
const flattenTypes = {
  sum: 0,
  product: 1,
};

function signString(sign) {
  if (sign === signs.negative) {
    return '- ';
  }
  else if (sign === signs.both) {
    return '± ';
  }

  return '';
}

function checkNodeSum(tree, type, values, leftSign) {
  if (sumTypes.includes(tree.a.type) === true) {
    const childLeftSign = signMap[tree.a.type];

    checkNodeSum(tree.a, type, values, childLeftSign);
  }
  else {
    values.push(tree.a);
  }

  if (sumTypes.includes(tree.b.type) === true) {
    const childLeftSign = signMap[tree.b.type];
    
    checkNodeSum(tree.b, type, values, childLeftSign);
  }
  else {
    tree.b.sign = leftSign;
    values.push(tree.b);
  }
}

function checkNodeProduct(tree, type, values, leftQuotient) {
  if (productTypes.includes(tree.a.type) === true) {
    const inQuotient = quotientTypes.includes(tree.a.type);

    checkNodeProduct(tree.a, type, values, inQuotient);
  }
  else {
    values.push(tree.a);
  }

  if (productTypes.includes(tree.b.type) === true) {
    const inQuotient = quotientTypes.includes(tree.b.type);

    checkNodeProduct(tree.b, type, values, inQuotient);
  }
  else {
    if (leftQuotient === true) {
      tree.b.inDenominator = true;
    }

    values.push(tree.b);
  }
}

function flattenTree(tree, type) {
  // TODO: iterate and flatten tree based on type
  // Set sign information for type sum, set numerator/denominator information for type product
  const values = [];

  if (sumTypes.includes(tree.type)) {
    const leftSign = signMap[tree.type];

    checkNodeSum(tree, type, values, leftSign);
  }
  else {
    const inQuotient = quotientTypes.includes(tree.type);

    checkNodeProduct(tree, type, values, inQuotient);
  }

  return values;
}

function flattenSum(tree) {
  return flattenTree(tree, flattenTypes.sum);
}

function flattenProduct(tree) {
  return flattenTree(tree, flattenTypes.product);
}

function stringFactors(factors) {
  let string = '';

  for (let i = 0; i < factors.length; i++) {
    string += factors[i].toString();

    if (i !== (factors.length - 1)) {
      string += '*';
    }
  }

  return string;
}

function productStringDisplay(total, stringValue) {
  if (total === 1) {
    return stringValue;
  }
  else if (total === -1) {
    return '-' + stringValue;
  }
  else {
    return total + stringValue;
  }
}

function productDisplay(total, stringValue) {
  if (total === 0) {
    return 0;
  }

  if (stringValue !== '') {
    return productStringDisplay(total, stringValue);
  }

  return total;
}

function factorDisplay(factors, variables) {
  let stringValue = '';
  let total = 1;

  for (let i = 0; i < factors.length; i++) {
    const factor = factors[i];
    const evaluatedFactor = factor.evaluate(variables);

    if (typeof evaluatedFactor === 'string') {
      if (stringValue !== '') {
        stringValue += '*';
      }

      stringValue += evaluatedFactor;
    }
    else {
      total *= evaluatedFactor;
    }
  }

  return { numeric: total, string: stringValue };
}

function divideMixed(numerator, denominator) {
  const numeric = numerator.numeric / denominator.numeric;
  let string = numerator.string;

  if (denominator.string.length > 0) {
    string += '/(' + denominator.string + ')';
  }

  return productDisplay(numeric, string);
}

function isSignString(value, sign) {
  return sign === signs.both || (typeof value === 'string' && sign === signs.negative);
}

function signDisplay(value, sign) {
  if (isSignString(value, sign) === true) {
    return signString(sign) + value;
  }
  else if (sign === signs.negative) {
    return value * -1;
  }

  return value;
}

function sumDisplay(terms, variables) {
  let total = 0;
  let stringValue = '';

  for (let i = 0; i < terms.length; i++) {
    const term = terms.evaluate(variables);

    if (typeof term === 'string') {
      if (stringValue !== '') {
        stringValue += ' + ';
      }

      stringValue += term;
    }
    else {
      total += term;
    }
  }

  return { numeric: total, string: stringValue };
}

export class Expression {
  stringFunc() {
    let string = '';

    string += signString(this.sign) + this.name + '(';

    for (let i = 0; i < this.args.length; i++) {
      string += this.args[i].toString();

      if (i !== (this.args.length - 1)) {
        string += ', ';
      }
    }

    string += ')';

    return signString(this.sign) + string;
  }

  stringConstant() {
    return signString(this.sign) + this.name;
  }

  stringVariable() {
    return signString(this.sign) + this.name;
  }

  stringNumber() {
    return signString(this.sign) + this.value.toString();
  }

  stringQuotient() {
    return signString(this.sign) + stringFactors(this.factors.numerator) + '/(' + stringFactors(this.factors.denominator) + ')';
  }

  stringProduct() {
    return signString(this.sign) + stringFactors(this.factors.numerator);
  }

  stringPower() {
    return signString(this.sign) + '(' + this.base.toString() + ')^(' + this.exponent.toString() + ')';
  }

  stringExpression() {
    return signString(this.sign) + '(' + this.child.toString() + ')';
  }

  stringSum() {
    let string = '';

    for (let i = 0; i < this.terms.length; i++) {
      string += this.terms[i].toString();

      if (i !== (this.terms.length - 1)) {
        if (signString(this.terms[i + 1].sign) === '') {
          string += ' + ';
        }
        else {
          string += ' ';
        }
      }
    }

    return string;
  }

  stringMatrix() {
    return signString(this.sign) + this.values.toString();
  }

  handleSum(tree, parent, context) {
    const flattenedSum = flattenSum(tree);
    const terms = [];

    for (let i = 0; i < flattenedSum.length; i++) {
      const term = flattenedSum[i];
      const expr = new Expression(term, parent, context);

      terms.push(expr);
    }

    this.terms = terms;
    this.type = types.sum;
  }

  handlePositive(tree, parent, context) {
    tree.value.sign = signs.positive;
    this.typeHandlers[tree.value.type](tree.value, parent, context);
  }

  handleNegative(tree, parent, context) {
    tree.value.sign = signs.negative;
    this.typeHandlers[tree.value.type](tree.value, parent, context);
  }

  handlePositiveNegative(tree, parent, context) {
    tree.value.sign = signs.both;
    this.typeHandlers[tree.value.type](tree.value, parent, context);
  }

  handleProduct(tree, parent, context) {
    const flattenedProduct = flattenProduct(tree);
    const factors = { numerator: [], denominator: [] };

    for (let i = 0; i < flattenedProduct.length; i++) {
      const factor = flattenedProduct[i];
      const expr = new Expression(factor, parent, context);

      if (factor.inDenominator === true) {
        factors.denominator.push(expr);
      }
      else {
        factors.numerator.push(expr);
      }
    }

    this.factors = factors;

    if (factors.denominator.length > 0) {
      this.type = types.quotient;
    }
    else {
      this.type = types.product;
    }
  }

  handlePower(tree, parent, context) {
    const base = new Expression(tree.a, parent, context);
    const exponent = new Expression(tree.b, parent, context);
    
    this.base = base;
    this.exponent = exponent;
    this.type = types.power;
  }

  handleVariable(tree, parent, context) {
    this.name = tree.name;

    if (context.constants && context.constants[tree.name]) {
      this.type = types.constant;
      this.value = null;

      if (context.constants[tree.name].value) {
        this.value = context.constants[tree.name].value;
      }
    }
    else {
      this.type = types.variable;
    }
  }

  handleNumber(tree, parent, context) {
    this.value = Number(tree.value);
    this.type = types.number;
  }

  handleFunction(tree, parent, context) {
    this.name = tree.name;
    this.args = [];

    if (context.functions && context.functions[tree.name]) {
      this.func = context.functions[tree.name];
    }
    else {
      this.func = (...args) => {
        return 'Function ' + this.name + ' is not defined, sent args:\n' + args;
      };
    }

    for (let i = 0; i < this.args.length; i++) {
      const arg = this.args[i];
      const expr = new Expression(arg, this, context);

      this.args.push(expr);
    }

    this.type = types.func;
  }

  handleExpression(tree, parent, context) {
    const child = new Expression(tree.child, parent, context);

    this.child = child;
    this.type = types.expression;
  }

  handleMatrix(tree, parent, context) {
    const values = [];

    this.n = tree.n;
    this.m = tree.m;

    for (let i = 0; i < tree.m; i++) {
      values[i] = [];

      for (let j = 0; j < tree.n; j++) {
        const element = tree.values[i][j];

        values[i][j] = new Expression(element, parent, context);
      }
    }

    this.values = values;
    this.type = types.matrix;
  }

  evaluateFunc(variables) {
    const evaluatedArgs = [];

    for (let i = 0; i < this.args.length; i++) {
      const arg = this.args[i];
      const evaluatedArg = arg.evaluate(variables);

      evaluatedArgs.push(evaluatedArg);
    }

    return this.func(...evaluatedArgs);
  }

  evaluateConstant(variables) {
    return this.value || variables[this.name] || this.name;
  }

  evaluateVariable(variables) {
    return variables[this.name] || this.name;
  }

  evaluateNumber() {
    return this.value;
  }

  evaluateQuotient(variables) {
    const numerator = factorDisplay(this.factors.numerator, variables);
    const denominator = factorDisplay(this.factors.denominator, variables);
    const quotient = divideMixed(numerator, denominator);

    return quotient;
  }

  evaluateProduct(variables) {
    const factor = factorDisplay(this.factors.numerator, variables);

    return productDisplay(factor.numeric, factor.string);
  }

  evaluatePower(variables) {
    const base = this.base.evaluate(variables);
    const exponent = this.exponent.evaluate(variables);

    if (typeof base !== 'string' && typeof exponent !== 'string') {
      return base ** exponent;
    }
    else {
      return '(' + base + ')^(' + exponent + ')';
    }
  }

  evaluateExpression(variables) {
    return this.child.evaluate(variables);
  }

  evaluateSum(variables) {
    const sum = sumDisplay(this.terms, variables);

    if (sum.string !== '') {
      return sum.numeric + ' + ' + sum.string;
    }

    return sum.numeric;
  }

  evaluateMatrix(variables) {
    const n = this.n;
    const m = this.m;
    const values = [];

    for (let i = 0; i < m; i++) {
      values[i] = [];

      for (let j = 0; j < n; j++) {
        values[i][j] = this.values[i][j].evaluate(variables);
      }
    }

    return values.toString();
  }

  constructor(tree, parent = null, context = {}) {
    this.parent = parent;
    this.context = context;
    this.typeHandlers = {
      'plus': this.handleSum.bind(this), // a b two terms
      'minus': this.handleSum.bind(this), // a b two terms
      'plus-minus': this.handleSum.bind(this), // a b two terms
      'positive': this.handlePositive.bind(this), // value one term
      'negative': this.handleNegative.bind(this), // value one term
      'positive-negative': this.handlePositiveNegative.bind(this), // value one term
      'multiply-implicit': this.handleProduct.bind(this), // a b two terms product
      'multiply-dot': this.handleProduct.bind(this), // a b two terms product
      'multiply-cross': this.handleProduct.bind(this), // a b two terms product
      'divide-fraction': this.handleProduct.bind(this), // a b two terms quotient
      'divide-inline': this.handleProduct.bind(this), // a b two terms quotient
      'power': this.handlePower.bind(this), // a b two terms base and exponent
      'variable': this.handleVariable.bind(this), // value one teerm
      'number': this.handleNumber.bind(this), // value one term
      'function': this.handleFunction.bind(this), // name args one term
      'block': this.handleExpression.bind(this), // child starts new expression one term
      'matrix': this.handleMatrix.bind(this), // n m values one term
    };

    this.typeHandlers[tree.type](tree, this, context);

    this.stringHandlers = {
      [types.func]: this.stringFunc.bind(this),
      [types.constant]: this.stringConstant.bind(this),
      [types.variable]: this.stringVariable.bind(this),
      [types.number]: this.stringNumber.bind(this),
      [types.quotient]: this.stringQuotient.bind(this),
      [types.product]: this.stringProduct.bind(this),
      [types.power]: this.stringPower.bind(this),
      [types.expression]: this.stringExpression.bind(this),
      [types.sum]: this.stringSum.bind(this),
      [types.matrix]: this.stringMatrix.bind(this),
    };

    this.evaluationHandlers = {
      [types.func]: this.evaluateFunc.bind(this),
      [types.constant]: this.evaluateConstant.bind(this),
      [types.variable]: this.evaluateVariable.bind(this),
      [types.number]: this.evaluateNumber.bind(this),
      [types.quotient]: this.evaluateQuotient.bind(this),
      [types.product]: this.evaluateProduct.bind(this),
      [types.power]: this.evaluatePower.bind(this),
      [types.expression]: this.evaluateExpression.bind(this),
      [types.sum]: this.evaluateSum.bind(this),
      [types.matrix]: this.evaluateMatrix.bind(this),
    };

    if (tree.sign) {
      this.sign = tree.sign;
    }
  }

  toString() {
    let value = this.stringHandlers[this.type]();

    if (typeof value === 'string') {
      value = value.replaceAll('+ -', '- ');
    }

    return value;
  }

  evaluate(variables) {
    let value = signDisplay(this.evaluationHandlers[this.type](variables), this.sign);

    if (typeof value === 'string') {
      value = value.replaceAll('+ -', '- ');
    }

    return value;
  }
}

class Relation {
  constructor(lhs, rhs, type, parent, context) {
    this.parent = parent;
    this.lhs = new Expression(lhs, this, context);
    this.rhs = new Expression(rhs, this, context);
    this.type = type;
    this.context = context;
  }

  toString() {
    return this.lhs.toString() + ' ' + equalityTextMap[this.type] + ' ' + this.rhs.toString();
  }

  evaluate(variables) {
    const value = this.lhs.evaluate(variables) + ' ' + equalityTextMap[this.type] + ' ' + this.rhs.evaluate(variables);

    return value;
  }
}

export class Statement {
  constructor(text, context) {
    this.context = context;
    this.text = text;

    try {
      const tree = parse(text);

      if (Object.keys(eqMap).includes(tree.type)) {
        const lhs = tree.a;
        const rhs = tree.b;
        const type = eqMap[tree.type];

        this.result = new Relation(lhs, rhs, type, this, context);
      }
      else {
        this.result = new Expression(tree, this, context);
      }
    }
    catch (error) {
      logger.error(error);
    }
  }

  toString() {
    return this.result.toString();
  }

  evaluate(variables) {
    return this.result.evaluate(variables);
  }
}
