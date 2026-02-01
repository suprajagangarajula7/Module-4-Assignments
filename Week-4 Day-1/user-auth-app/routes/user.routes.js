import express from 'express';
import { signupUser, getUserProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/signup', signupUser);
router.get('/myprofile', getUserProfile);

export default router;
