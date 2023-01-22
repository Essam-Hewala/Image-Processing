import { cachedimgdir } from "../router/router";
import fs from "fs";
import { resizes, validatedata } from "../router/operatins";
describe("Testing Functions Resizing", () => {
  it("Test image  720*720", async () => {
    if (fs.existsSync(`${cachedimgdir}/task_720_720.jpg`)) {
      fs.unlinkSync(`${cachedimgdir}/task_720_720.jpg`);
    }
    const resized = await resizes(720, 720, "task");
    expect(resized).toBe("task_720_720.jpg");
  });
  it('Expect To return  error with "name" variable missing', async () => {
    const values = {
      width: 720,
      height: 720,
    };
    const validate = await validatedata(values as unknown as string);
    expect(validate.error).toBeDefined();
  });
});
