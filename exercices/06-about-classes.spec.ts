import { expect } from 'chai';
const __ = Symbol('replace me');
describe('about classes', () => {

  it('your first class', () => {
    class SuperHero {
      __
    }

    var hero = new SuperHero('Bruce', 'Wayne');
    expect(hero.talk()).to.eq('Hi my name is Bruce Wayne');
  });

  it('you can use getter and setters', () => {
    class Person {
      __
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
    }

    var developer: IDeveloper = new Developer('TypeScript');
    expect(developer.favouriteLanguage).to.equal('TypeScript');
  });

  it('extend another class', () => {
    abstract class Citizen {
      constructor(protected name: string) { }
      abstract talk(): string;
    }
    class SuperHero {
      constructor(name: string, public alias: string, public ability: string) {
      }
      public talk() {
        return `I fight against evil with ${this.ability}`;
      }
    }

    class Sidekick extends SuperHero {
      __
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
    expect(developer.sayHi.call(__)).to.eq('Hello my favourite language is TypeScript');
  });
});
