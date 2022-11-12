"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const usersRouter = (0, express_1.Router)();
// get all users
usersRouter.get('/users', (req, res, next) => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ];
    res.status(http_status_codes_1.default.OK).json(users);
});
//get a single user
usersRouter.get('/users/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(http_status_codes_1.default.OK).send({ uuid });
});
//create a new user
usersRouter.post('/users', (req, res, next) => {
    const newUser = req.body;
    res.status(http_status_codes_1.default.CREATED).send(newUser);
});
//update a user
usersRouter.put('/users/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    const updatedUser = req.body;
    res.status(http_status_codes_1.default.OK).send({ uuid, updatedUser });
});
//delete a user
usersRouter.delete('/users/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(http_status_codes_1.default.OK).send({ uuid });
});
exports.default = usersRouter;
