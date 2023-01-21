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
describe("test Image Page That Will Resize The Image", () => {
  it("get the / from the server", async () => {
    const res = await resquest.get("/img");
    expect(res.status).toBe(200);
  });
});
