import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import {mongoose} from 'mongoose';
import cookieParser from 'cookie-parser';
import Post from './models/post.js'
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected!'))
.catch((err) => console.log('Database NOT connected', err));


const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true, 
  };
  
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.get('/forum', async (req, res) => {
    try {
        const posts = await Post.find(); 
        res.json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: "Error fetching posts" });
    }
});
app.post('/forum', async (req, res) => {
    console.log(req.body);
    try {
        const { title, description } = req.body;
        const newPost = new Post({
            title,
            description,
            
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error creating post on server:", error);
        res.status(500).json({ message: "Error creating post" });
    }
});
app.post('/forum/:postId/like', async (req, res) => {
    const { postId } = req.params;
    const { userId } = req.body; 

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Toggle like logic
        const index = post.likes.indexOf(userId);
        if (index === -1) {
            post.likes.push(userId);
        } else {
            post.likes.splice(index, 1);
        }
        await post.save();

        res.json(post); 
    } catch (error) {
        console.error("Error toggling like:", error);
        res.status(500).json({ message: "Error toggling like" });
    }
});
app.post('/forum/:postId/comments', async (req, res) => {
    const { postId } = req.params;
    const { author, text } = req.body; 

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        post.comments.push({ author, text });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ message: "Error adding comment" });
    }
});

app.use('/', authRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


