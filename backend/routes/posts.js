const express = require('express');
const router = express.Router();
const user = require('../Models/user');
const post = require('../Models/post');
const comment = require('../Models/comment');
const bcrypt = require('bcrypt');
const verifyToken = require('../verifytoken');


router.post('/create',verifyToken,async(req,res)=>{
    try{
        const newpost=new post(req.body);
        const savedpost = await newpost.save();
        res.status(200).json(savedpost);
    }
    catch(err){
        res.status(500).json("Internal server error");
    }
});

//update
router.put('/:id',verifyToken, async (req, res) => {
  try {
    const updatedpost = await post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedpost);
  } catch (err) {
    res.status(500).json("Internal server error");
  }
});



//delete
router.delete('/:id',verifyToken, async (req, res) => {
  try {
    await post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post deleted successfully");
    } catch (err) {
    res.status(500).json("Internal server error");
  }
});




//get all posts 
router.get('/',verifyToken, async (req, res) => {
  try {
    const searchFilter = {title: { $regex: req.query.search || '', $options: 'i' }};
    const post1 = await post.find(searchFilter);
    res.status(200).json(post1);
  } catch (err) {
    res.status(500).json("Internal server error");
  }
});

//get post

router.get('/user/:userId',verifyToken, async (req, res) => {
  try {
    const posts = await post.find({userId: req.params.userId});
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json("Internal server error");
  }
});

//search posts by title

module.exports = router;