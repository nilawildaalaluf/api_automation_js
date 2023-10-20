const { expect } = require("chai");
const request = require("supertest");
const baseUrl = require("../../env");

describe("Post Request Petstore", () => {
  it("Success create user", async () => {
    const response = request(baseUrl()).post("/user").send({
      id: 1234321,
      username: "test_qa",
      firstName: "qa",
      lastName: "automation",
      email: "qatest@gmail.com",
      password: "12345",
      phone: "098889899887",
      userStatus: 1,
    });
    const data = expect((await response).status).to.equal(200);
    console.log(data);
    console.log((await response).body);
  }).timeout(3000);
});
