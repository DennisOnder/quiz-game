/* eslint-disable no-undef */
const chai = require("chai");
const callApi = require("../utils/callApi");

describe("Server Status", () => {
  it("should return the status code of 200", async () => {
    const res = await callApi("get", "/server/test");
    chai.expect(res.status).to.eq(200);
  });
});
