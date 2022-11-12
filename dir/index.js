"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
//configure express
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//configure routes
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use('/users', usersRoute_1.default);
app.get('/status', (req, res) => {
    res.status(200).send('OK');
});
//start the express server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at localhost:${port}`);
});
