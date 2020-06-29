const mongoose = require('mongoose')
const { article, user } = require('./schema')

/*
This it for mongoose connection test & practice for CRUD
*/

class db {
    constructor(){
        mongoose.Promise = global.Promise
        mongoose.set('useUnifiedTopology', true) //prevent deprecation warnings
        mongoose.connection.on('error', (err) => { if(err) console.log(err)} )
        mongoose.connection.once('open', () => { console.log('mongo connected!!') })

        mongoose.connect('mongodb://localhost:27017/daegeun_db', {useNewUrlParser: true}, (err) => { if(err) console.log(err) })
    }

    getArticleList = (callback) => {
        article.find((err, res) => {
            if(err){
                console.log(err)
                return
            }
            callback(res)
        })
    }

    createArticle = (newArticle, callback) => {
        article.create(newArticle, (err) => {
            if(err){
                console.log(err)
                return
            }
            
            callback()
        })
    }

    updateArticle = (changedArticle, callback) => {
        var trgtArticle = {_id: changedArticle._id}
        article.updateOne(trgtArticle, changedArticle, (err, raw) => {
            if(err){
                console.log(err)
                return
            }
            callback()
        })
    }

    deleteArticle = (deletedArticle, callback) => {
        article.deleteOne(deletedArticle, (err) => {
            if(err){
                console.log(err)
                return
            }
            callback()
        })
    }

    createUser = (newUser, callback) => {
        user.create(newUser, (err) => {
            if(err){
                console.log(err)
                return 
            }
            
            callback()
        })
    }

    findUser = (trgtUser, callback) => {
        user.findOne(trgtUser, (err, res) => {
            if(err){
                console.log(err)
                return
            }
            
            callback(res)
        })
    }
}

module.exports = new db()