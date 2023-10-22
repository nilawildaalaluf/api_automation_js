const { expect } = require("chai");
const request = require("supertest");
const baseUrl = require("../../env");
const DATA = require("../../data/jsonData.js");

describe("Post Request Petstore", () => {
  const response = request(baseUrl()).post("/user").send(DATA.CREATE_USER_DATA);

  it("Response Sstatus equal 200", async () => {
    //Check response 200
    expect((await response).status).to.equal(200);
  });

  it("Response body to haveOwnProperty ", async () => {
    // Check response have a message
    expect((await response).body).to.haveOwnProperty("message");

    console.log((await response).body);
  });
});
