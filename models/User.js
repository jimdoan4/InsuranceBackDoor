// User Model
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    age: Number,
    gender: String,
    password: String,
    posts: String
})

module.exports = mongoose.model('User', UserSchema)


//  name: String,
//      ingredients: [],
//      cookingTime: String,
//      description: String,
//      recipeImg: String,
//      directions: [],