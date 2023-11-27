import express from "express";
import {addUser} from '../controller/user-controller.js'

const Router = express.Router();

Router.post('/add', addUser);

export default Router;