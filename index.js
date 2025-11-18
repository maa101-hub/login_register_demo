import express from 'express'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import UserModel from './models/UserModel.js';
import QuestionModel from './models/Question.js';

dotenv.config()
const app =express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' // Adjust this to your frontend URL
}))
const url=process.env.MONGODB_URI;
app.post('/login', async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  try{
    const user =await UserModel.findOne({ email:email });
    if(user) {
      if(user.password==password)
        {
           res.json("success");
        } else {
      res.status(401).json({ message: 'Invalid  password' });
    }
  }
  else{
    res.status(404).json({ message: 'User not found' });
  }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});
app.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const newUser = new UserModel({ name, email, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
})
app.post('/teachers', async (req, res) => {
  const { questionText, options, correctAnswer } = req.body;
  try {
    const newQuestion = new QuestionModel({ questionText, options, correctAnswer });
    await newQuestion.save();
    res.status(201).json({ message: 'Question created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating question' });
  }
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
// or
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('connected'));

});
