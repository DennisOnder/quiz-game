/* eslint-disable no-undef */
const chai = require("chai");
const callApi = require("../utils/callApi");

describe("Questions Module", () => {
  it("should return a random question", async () => {
    const res = await callApi("get", "/question/get");
    chai.expect(res.status).to.eq(200);
    chai
      .expect(res.data)
      .to.have.all.keys(
        "_id",
        "answers",
        "body",
        "providedBy",
        "correctAnswer",
        "createdAt"
      );
  });
});
