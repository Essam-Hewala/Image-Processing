import sharp from "sharp";
import { cachedimgdir, imgdir } from "./router";
async function resizes(
  width: number,
  height: number,
  image: string
): Promise<string> {
  await sharp(`${imgdir}/${image}.jpg`)
    .resize(width, height)
    .jpeg({ mozjpeg: true })
    .toFile(`${cachedimgdir}/${image}_${width}_${height}.jpg`);
  return `${image}_${width}_${height}.jpg`;
}
export default resizes;
