/* eslint-disable no-undef */
const chai = require("chai");

describe("2 + 2 = 4", () => {
  const res = 2 + 2;
  it("should return 4", () => chai.expect(res).to.eq(4));
});
