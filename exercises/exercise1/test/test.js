const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./server");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Arithmetic API", () => {
  it("should add two numbers", (done) => {
    chai
      .request(app)
      .get("/api/calculate/add?a=5&b=3")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(8);
        done();
      });
  });

  // Write similar tests for other arithmetic operations

  // Write tests for edge cases and error handling
});
