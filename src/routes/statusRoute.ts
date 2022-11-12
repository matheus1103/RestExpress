import {Router, Request, Response, NextFunction} from "express";
import statusCodes from "http-status-codes";

const statusRouter = Router();

statusRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(statusCodes.OK).send('OK');
});


export default statusRouter;