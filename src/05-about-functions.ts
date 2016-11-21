import { expect } from 'chai';

describe('about typed functions', () => {

  it('should be typed values', () => {
    let sayHello: _ ;
    sayHello = name => _ ;
    
    expect(sayHello('TypeScript')).to.eq('Hello TypeScript');
  });

  it('should accept optional arguments', () => {
    function sayHello(name: string) { //_
      return `Hello ${name || 'World'}`;
    }

    expect(sayHello()).to.eq( _ );
  });

  it('should work with default values', () => {
    let sayHello: _ ;
    sayHello = (msg = 'Hello', name) => `${msg} ${name}`;

    expect(sayHello(undefined, 'World')).to.eq( _ );
  });

  it('make sense with interfaces', (done) => {
    interface IPromise {
      _
    }

    const myResolvedPromise: IPromise = {
      then(callBack) {
        setTimeout(() => callBack(_));
      }
    };

    myResolvedPromise.then(val => {
      expect(val).to.be.true;
      done();
    });
  });

  it('should accept any number of parameters', () => {
    let join: _ ;
    join = ( _ ) => elm.join(separator);

    expect(join(', ', 'Hello', 'TypeScript')).to.eq('Hello, TypeScript');
  });

  it('should not loose their this', () => {
    const donald = {
      name: 'Donald',
      greet(msg: string) {
        _
      }
    };

    const donaldGreets = donald.greet('world');
    expect(donaldGreets()).to.eq('Donald says hello world');
  });
});