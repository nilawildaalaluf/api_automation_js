const assert = require("chai").assert;
const app = require("../../assert");

//cara assert menggunakan chai

describe("Welcome Test", function () {
  it("app should return welcome message", function () {
    assert.equal(app(), "Welcome Nila in QA");
  });
});
