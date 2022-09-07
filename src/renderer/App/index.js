import React from 'react';
import { Statement } from '../expressions';

const text = 'Here is an app';

export default function App() {
  const statement = new Statement('a+(b*c)^3/d', {});

  return (
    <div>
      <span>{text}</span>
      <div />
      <span>{statement.toString()}</span>
    </div>
  );
}
