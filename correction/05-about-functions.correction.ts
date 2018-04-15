import { expect } from 'chai';

describe('about typed functions', () => {

  it('should be typed values', () => {
    let sayHello: (name: string) => string;
    sayHello = name => `Hello ${name}`;

    expect(sayHello('TypeScript')).to.eq('Hello TypeScript');
  });

  it('should accept optional arguments', () => {
    function sayHello(name?: string) {
      return `Hello ${name || 'World'}`;
    }

    expect(sayHello()).to.eq('Hello World');
  });

  it('should work with default values', () => {
    let sayHello: (msg: string | undefined, name: string) => string;
    sayHello = (msg = 'Hello', name) => `${msg} ${name}`;

    expect(sayHello(undefined, 'World')).to.eq('Hello World');
  });

  it('make sense with interfaces', (done) => {
    interface IPromise {
      then(cb: (val: boolean) => void): void;
    }

    const myResolvedPromise: IPromise = {
      then(callBack) {
        setImmediate(() => callBack(true));
      }
    };

    myResolvedPromise.then(val => {
      expect(val).to.be.true;
      done();
    });
  });

  it('should accept any number of parameters', () => {
    let join = (separator: string, ...elm: string[]) => elm.join(separator);

    expect(join(', ', 'Hello', 'TypeScript')).to.eq('Hello, TypeScript');
  });

  it('lambda should not loose their this', () => {
    const donald = {
      name: 'Donald',
      greet(msg: string) {
        return () => `${this.name} says hello ${msg}`;
      }
    };

    const donaldGreets = donald.greet('world');
    expect(donaldGreets()).to.eq('Donald says hello world');
  });
});