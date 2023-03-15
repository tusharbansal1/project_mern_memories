
import express from 'express'
const router = express.Router();
import controller, { login } from '../controllers/user.js'


router.post("/login",login);

export default router;


    