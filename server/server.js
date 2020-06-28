const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const db = require('./mongo/db')
const port = process.env.PORT || 3001;

app.use(cors())
app.use(bodyParser.json());

app.get('/getArticleList', (req, res) => {
    db.getArticleList((articleList) => {
        res.json(articleList)
    })
})

app.post('/createArticle', (req, res) => {
    var newArticle = req.body
    db.createArticle(newArticle, () => {
        res.json('OK')
    })
})

app.post('/updateArticle', (req, res) => {
    var changedArticle = req.body
    db.updateArticle(changedArticle, () => {
        res.json('OK')
    })
})

app.post('/deleteArticle', (req, res) => {
    var deletedArticle = req.body
    db.deleteArticle(deletedArticle, () => {
        res.json('OK')
    })
})

app.post('/createUser', (req, res) => {
    var newUser = req.body
    db.createUser(newUser, () => {
        res.json('OK')
    })
})

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})