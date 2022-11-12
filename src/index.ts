import express, {Express, NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import usersRouter from "./routes/usersRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//configure routes
app.get('/', (req: Request, res: Response, Next: NextFunction) => {
    res.send('Express + TypeScript Server');
});

app.use('/users', usersRouter);

app.get('/status', (req: Request, res: Response) => {
    res.status(200).send('OK');
});

//start the express server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at localhost:${port}`);
});