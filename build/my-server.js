"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let storedWords = ["apple", "shade", "watch", "agree", "power", "piece", "bloom", "plead", "sorry", "spoon", "bunny", "pause", "audio", "dream"];
function getRandomInt() {
    return Math.floor(Math.random() * storedWords.length);
}
var index = getRandomInt();
let currentWord = storedWords[index];
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000; // Allow dynamic PORT setting (Heroku)
// Define GET endpoint(s)
app.get("/", (req, res) => {
    res.send({ secret: currentWord });
});
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});
