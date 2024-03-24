import express from 'express';
import cors from 'cors';
import { test, registerUser, loginUser, getProfile, userLogout} from '../controllers/authControllers.js'
const router = express.Router();


// middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.get('/userLogout', userLogout);


export default router;