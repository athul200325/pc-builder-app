import { loginUser, registerUser } from '../controllers/authController.js';
import { getAllUsers, getUserById } from '../controllers/userController.js';
import express from 'express';
import { varifyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/allUsers', varifyToken, getAllUsers);

router.get('/getUser/:id', getUserById)

router.post('/register', registerUser)

router.post('/login', loginUser);

export default router;