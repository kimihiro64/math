module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: 'eslint:recommended',
  plugins: ['react', 'jsx-a11y', 'import', 'eslint-comments', 'react-hooks', 'promise'],
  overrides: [{
    files: ['*.js'],
    parser: '@babel/eslint-parser',
    plugins: ['flowtype'],
    rules: {
      'flowtype/array-style-complex-type': 'error',
      'flowtype/array-style-simple-type': 'error',
      'flowtype/arrow-parens': 'error',
      'flowtype/boolean-style': 'error',
      'flowtype/define-flow-type': 'error',
      'flowtype/delimiter-dangle': 'error',
      'flowtype/generic-spacing': 'error',
      'flowtype/newline-after-flow-annotation': 'error',
      'flowtype/no-dupe-keys': 'error',
      'flowtype/no-existential-type': 'error',
      'flowtype/no-flow-fix-me-comments': 'error',
      'flowtype/no-internal-flow-type': 'error',
      'flowtype/no-mixed': 'error',
      'flowtype/no-mutable-array': 'error',
      'flowtype/no-primitive-constructor-types': 'error',
      'flowtype/no-types-missing-file-annotation': 'error',
      'flowtype/no-unused-expressions': 'error',
      'flowtype/no-weak-types': 'error',
      'flowtype/object-type-curly-spacing': ['error', 'always'],
      'flowtype/object-type-delimiter': 'error',
      'flowtype/quotes': ['error', 'single'],
      'flowtype/require-compound-type-alias': 'error',
      'flowtype/require-exact-type': 'error',
      'flowtype/require-indexer-name': 'error',
      'flowtype/require-inexact-type': 'error',
      'flowtype/require-parameter-type': 'off',
      'flowtype/require-readonly-react-props': 'off',
      'flowtype/require-return-type': 'off',
      'flowtype/require-types-at-top': 'error',
      'flowtype/require-valid-file-annotation': 'error',
      'flowtype/require-variable-type': 'off',
      'flowtype/semi': 'error',
      'flowtype/sort-keys': 'error',
      'flowtype/space-after-type-colon': 'error',
      'flowtype/space-before-generic-bracket': 'error',
      'flowtype/space-before-type-colon': 'error',
      'flowtype/spread-exact-type': 'error',
      'flowtype/type-id-match': 'error',
      'flowtype/type-import-style': 'error',
      'flowtype/union-intersection-spacing': 'error',
      'flowtype/use-flow-type': 'error',
      'flowtype/use-read-only-spread': 'error',
    },
  }],
  rules: {
    'accessor-pairs': 'off',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': ['error', { allowImplicit: false }],
    'array-element-newline': ['error', 'consistent'],
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
    'callback-return': 'off',
    'camelcase': ['error'],
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate',
      ],
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],
    'complexity': ['error', 4],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': 'off',
    'constructor-super': 'error',
    'curly': ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z0-9]+)+$' }],
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'for-direction': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false,
    }],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'function-call-argument-newline': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', { before: false, after: true }],
    'getter-return': ['error', { allowImplicit: false }],
    'global-require': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'handle-callback-err': 'off',
    'id-blacklist': 'off', // Deprecated
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 0,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false,
    }],
    'indent-legacy': 'off', // Deprecated
    'init-declarations': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': 'off', // Deprecated
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'max-classes-per-file': ['error', 1],
    'max-depth': 'off',
    'max-len': ['error', 280, 2, {
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],
    'new-parens': 'error',
    'newline-after-var': 'off', // Deprecated
    'newline-before-return': 'off', // Deprecated
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off', // Deprecated
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'off',
    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    }],
    'no-mixed-requires': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': ['error'],
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-native-reassign': 'off', // Deprecated
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'off', // Deprecated
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
        'context', // for Metro resolver
      ],
    }],
    'no-path-concat': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'error',
    'no-restricted-globals': ['error',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'isFinite',
      'isNaN',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top'],
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],
    'no-restricted-syntax': [
      'error', {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      }, {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      }, {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      }, {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error', // Deprecated
    'no-sparse-arrays': 'error',
    'no-sync': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': ['error', {
      skipBlankLines: true,
      ignoreComments: false,
    }],
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': ['error', {
      allow: [
        '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
      ],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-unreachable': 'error',
    'no-unreachable-loop': ['error', {
      'ignore': [
      ],
    }],
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: 'prevProps|nextProps|prevState|state|ownProps|navigation' }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'error',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 10, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 10, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 10, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 10, multiline: true, consistent: true },
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'object-shorthand': ['error', 'never'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }],
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: 'directive' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'do' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'throw' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'while' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: 'let', next: '*' },
      { blankLine: 'always', prev: 'const', next: '*' },
      { blankLine: 'never', prev: 'let', next: 'let' },
      { blankLine: 'never', prev: 'const', next: 'let' },
      { blankLine: 'never', prev: 'let', next: 'const' },
      { blankLine: 'never', prev: 'const', next: 'const' },
      { blankLine: 'always', prev: 'expression', next: 'const' },
      { blankLine: 'always', prev: 'expression', next: 'let' }],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-reflect': 'off', // Deprecated
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'radix': 'error',
    'require-atomic-updates': 'off',
    'require-await': 'error',
    'require-jsdoc': 'off', // Deprecated
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'sort-imports': 'off',
    'sort-keys': ['off'],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {},
    }],
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: true,
      },
    }],
    'strict': ['error', 'never'],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-jsdoc': 'off', // Deprecated
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', 'after'],
    'yoda': 'error',
    // ESLint Comments
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-restricted-disable': ['off',
      // TODO: turn this rule back on when plugin rules are fixed
      '*',
      '!import/no-unassigned-import',
      '!import/newline-after-import',
      '!react/no-unused-prop-types',
      '!no-underscore-dangle',
      '!no-console',
      '!no-bitwise'],
    'eslint-comments/no-use': 'off',
    'eslint-comments/require-description': ['error', { ignore: [] }],
    // Import
    'import/default': 'off',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/imports-first': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/no-default-export': 'off',
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // jest config
        '**/jest.setup.js', // jest setup
        '**/vue.config.js', // vue-cli config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/gulpfile.js', // gulp config
        '**/gulpfile.*.js', // gulp config
        '**/Gruntfile{,.js}', // grunt config
        '**/protractor.conf.js', // protractor config
        '**/protractor.conf.*.js', // protractor config
      ],
      optionalDependencies: false,
    }],
    'import/no-import-module-exports': ['error', {
      'exceptions': [],
    }],
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
    // Jsx a11y
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/alt-text': ['error', {
      'elements': ['img', 'object', 'area', 'input[type="image"]'],
      'img': [],
      'object': [],
      'area': [],
      'input[type="image"]': [],
    }],
    'jsx-a11y/anchor-has-content': ['error', { components: [] }],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': ['error', { ignoreNonDom: false }],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/autocomplete-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/control-has-associated-label': ['off', {
      labelAttributes: ['label'],
      controlComponents: [],
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video',
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      depth: 5,
    }],
    'jsx-a11y/heading-has-content': ['error', { components: [''] }],
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'both',
      depth: 25,
    }],
    'jsx-a11y/label-has-for': ['error', {
      components: [],
      required: {
        every: ['nesting', 'id'],
      },
      allowChildren: false,
    }],
    'jsx-a11y/lang': 'error',
    'jsx-a11y/media-has-caption': ['error', {
      audio: [],
      video: [],
      track: [],
    }],
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
    'jsx-a11y/no-distracting-elements': ['error', {
      elements: ['marquee', 'blink'],
    }],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
      tr: ['none', 'presentation'],
    }],
    'jsx-a11y/no-noninteractive-element-interactions': ['error', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
    }],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    }],
    'jsx-a11y/no-noninteractive-tabindex': ['error', {
      tags: [],
      roles: ['tabpanel'],
    }],
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': ['error', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
    }],
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
    'jsx-a11y/scope': 'error',
    // Prettier
    'prettier/prettier': 'off',
    // Promise
    'promise/always-return': 'error',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'promise/no-callback-in-promise': 'off',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'off',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': ['error', { allowReject: true }],
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/valid-params': 'error',
    // React
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': ['error', {
      button: true,
      submit: true,
      reset: false,
    }],
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
    'react/display-name': 'error',
    'react/destructuring-assignment': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': ['error', { namedComponents: 'function-declaration' }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'always' }],
    'react/jsx-curly-newline': 'off',
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-newline': ['error', { prevent: true }],
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 'error',
    'react/jsx-no-script-url': ['error', []],
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-prop-types': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: false }],
    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      skipShapeProps: false,
    }],
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    }],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true,
    }],
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': ['error', 'property assignment'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/wrap-multilines': 'off',
    // React-Hooks Plugin
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    describe: false,
    document: false,
    escape: false,
    Event: false,
    EventTarget: false,
    expect: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    Headers: false,
    Intl: false,
    it: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      'node': {
        extensions: ['.mjs', '.js', '.json', '.jsx'],
      },
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
    'import/core-modules': ['electron'],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
    'react': {
      pragma: 'React',
      version: 'detect',
    },
    'propWrapperFunctions': [
      'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
      'exact', // https://www.npmjs.com/package/prop-types-exact
      'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  },
  env: {
    jest: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
      jsx: true,
    },
  },
};
