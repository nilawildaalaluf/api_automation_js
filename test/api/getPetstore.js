const { expect } = require("chai");
const request = require("supertest");
const baseUrl = require("../../env");

describe("Get Request Data Store Inventory", () => {
  it("Find Store Inventory", async () => {
    const response = request(baseUrl()).get("/store/inventory");
    const data = expect((await response).status).to.equal(200);
    console.log(data);
    console.log((await response).body);
    //if you have issue time out (  Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.)
  }).timeout(3000);
});
