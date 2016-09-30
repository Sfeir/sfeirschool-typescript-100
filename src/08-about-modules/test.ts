import * as chai from 'chai';
import {ZipCodeValidator} from './modules/validator';
import Validator from './modules/validator';
import {LettersOnlyValidator as LettersValidator} from './modules/validator';
import * as validators from './modules/validator';
var expect = chai.expect;

describe('about modules', () => {
  it('1-can import a class exported by the module', () => {
    var validator = new ZipCodeValidator();
    expect(validator.isAcceptable('12345')).to.be.true;
  });

  it('2-can import a default export', () => {
    var validator = new Validator();
    expect(validator.isAcceptable('12345')).to.be.true;
  });

  it('3-can rename imports', () => {
    var validator = new LettersValidator();
    expect(validator.isAcceptable('12345')).to.be.false;
  });

  it('4-can import everything', () => {
    expect(validators.lettersRegexp.test('ABCDE')).to.be.true;
    expect(validators.numberRegexp.test('12345')).to.be.true;
  });
});
