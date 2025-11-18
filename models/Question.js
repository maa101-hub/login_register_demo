import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
const questionSchema= new mongoose.Schema({
  questionText: String,
  options: [String],
  correctAnswer: String
});
const QuestionModel = mongoose.model('Question', questionSchema);
export default QuestionModel;
dotenv.config();