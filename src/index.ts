import express, { Application, Request, Response } from "express";
import fs from "fs";
import { cachedimgdir } from "./router/router";
import { resizes, validatedata } from "./router/operatins";
const port = 3000;
const app: Application = express();
// main page
app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send(
      "<h1>Hello From Main Page You Have To Enter Data Like The Below Example To See Results</h1><h2>img?name='Image Name'&width='width number'&height='Height Number'</h2>"
    );
});
app.use(express.static(cachedimgdir));
// resizing page
app.get("/img", (req: Request, res: Response) => {
  const resize = {
    name: req.query.name as string,
    width: parseInt(req.query.width as string),
    height: parseInt(req.query.height as string),
  };
  const { error } = validatedata(req.query as unknown as string);
  if (error) {
    return res.status(400).send(error.details[0].message);
    // return res.senderror(`<h3>Missing Data Please Make Sure To Fill All Data (Name,Width,Height)</h3>`);
  }
  if (
    fs.existsSync(
      `${cachedimgdir}/${resize.name}_${resize.width}_${resize.height}.jpg`
    )
  ) {
    /* check if the image resized*/ res.status(200);
    res
      .status(200)
      .send(
        "Image Have Been Resized before This Is The Cached One :" +
          `<img src="${resize.name}_${resize.width}_${resize.height}.jpg">`
      );
  } else {
    resizes(resize.width, resize.height, resize.name)
      .then((next) => {
        res.status(200).send("Resized New Image :" + `<img src="${next}">`);
      })
      .catch((err) => {
        res.status(404).send(`<h1>Error</h1><h2>${err.message}</h2>`);
        console.log(err);
      });
  }
});
// listing to server
app.listen(port, () => {
  console.log(`Server Running On Port : ${port}`);
});
export default app;
