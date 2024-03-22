import User from '../models/user.js';
import { hashPassword, comparePassword } from '../helpers/auth.js';
import { hash } from 'bcrypt';

export const test = (req, res) => {
    res.json('test is working');
}

// register endpoint
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'name is required.'
            });
        };

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least characters long.'
            });
        };

        // Check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is taken already.'
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

export const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;

        // Check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No user found'
            })
        };
        //Check if passwords match
        const match = await comparePassword(password, user.password)
        if(match){
            res.json('Passwords match!')
        }
        if(!match){
            res.json({
                error: "Passwords do not match!"
            })
        }
    } catch (error) {
        console.log(error)
    }
};
