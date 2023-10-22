const { expect } = require("chai");
const request = require("supertest");
const baseUrl = require("../../env");
const DATA = require("../../data/jsonData.js");

describe("Post Request Petstore", () => {
  it("Success create user", async () => {
    const response = request(baseUrl())
      .post("/user")
      .send(DATA.CREATE_USER_DATA);
    const data = expect((await response).status).to.equal(200);
    console.log(data);
    console.log((await response).body);
  });
});
