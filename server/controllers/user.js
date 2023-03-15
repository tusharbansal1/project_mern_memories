
import express from 'express';

import USER from "../models/user.js";

import bcrypt from "bcrypt"


const router = express.Router();

export  const login = async (req, res) => {
  const { user, password } = req.body;

  try {
    let userInfo = await USER.findOne({
      $or: [{ username: user.toLowerCase() }, { email: user.toLowerCase() }],
    });
    if (!userInfo) throw "User not found";
    console.log(
      "bcrypt.compare(password,userInfo.password)",userInfo,
      await bcrypt.compare(password, userInfo.password)
    );
    if (!(await bcrypt.compare(password, userInfo.password)))
      throw "Password do not match";
    let data = {
      email: userInfo.email,
      _id: userInfo._id,
      username: userInfo.username,
    };
  
    res.status(200).json({data:data,message:'login successfully'})
  } catch (error) {
    console.log(error);
    res.status(404).json({data : error , message : error})
  }
};


export default router;
