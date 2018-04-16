import { expect } from 'chai';

describe('about classes', () => {

  it('your first class', () => {
    class SuperHero {
      constructor(private fname: string, private lname: string) { }
      talk() {
        return `Hi my name is ${this.fname} ${this.lname}`;
      }
    }

    var hero = new SuperHero('Bruce', 'Wayne');
    expect(hero.talk()).to.eq('Hi my name is Bruce Wayne');
  });

  it('you can use getter and setters', () => {
    class Person {
      constructor(public firstName: string, public lastName: string) { }
      public get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
      public set fullName(value: string) {
        [this.firstName, this.lastName] = value.split(' ');
      }
    }

    var person = new Person('John', 'Doe');
    expect(person.fullName).to.equal('John Doe');
    person.fullName = 'Jane Doe';
    expect(person.firstName).to.equal('Jane');
  });

  it('implement an interface', () => {
    interface IDeveloper {
      readonly favouriteLanguage: string;
    }

    class Developer implements IDeveloper {
      constructor(private _favLang: string) { }
      get favouriteLanguage() { return this._favLang; }
    }

    var developer: IDeveloper = new Developer('TypeScript');
    expect(developer.favouriteLanguage).to.equal('TypeScript');
  });

  it('extend another class', () => {

    abstract class Citizen {
      constructor(protected name: string) { }
      abstract talk(): string;
    }
    class SuperHero extends Citizen {
      constructor(name: string, public alias: string, public ability: string) {
        super(name);
      }
      public talk() {
        return `I fight against evil with ${this.ability}`;
      }
    }

    class Sidekick extends SuperHero {
      constructor(name: string, alias: string, ability: string, private master: SuperHero) {
        super(name, alias, ability);
      }
      public talk() {
        return `${super.talk()} and my master is ${this.master.alias}`;
      }
    }

    var batman = new SuperHero('Bruce Wayne', 'Batman', 'Martial arts');
    var robin = new Sidekick('Dick Grayson', 'Robin', 'Stick', batman);
    expect(robin.talk()).to.equal('I fight against evil with Stick and my master is Batman');
  });

  it('share methods like in pure JS', () => {
    class Developer {
      constructor(private favouriteLanguage: string) { }

      public sayHi() {
        return `Hello my favourite language is ${this.favouriteLanguage}`;
      }
    }

    var developer = new Developer('JavaScript');
    // think about what this should be
    expect(developer.sayHi.call({ favouriteLanguage: 'TypeScript' })).to.eq('Hello my favourite language is TypeScript');
  });
});
