const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    desc: String
})

module.exports = {
    article: mongoose.model('article', articleSchema, 'article')
}