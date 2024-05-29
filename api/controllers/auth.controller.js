import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { name, username, email, password } = req.body;

  if(!name || !username || !email || !password || name === '' || username === '' || email === '' || password === '') {
    // return res.status(400).json({ message: 'All fields are required'});
    next(errorHandler(400, "All fields are required"))
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    name,
    username,
    email,
    password: hashedPassword
  });

  try {

    await newUser.save();
    res.json({ message: "Signup successful" });
    
  } catch (error) {
    next(error)
  }

}