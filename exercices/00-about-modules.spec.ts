import { expect } from 'chai';
import { describe, it } from 'mocha';

import { default as default1, foo, bar } from './lib/monModule'
import default2 from './lib/monModule';

import * as star from './lib/oldStyleExport';
import asDefault from './lib/oldStyleExport';

const __ = Symbol('replace me');

describe('typescript exports', () => {

  it('different default syntax import should be equivalent', () => {
    expect(default1 === default2).to.eq(__);
  });

  it('should properly export bar, see export.ts', () => {
    expect(bar).to.eq(__);
  });

  it('should properly export foo, see export.ts', () => {
    expect(foo).to.eq(__);
  });

});

describe('node exports', () => {

  it("should be imported with * as ..., see oldStyleExport.ts", () => {
    expect(star).to.eq(__);
  });

  it("should not be imported with 'default' key", () => {
    expect(star.default).to.eq(__);
  });

  it("should not be imported as a typescript default export", () => {
    expect(asDefault).to.eq(__);
  });

});

describe('node require() with es6 export', () => {

  const oldStyleImport = require('./lib/monModule');

  it("should be imported as es6 import", () => {

    expect(oldStyleImport).to.deep.eq({
      foo: __,
      bar: __,
      __: "ceci est l'export par defaut 'façon typescript' !",
    });

  });

});
