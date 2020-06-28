const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    desc: String
})

const userSchema = new mongoose.Schema({
    id: String,
    password: String,
    email: String
})

module.exports = {
    article: mongoose.model('article', articleSchema, 'article'),
    user: mongoose.model('user', userSchema, 'user')
}