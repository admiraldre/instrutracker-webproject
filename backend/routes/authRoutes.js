import express from 'express';
import cors from 'cors';
import {
    test, registerUser, loginUser, getProfile, userLogout, setGoal,
    logPractice, viewPractice, deletePractice, updatePractice
} from '../controllers/authControllers.js'
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

router.post('/goal', setGoal);

//for practice sessions

router.get('/practice', viewPractice);
router.post('/practice', logPractice);
router.delete('/practice/:id', deletePractice);
router.put('/practice/:id', updatePractice);


export default router;