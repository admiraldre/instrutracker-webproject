import User from '../models/user.js';
import Practice from '../models/practice.js';
import Goal from '../models/data.js';


import { hashPassword, comparePassword } from '../helpers/auth.js';
import jwt from 'jsonwebtoken';

export const test = (req, res) => {
    res.json('test is working');
}

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'A token is required for authentication' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id, name: decoded.name, email: decoded.email };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};


// register endpoint
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'Name is required.'
            });
        };

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long.'
            });
        };

        // Check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is already.'
            });
        };


        const hashedPassword = await hashPassword(password)
        //Create user in DB
        const user = await User.create({
            name, email, password: hashedPassword
        })
        return res.json(user)


    } catch (error) {
        console.log(error);
    }
};

// Login endpoint

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        };
        //Check if passwords match
        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
            })
        }
        if (!match) {
            res.json({
                error: "Incorrect Password!"
            })
        }
    } catch (error) {
        console.log(error)
    }
};

export const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        })
    } else {
        res.json(null);
    }
}

export const userLogout = (req, res) => {
    res.clearCookie('token');
    return res.json({ status: true });
}


const getUserIdFromToken = (token) => {
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.id;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
};

// Log Practice Session
export const logPractice = async (req, res) => {
    const token = req.cookies.token;
    const userId = getUserIdFromToken(token);

    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const { date, duration, notes } = req.body;
        const practiceSession = await Practice.create({ userId, date, duration, notes });
        res.status(201).json(practiceSession);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// View Practice Sessions
export const viewPractice = async (req, res) => {
    const token = req.cookies.token;
    const userId = getUserIdFromToken(token);

    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const practiceSessions = await Practice.find({ userId });
        res.json(practiceSessions);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete Practice Session
export const deletePractice = async (req, res) => {
    const token = req.cookies.token;
    const userId = getUserIdFromToken(token);

    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const { id } = req.params;
        await Practice.deleteOne({ _id: id, userId });
        res.json({ message: 'Practice session deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update Practice Session
export const updatePractice = async (req, res) => {
    const token = req.cookies.token;
    const userId = getUserIdFromToken(token);

    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const { id } = req.params; // Extract id from params
        const { date, duration, notes } = req.body;
        const updatedSession = await Practice.findOneAndUpdate(
            { _id: id, userId },
            { date, duration, notes },
            { new: true }
        );
        if (!updatedSession) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.json(updatedSession);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//create Goal

export const createGoal = async (req, res) => {
    const userId = req.user.id;
    const { title, description } = req.body;
    try {
        const newGoal = await Goal.create({ userId, title, description });
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(400).json({ message: 'Error creating goal', error });
    }
};


// view Goal
export const viewGoal = async (req, res) => {
    const userId = req.user.id;
    try {
        const goals = await Goal.find({ userId });
        res.json(goals);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching goals', error });
    }
};


//update Goal

export const updateGoal = async (req, res) => {
    const userId = req.user.id;
    const { title, description } = req.body;
    const { id } = req.params;
    try {
        const updatedGoal = await Goal.findOneAndUpdate(
            { _id: id, userId },
            { title, description },
            { new: true }
        );
        if (!updatedGoal) {
            return res.status(404).json({ message: 'Goal not found' });
        }
        res.json(updatedGoal);
    } catch (error) {
        res.status(400).json({ message: 'Error updating goal', error });
    }
};


// delete Goal

export const deleteGoal = async (req, res) => {
    const userId = req.user.id; // Use authenticated user's ID
    const { id } = req.params;
    try {
        const result = await Goal.findOneAndDelete({ _id: id, userId });
        if (!result) {
            return res.status(404).json({ message: 'Goal not found or not yours' });
        }
        res.json({ message: 'Goal deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting goal', error });
    }
};

export const viewPost = async (req, res) => {
    try {
        const posts = await Post.find().populate('comments');
        res.json(posts);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching posts', error });
    }
};

export const createPost = async (req, res) => {
    const { title, description, img, userID } = req.body;
    try {
      const newPost = new Post({ title, description, img, userID });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: 'Error creating post', error });
    }
  };

  export const toggleLikePost = async (req, res) => {
    const { postId } = req.params; 
    const userId = req.user.id; 

    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const index = post.likes.indexOf(userId);
        if (index === -1) {
            post.likes.push(userId);
        } else {
            post.likes.splice(index, 1);
        }
        await post.save();

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error toggling like', error });
    }
};

//fetch latestPractice

export const viewLatestPractice = async (req, res) => {
    const userId = req.user.id;

    try {
        const latestSession = await Practice.findOne({ userId }).sort({ _id: -1 });
        res.json(latestSession);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching latest practice session', error });
    }
};

// Fetch the latest goal
export const viewLatestGoal = async (req, res) => {
    const userId = req.user.id;

    try {
        const latestGoal = await Goal.findOne({ userId }).sort({ _id: -1 });
        res.json(latestGoal);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching latest goal', error });
    }
};