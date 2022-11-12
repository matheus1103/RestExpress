"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const usersRouter = (0, express_1.Router)();
usersRouter.get('/users', (req, res, next) => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ];
    res.status(http_status_codes_1.default.OK).json(users);
});
usersRouter.get('/users/:uuid', (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(http_status_codes_1.default.OK).send({ uuid });
});
usersRouter.post('/users', (req, res, next) => {
    const newUser = req.body;
    res.status(http_status_codes_1.default.CREATED).send(newUser);
});
exports.default = usersRouter;
