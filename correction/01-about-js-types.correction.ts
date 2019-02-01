import { expect } from 'chai';

describe('about basic types', () => {

  it('you should know the type of true/false', () => {
    var exp = true;
    expect(typeof exp).to.eq('boolean');
  });

  it('you should know the type of some quoted characters', () => {
    var exp = 'SFEIR';
    expect(typeof exp).to.eq('string');
  });

  it('you should know the type of logically combined expressions', () => {
    var exp1 = 42 === 42 && 2 < 1;
    var exp2 = 0 || (0).toString();
    expect(typeof exp1).to.eq('boolean');
    expect(typeof exp2).to.eq('string');
  });

  it('you should know the type of numeric expressions', () => {
    var exp1 = 42;
    var exp2 = 3.1415;
    expect(typeof exp1).to.eq('number');
    expect(typeof exp2).to.eq('number');
  });

  it('you should know the type of special numbers', () => {
    var notANumber = NaN;
    var veryBigNumber = 1 / 0;
    expect(typeof notANumber).to.eq('number');
    expect(typeof veryBigNumber).to.eq('number');
  });

  it('you should know the type of something that is not (yet) anything', () => {
    var exp;
    expect(typeof exp).to.eq('undefined');
  });

  it('you should know the type of functions', () => {
    function fun() { }
    var exp = () => { };
    expect(typeof fun).to.eq('function');
    expect(typeof exp).to.eq('function');
  });

  it('you should know the type of objects', () => {
    var exp = { foo: 'bar' };
    expect(typeof exp).to.eq('object');
  });

  it('you should know the type of arrays', () => {
    var exp = [1, 2, 3];
    expect(typeof exp).to.eq('object');
  });

  it('you should know the type of some native things', () => {
    expect(typeof new Date()).to.eq('object');
    expect(typeof /Regexp/g).to.eq('object');
    expect(typeof Symbol()).to.eq('symbol');

    expect(typeof Date).to.eq('function');
  });

  it('you should know the type of null !', () => {
    var exp = null;
    expect(typeof exp).to.eq('object');
  });
});
