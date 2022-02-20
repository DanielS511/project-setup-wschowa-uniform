// import  URLSlugs  from "mongoose-url-slugs" //Error: Cannot use import statement outside a module
const mongoose = require("mongoose")
require("dotenv").config()
const Schema = mongoose.Schema

// Try to connect to atlas
const uri = process.env.MONGODB_URI

// mongoose.connect(dbconf);
const connection = mongoose.createConnection(uri)
module.exports = connection
