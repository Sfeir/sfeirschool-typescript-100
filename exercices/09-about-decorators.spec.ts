import { expect } from 'chai';

describe('about decorators', () => {
  var calculator: Calculator,
    logStack: string[] = [];

  console.info = (...args: any[]) => logStack.push(...args);

  class Calculator {
    double(n: number) {
      return n * 2;
    }
  }

  beforeEach(function () { calculator = new Calculator() });

  it('1-should log constructor', () => {
    expect(logStack).to.eql(_);
  });

  it('2-should log methods', () => {
    calculator.double(2);
    expect(logStack).to.eql(_);
  });
});
