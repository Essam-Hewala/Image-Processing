import sharp from "sharp";
import { cachedimgdir, imgdir } from "./router";
import joi from "joi";
async function resizes(width: number,height: number,image: string): Promise<string> {
  await sharp(`${imgdir}/${image}.jpg`)
    .resize(width, height)
    .jpeg({ mozjpeg: true })
    .toFile(`${cachedimgdir}/${image}_${width}_${height}.jpg`);
  return `${image}_${width}_${height}.jpg`;
}
function validatedata(data: string) {
  const testdata = joi.object({
    name: joi.string().required(),
    width: joi.number().required(),
    height: joi.number().required()});
  const reason = {
    errors: {
      wrap: {
        label: "'",
      },
    },
  };
return testdata.validate(data, reason);
}
export  {resizes,validatedata};