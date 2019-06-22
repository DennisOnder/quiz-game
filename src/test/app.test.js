/* eslint-disable no-undef */
const chai = require("chai");
const callApi = require("../utils/callApi");
const { TEST_PORT } = require("../config/config");
const app = require("../app");
let server;

before(done => {
  server = app.listen(TEST_PORT, done);
});

describe("Server Status", () => {
  it("should return the status code of 200", async () => {
    const res = await callApi("get", "/server/test");
    chai.expect(res.status).to.eq(200);
  });
});

after(() => {
  server.close();
  process.exit(0);
});
