import express from "express";
import {addUser, getUsers} from '../controller/user-controller.js'

const Router = express.Router();

Router.post('/add', addUser);
Router.get('/all', getUsers);
export default Router;