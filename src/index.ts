import express , {Application}  from "express"
const port = 3200;
const app : Application = express();
app.get("/",(req,res)=>{
    res.send("hellooo");
})
app.listen(port,()=>{
    console.log(`Server Running On Port : ${port}`);
})
export default app;