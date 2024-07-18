import express from 'express';
import userRegistration from '../controller/registerController.js';

const router = express.Router();

router.post('/register', userRegistration); // Define the POST endpoint as '/register'

export default router;
