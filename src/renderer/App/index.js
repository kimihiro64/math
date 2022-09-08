import React from 'react';
import { Statement } from '../expressions';

const text = 'Here is an app';

export default function App() {
  const statement = new Statement('y=3*x^2-x*d+2-c', {});

  return (
    <div>
      <span>{text}</span>
      <div />
      <span>{statement.toString()}</span>
      <div />
      <span>{statement.evaluate({ x: 7 })}</span>
    </div>
  );
}
