import { logConstructor, logMethod } from './lib/log';
import { expect } from 'chai';

describe('about decorators', () => {
  var calculator: Calculator,
    logStack: string[] = [];

  console.info = (...args: any[]) => logStack.push(...args);

  @logConstructor
  class Calculator {
    @logMethod
    double(n: number) {
      return n * 2;
    }
  }

  beforeEach(function () { calculator = new Calculator() });

  it('1-should log constructor', () => {
    expect(logStack).to.eql(['Create constructor Calculator']);
  });

  it('2-should log methods', () => {
    calculator.double(2);
    expect(logStack).to.eql(['Create constructor Calculator', 'Call: double(2) => 4']);
  });
});
