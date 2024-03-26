import express from 'express';
import cors from 'cors';
import {
    test, registerUser, loginUser, getProfile, userLogout,
    logPractice, viewPractice, deletePractice, updatePractice,
    viewGoal, createGoal, updateGoal, deleteGoal, authenticateToken
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

//for practice sessions

router.get('/practice', viewPractice);
router.post('/practice', logPractice);
router.delete('/practice/:id', deletePractice);
router.put('/practice/:id', updatePractice);


//for goal setting

router.post('/goals', authenticateToken, createGoal);
router.get('/goals', authenticateToken, viewGoal);
router.put('/goals/:id', authenticateToken, updateGoal);
router.delete('/goals/:id', authenticateToken, deleteGoal);





export default router;