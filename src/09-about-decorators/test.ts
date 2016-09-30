import * as chai from 'chai';
import { logConstructor, logMethod } from './decorators/log';
var expect = chai.expect;

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

  beforeEach(() => calculator = new Calculator());

  it('1-should log constructor', () => {
    expect(logStack).to.eql(['Create constructor Calculator']);
  });

  it('2-should log methods', () => {
    logStack.length = 0;
    calculator.double(2);
    expect(logStack).to.eql(['Call: double(2) => 4']);
  });
});
