import express, {Application, Request, Response} from "express";
const app:Application = express();
const PORT = process.env.PORT ?? 8000;    // Allow dynamic PORT setting (Heroku)
// Define GET endpoint(s)
app.get("/", (req:Request, res:Response) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});