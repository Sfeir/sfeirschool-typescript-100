import * as chai from 'chai';
var expect = chai.expect;

describe('about basic types', () => {
  it('1-you should know what type of booleans is', () => {
    expect(true).to.be.a('boolean');
  });

  it('2-you should know what type of strings is', () => {
    expect('A').to.be.a('string');
    expect("a string").to.be.a('string');
  });

  it('3-you should know what type of numbers is', () => {
    expect(42).to.be.a('number');
    expect(Math.PI).to.be.a('number');
  });

  it('4-you should know what type of undefined is', () => {
    expect(undefined).to.be.an('undefined');
  });

  it('5-you should know what type of functions is', () => {
    expect(function () { }).to.be.a('function');
    expect(() => { }).to.be.a('function');
  });

  it('6-you should know what type of objects is', () => {
    expect({ foo: 'bar' }).to.be.an('object');

    expect([1, 2, 3]).to.be.an('array');
    expect(typeof [1, 2, 3]).to.equal('object');

    expect(/Regexp/).to.be.a('regexp');
    expect(typeof /Regex/g).to.equal('object');

    expect(new Date()).to.be.a('date');
    expect(typeof new Date()).to.equal('object');

    expect(Symbol()).to.be.a('symbol');
    expect(typeof Symbol()).to.equal('symbol');
  });

  class Person {
    public firstName: string;
    public lastName: string;
    constructor() {
      this.firstName = 'John';
      this.lastName = 'Doe';
    }
  }

  it('7-you should know what type of classes is', () => {
    expect(new Person()).to.be.an('object');
  });
});
