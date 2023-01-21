import express, { Application } from "express";
import fs from "fs";
import { cachedimgdir } from "./router/router";
import resizes from "./router/operatins";
const port = 3000;
const app: Application = express();
// main page
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello From Main Page You Have To Enter Data Like The Below Example To See Results</h1><h2>img?name='Image Name'&width='width number'&height='Height Number'</h2>"
  );
});
app.use(express.static(cachedimgdir));
// resizing page
app.get("/img", (req, res) => {
  const resize = {
    name: req.query.name as string,
    width: parseInt(req.query.width as string),
    height: parseInt(req.query.height as string),
  };
  if (
    // check if image already Resized Or Not
    fs.existsSync(
      `${cachedimgdir}/${resize.name}_${resize.width}_${resize.height}.jpg`
    )
  ) {
    res.status(200);
    res.send(
      "Image Have Been Resized before This Is The Cached One :" +
        `<img src="${resize.name}_${resize.width}_${resize.height}.jpg">`
    );
  } else {
    resizes(resize.width, resize.height, resize.name).then((next) => {
      res.send("Resized New Image :" + `<img src="${next}">`);
    });
  }
});
// listing to server
app.listen(port, () => {
  console.log(`Server Running On Port : ${port}`);
});
export default app;
