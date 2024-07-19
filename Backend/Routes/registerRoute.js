import express from 'express';
import { registerUser, login } from '../controller/registerController.js';

const router = express.Router();

router.post('/register', registerUser); // Define the POST endpoint as '/register'
router.post('/login', login);

export default router;
