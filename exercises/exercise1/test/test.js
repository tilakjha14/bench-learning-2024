const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./src/app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Arithmetic API", () => {
  it("should add two numbers", (done) => {
    chai
      .request(app)
      .get("/api/calculate/addition?a=5&b=3")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(8);
        done();
      });
  });
  it("should substract two numbers", (done) => {
    chai
      .request(app)
      .get("/api/calculate/substraction?a=5&b=3")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(2);
        done();
      });
  });
  it("should multiply two numbers", (done) => {
    chai
      .request(app)
      .get("/api/calculate/multiplication?a=5&b=3")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(15);
        done();
      });
  });
  it("should divide two numbers", (done) => {
    chai
      .request(app)
      .get("/api/calculate/division?a=6&b=3")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(2);
        done();
      });
  });
});
