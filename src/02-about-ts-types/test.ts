import * as chai from 'chai';
var expect = chai.expect;

describe('about ts types', () => {
  it('1-should compile to plain javascript', () => {
    var boolean: boolean = true;
    var integer: number = 6;
    var float: number = Math.PI;
    var foo: string = 'bar';
    expect(boolean).to.be.true;
    expect(integer).to.equal(6);
    expect(float).to.equal(Math.PI);
    expect(foo).to.equal('bar');
  });

  it('2-should type arrays', () => {
    var list: number[] = [1, 2];
    expect(list.length).to.equal(2);
  });

  it('3-should type tuples', () => {
    var tupple: [number, string] = [42, 'foo'];
    expect(tupple[0]).to.equal(42);
    expect(tupple[1]).to.equal('foo');
  });

  it('4-should type enums', () => {
    enum myFirstEnum {
      red,
      green,
      blue
    };
    expect(myFirstEnum.red).to.equal(0);
    expect(myFirstEnum[2]).to.equal('blue');
  });

  it('5-should type null and undefined', () => {
    var nullVar: null = null;
    var undefinedVar: undefined = undefined;
    expect(nullVar).to.be.null;
    expect(undefinedVar).to.be.undefined;
  });

  it('6-should work in functions arguments too', () => {
    function sayHello(name: string) {
      return 'Hello '.concat(name);
    }
    expect(sayHello('TypeScript')).to.equal('Hello TypeScript');
  });

  it('7-should infer the type', () => {
    function add(a: number, b: string) {
      return a + b;
    }
    expect(add(17, '25')).to.equal('1725');
  });
});
