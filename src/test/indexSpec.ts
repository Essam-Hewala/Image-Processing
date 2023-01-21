import Supertest from "supertest";
import app from "../index";
const resquest = Supertest(app);
// test basic server
describe("test basic server", () => {
  it("get the / from the server", async () => {
    const res = await resquest.get("/");
    expect(res.status).toBe(200);
  });
});