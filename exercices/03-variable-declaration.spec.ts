import { expect } from 'chai';
const __ = Symbol('replace me');
describe('about var, let and const', () => {

  it('let should be available only in the block it is declared in', () => {
    var myVar = 1;
    let myLet = 2;

    if (true) {
      var myVar = 3;
      let myLet = 4;
    }

    expect(myVar).to.equal(__);
    expect(myLet).to.equal(__);
  });

  it('should work within for blocks', () => {
    let forLet = 0;

    for (var forVar = 0; forVar < 10; forVar++) {
      for (let forLet = 0; forLet < 10; forLet++) {
        //do something
      }
    }
    expect(forVar).to.equal(__);
    expect(forLet).to.equal(__);
  });

  it('should create a new block for every iteration', () => {
    let sum: number = 0;
    for (const i of [1, 2, 3]) {
      sum += i;
    }
    expect(sum).to.equal(__);
  });

  it('should solve some async issues', (done) => {
    var varStack: number[] = [];
    var letStack: number[] = [];

    for (var forVar = 0; forVar < 3; forVar++) {
      setImmediate(() => varStack.push(forVar));
    }

    for (let forLet = 0; forLet < 3; forLet++) {
      setImmediate(() => letStack.push(forLet));
    }

    setImmediate(() => {
      expect(varStack).to.deep.eq(__);
      expect(letStack).to.deep.eq(__);
      done();
    });
  });

  it('should be constant references not values', () => {
    const myConstArray: number[] = [];
    const myConstObject: any = {};
    let error = false;

    try {
      myConstArray.push(1);
      myConstObject.key = 'value';
    }
    catch (e) {
      error = true;
    }

    expect(error).to.eq(__);
    expect(myConstObject.key).to.eq(__);
  });

  it('cannot express constant, but JS can and TS helps', () => {
    const myConstArray = Object.freeze([]);
    const myConstObject = Object.freeze({});
    let error = false;

    try {
      (<any>myConstArray).push(1);
      (<any>myConstObject).key = 'value';
    }
    catch (e) {
      error = e instanceof TypeError;
    }

    expect(error).to.eq(__);
  });

});
