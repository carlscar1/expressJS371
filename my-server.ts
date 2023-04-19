import express, {Application, Request, Response} from "express";
import cors from "cors";

let storedWords: Array<string> = ["apple", "shade", "watch", "agree", "power", "piece", "bloom", "plead", "sorry", "spoon", "bunny", "pause", "audio", "dream"]

function getRandomInt() {
    return Math.floor(Math.random() * storedWords.length);
  }

const app:Application = express();
const PORT = process.env.PORT ?? 8000;    // Allow dynamic PORT setting (Heroku)
app.use(cors());

// Define GET endpoint(s)
app.get("/", (req:Request, res:Response) => {
  var index:number = getRandomInt()
  let currentWord = storedWords[index] 
  res.send({ secret: currentWord });
});
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
