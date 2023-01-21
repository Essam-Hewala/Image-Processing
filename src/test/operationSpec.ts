import { cachedimgdir } from "../router/router";
import fs from "fs";
import {resizes} from "../router/operatins";
describe("Testing Functions Resizing", () => {
  it("Test image  720*720", async () => {
    if (fs.existsSync(`${cachedimgdir}/task_720_720.jpg`)) {
      fs.unlinkSync(`${cachedimgdir}/task_720_720.jpg`);
    }
    const resized = await resizes(720, 720, "task");
    expect(resized).toBe("task_720_720.jpg");
  });
});
