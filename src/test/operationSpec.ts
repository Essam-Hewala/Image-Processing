import Supertest from "supertest";
import { cachedimgdir} from "../router/router";
import fs from "fs";
import resizes from "../router/operatins";
describe("Testing Functions Resizing", () => {
    it('Test image  720*720', async () => {
      if (fs.existsSync(`${cachedimgdir}/encenadaport_100_100.jpg`)) {
        fs.unlinkSync(`${cachedimgdir}/encenadaport_100_100.jpg`);
      }
      const resized = await resizes(720, 720, 'encenadaport');
      expect(resized).toBe('encenadaport_720_720.jpg');
    });
});