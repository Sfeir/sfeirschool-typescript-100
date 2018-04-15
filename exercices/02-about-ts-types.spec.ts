import { expect } from 'chai';
const __ = Symbol('replace me');
type __ = never;
describe('TS types', () => {

  it('should be the same as in JavaScript for primitve types', () => {
    var aBoolean: __ = __;
    var aString: __ = __;
    var aNumber: __ = __;

    expect(aBoolean).to.be.true;
    expect(aString).to.eq('abc');
    expect(aNumber).to.eq(42);
  });

  it('should have a special notation for arrays', () => {
    var aList: __ = [__];

    expect(aList).to.deep.eq([1, 2, 3]);
  });

  it('should allow for putting different things in an array', () => {
    var aList: (__ | __)[] = __;

    expect(aList).to.deep.eq([1, "2"]);
  });

  it('should have a notation for tuples (fixed sized arrays)', () => {
    var aTemperature: [__, __] = [__, __];

    // descructuring declaration - we'll cover this soon
    var [val, unit] = aTemperature;
    expect(val).to.equal(32);
    expect(unit).to.equal('F');
  });

  it('include enum types', () => {
    enum myFirstEnum {
      __, __
    }

    expect(myFirstEnum.red).to.equal(0);
    expect(myFirstEnum[2]).to.equal('blue');
  });

  it('should help you with null and undefined', () => {
    var nullable: string | __ = null;
    var undefinable: number | __ = undefined;

    expect(nullable).to.be.null;
    expect(undefinable).to.be.undefined;
  });

  it('should allow for typing function arguments too', () => {
    function sayHello(name: __) {
      return 'Hello '.concat(name);
    }
    expect(sayHello(__)).to.equal('Hello TypeScript');
  });
});
