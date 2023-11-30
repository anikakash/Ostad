import express from "express";
import {addUser, getUsers, getUser, editUser} from '../controller/user-controller.js'

const Router = express.Router();

Router.post('/add', addUser);
Router.get('/all', getUsers);
Router.get('/:id', getUser);
Router.post('/:id', editUser);
export default Router;