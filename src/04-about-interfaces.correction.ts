import { expect } from 'chai';

describe('TS interfaces', () => {

  it('should describe the shape of an object', () => {
    var person: { firstName: string } = {
      firstName: 'John'
    };
    expect(person.firstName).to.equal('John');
  });

  it('can be declared just as JS bindings', () => {
    interface IPerson {
      lastName: string;
    }

    var person: IPerson = {
      lastName: 'Doe'
    };
    expect(person.lastName).to.equal('Doe');
  });

  it('should be extendable by simply redeclaring them', () => {
    interface IPerson {
      gender: 'male' | 'female';
    }

    interface IPerson {
      name: string;
    }

    var person: IPerson = {
      gender: 'male',
      name: 'Chuck'
    };
    expect(person.gender).to.equal('male');
    expect(person.name).to.equal('Chuck');
  });

  it('should be extendable with the extends keyword', () => {
    interface IPerson {
      gender: 'male' | 'female' | 'other';
    }

    interface INamedPerson extends IPerson {
      name: string;
    }

    var person: INamedPerson = {
      gender: 'other',
      name: 'Conchita'
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
      firstName: 'John'
    };

    if (person.lastName) {
      person.lastName = person.lastName.toUpperCase();
    }

    expect(person.firstName).to.equal('John');
    expect(person.lastName).to.equal(undefined);
  });

  it('can have readonly properties', () => {
    // it does not transpile, ad this is good !
    // remove the keyword to pass the test
    interface IPerson {
      firstName: string;
    }

    var error: boolean = false;
    var person: IPerson = {
      get firstName() { return 'John'; }
    };

    try {
      person.firstName = 'Jane';
    }
    catch (e) {
      error = true;
    }

    expect(error).to.be.true;
    expect(person.firstName).to.equal('John');
  });

  it('can describe maps', () => {
    interface IPerson {
      firstName: string;
    }

    interface IContacts {
      [index: string]: IPerson;
    }

    var contacts: IContacts = {
      johnId: { firstName: 'John' },
      janeId: { firstName: 'Jane' }
    };

    ['johnId', 'janeId'].forEach(id =>
      expect(contacts[id].firstName).not.to.be.undefined
    );
  });
});
