import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const userSchema= new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  Role: String
});

const UserModel = mongoose.model('UserModel', userSchema);
export default UserModel;