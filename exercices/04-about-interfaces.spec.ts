import { expect } from 'chai';
const __ = Symbol('replace me');
type __ = never;
describe('TS interfaces', () => {

  it('should describe the shape of an object', () => {
    var person: __ = {
      __: __
    };
    expect(person.firstName).to.equal('John');
  });

  it('can be declared just as JS bindings', () => {

    interface __ { __: __; }

    var person: IPerson = {
      __: __
    };
    expect(person.lastName).to.equal('Doe');
  });

  it('should be extendable by simply redeclaring them', () => {
    interface IPerson {
      gender: 'male' | 'female';
    }

    interface __ { __: __; }

    var person: IPerson = {
      gender: 'male',
      __: __
    };
    expect(person.gender).to.equal('male');
    expect(person.name).to.equal('Chuck');
  });

  it('should be extendable with the extends keyword', () => {
    interface IPerson {
      gender: 'male' | 'female' | 'other';
    }

    interface __ extends __ { __: __; }

    var person: INamedPerson = {
      gender: __,
      name: __
    };

    expect(person.gender).to.equal('other');
    expect(person.name).to.equal('Conchita');
  });

  it('can have optional properties', () => {
    interface IPerson {
      firstName: string;
      lastName?: string;
    }

    var person: IPerson = {
      firstName: __
    };

    if (__) {
      person.lastName = person.lastName.toUpperCase();
    }

    expect(person.firstName).to.equal('John');
    expect(person.lastName).to.equal(undefined);
  });

  it('can have readonly properties', () => {
    interface IPerson {
      readonly firstName: string;
    }

    var error: boolean = false;
    var person: IPerson = {
      get firstName() { return 'John'; }
    };

    // even if you pass the test, your ide should inform you of an error
    // remove the keyword to pass the typechecking test
    try {
      person.firstName = 'Jane';
    }
    catch (e) {
      error = true;
    }

    expect(error).to.be.true;
    expect(person.firstName).to.equal(__);
  });

  it('can describe maps', () => {
    interface IPerson {
      firstName: string;
    }
    interface __ { __: __; }

    var contacts: IContacts = {
      johnId: { firstName: __ },
      __: { __: 'Jane' }
    };

    ['johnId', 'janeId'].forEach(id =>
      expect(contacts[id].firstName).not.to.be.undefined
    );
  });
});
