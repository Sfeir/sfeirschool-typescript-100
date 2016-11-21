import { expect } from 'chai';

describe('TS types', () => {

  it('should be the same as in JavaScript for primitve types', () => {
    var aBoolean: _ ;
    var aString: _ ;
    var aNumber: _ ;

    aBoolean = _ ;
    aString = _ ;
    aNumber = _ ;

    expect(aBoolean).to.be.true;
    expect(aString).to.eq('abc');
    expect(aNumber).to.eq(42);
  });

  it('should have a special notation for arrays', () => {
    var aList: _ ;
    aList = [ _ ] ;
    
    expect(aList).to.deep.eq([1, 2, 3]);
  });

  it('should allow for putting different things in an array', () => {
    var aList: ( _ | _ )[];
    aList = _ ;

    expect(aList).to.deep.eq([1, "2"]);
  });

  it('should have a notation for tuples (fixed sized arrays)', () => {
    var aTemperature: [ _ , _ ];
    aTemperature = [ _ , _ ] ;
    
    // descructuring declaration - we'll cover this soon
    var [val, unit] = aTemperature;
    expect(val).to.equal(32);
    expect(unit).to.equal('F');
  });

  it('include enum types', () => {
    enum myFirstEnum {
      _, _
    }
    
    expect(myFirstEnum.red).to.equal(0);
    expect(myFirstEnum[2]).to.equal('blue');
  });

  it('should help you with null and undefined', () => {
    var nullable: string | _ ;
    var undefinable: number | _ ;
    
    nullable = null;
    undefinable = undefined;
    
    expect(nullable).to.be.null;
    expect(undefinable).to.be.undefined;
  });

  it('should allow for typing function arguments too', () => {
    function sayHello(name: _) {
      return 'Hello '.concat(name);
    }
    expect(sayHello('TypeScript')).to.equal( 'Hello TypeScript' );
  });
});
