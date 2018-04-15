import { expect } from 'chai';

describe('TS types', () => {

  it('should be the same as in JavaScript for primitve types', () => {
    var aBoolean: boolean;
    var aString: string;
    var aNumber: number;

    aBoolean = true;
    aString = 'abc';
    aNumber = 42;

    expect(aBoolean).to.be.true;
    expect(aString).to.eq('abc');
    expect(aNumber).to.eq(42);
  });

  it('should have a special notation for arrays', () => {
    var aList: number[];
    aList = [1, 2, 3];

    expect(aList).to.deep.eq([1, 2, 3]);
  });

  it('should allow for putting different things in an array', () => {
    var aList: (string | number)[];
    aList = [1, "2"];

    expect(aList).to.deep.eq([1, "2"]);
  });

  it('should have a notation for tuples (fixed sized arrays)', () => {
    var aTemperature: [number, 'C' | 'F'];
    aTemperature = [32, 'F'];

    // descructuring declaration - we'll cover this soon
    var [val, unit] = aTemperature;
    expect(val).to.equal(32);
    expect(unit).to.equal('F');
  });

  it('include enum types', () => {
    enum myFirstEnum {
      red, blue = 2
    }

    expect(myFirstEnum.red).to.equal(0);
    expect(myFirstEnum[2]).to.equal('blue');
  });

  it('should help you with null and undefined', () => {
    var nullable: string | null;
    var undefinable: number | undefined;

    nullable = null;
    undefinable = undefined;

    expect(nullable).to.be.null;
    expect(undefinable).to.be.undefined;
  });

  it('should allow for typing function arguments too', () => {
    function sayHello(name: string) {
      return 'Hello '.concat(name);
    }
    expect(sayHello('TypeScript')).to.equal('Hello TypeScript');
  });
});
