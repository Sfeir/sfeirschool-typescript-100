import { expect } from 'chai';

describe('about var, let and const', () => {

  it('let should be available only in the block it is declared in', () => {
    var myVar = 1;
    let myLet = 2;

    if (true) {
      var myVar = 3;
      let myLet = 4;
    }

    expect(myVar).to.equal( _ );
    expect(myLet).to.equal( _ );
  });

  it('should work within for blocks', () => {
    let forLet = 0;

    for (var forVar = 0; forVar < 10; forVar++) {
      for (let forLet = 0; forLet < 10; forLet++) {
        //do something
      }
    }
    expect(forVar).to.equal( _ );
    expect(forLet).to.equal( _ );
  });

  it('should create a new block for every iteration', () => {
    let sum: number = 0;
    for (const i of [1, 2, 3]) {
      sum += i;
    }
    expect(sum).to.equal( _ );
  });

  it('should solve some async issues', (done) => {
    var varStack: number[] = [];
    var letStack: number[] = [];
    
    for (var forVar = 0; forVar < 3; forVar++) {
      setTimeout(() => varStack.push(forVar));
    }

    for (let forLet = 0; forLet < 3; forLet++) {
      setTimeout(() => letStack.push(forLet));
    }

    setTimeout(() => {
      expect(varStack).to.deep.eq( _ );
      expect(letStack).to.deep.eq( _ );
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

    expect(error).to.eq( _ );
    expect(myConstObject.key).to.eq( _ );
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

    expect(error).to.eq( _ );
  });

});
