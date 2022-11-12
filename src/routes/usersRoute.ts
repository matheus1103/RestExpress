import {Router, Request, Response, NextFunction} from "express";
import statusCodes from "http-status-codes";

const usersRouter = Router();

// get all users
usersRouter.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Bob'}
    ];
    res.status(statusCodes.OK).json(users);
});

//get a single user
usersRouter.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(statusCodes.OK).send({uuid});
});

//create a new user
usersRouter.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(statusCodes.CREATED).send(newUser);
});

//update a user
usersRouter.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const updatedUser = req.body;
    res.status(statusCodes.OK).send({uuid, updatedUser});
});

//delete a user
usersRouter.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(statusCodes.OK).send({uuid});
});

export default usersRouter;