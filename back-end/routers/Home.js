const express = require("express")
const router = express.Router()
const axios = require("axios")
const Post = require("../models/Post")

router.get("/", async (req, res) => {
	// we want to get latest 20 posts
	const allPosts = await Post.find({}).sort({ date: -1 }).limit(20)
	// console.log(allPosts)
	res.status(200).send(allPosts)
})
module.exports = router
