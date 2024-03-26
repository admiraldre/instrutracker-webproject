import express from 'express';
import cors from 'cors';
import {
    test, registerUser, loginUser, getProfile, userLogout,
    logPractice, viewPractice, deletePractice, updatePractice,
    viewGoal, createGoal, updateGoal, deleteGoal, authenticateToken,
    createPost, viewPost, toggleLikePost, viewLatestGoal,viewLatestPractice
} from '../controllers/authControllers.js'
import Post from '../models/post.js'
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

//for forum
// router.post('http://localhost:8000/forum', createPost);
// router.get('http://localhost:8000/forum', viewPost);
// router.post('http://localhost:8000/forum/:postId/like', authenticateToken, toggleLikePost);

// dashboard
router.get('/practice/latest', authenticateToken, viewLatestPractice);
router.get('/goals/latest', authenticateToken, viewLatestGoal);

// Fetch posts for a specific user
router.get('/forum/user/:userId', async (req, res) => {
    try {
        const posts = await Post.find({ userID: req.params.userId });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user's posts" });
    }
});

// Delete a post
router.delete('/forum/:postId', async (req, res) => {
    try {
        await Post.findByIdAndRemove(req.params.postId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting post" });
    }
});

// Assuming you'll also want to implement an update functionality
router.put('/forum/:postId', async (req, res) => {
    const { title, description } = req.body;
    try {
        const post = await Post.findByIdAndUpdate(req.params.postId, { title, description }, { new: true });
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Error updating post" });
    }
});


export default router;