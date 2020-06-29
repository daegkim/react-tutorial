import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import EditForm from './components/EditForm'
import List from './components/List'
import util from './util'
import config from './config.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      header_title: 'Hello World!!!',
      toggle: false,
      article_list: [],
      selected_id: 0,
      mode: 'READ',
    }
  }

  componentDidMount = () => {
    this.getArticleList((res) => {
      this.setState({ article_list: res })
    })
  }

  getArticleList = (callback) => {
    fetch(`http://${config.ip}:3001/getArticleList`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (callback !== undefined) {
          callback(res)
        }
      })
  }

  //for header
  onClickHeader = () => {
    this.setState({
      toggle: !this.state.toggle,
      selected_id: 0,
      mode: 'READ'
    })
  }

  //for list
  onClickItem = (_id) => {
    this.changeMode('READ')
    this.setState({
      selected_id: Number(_id),
    })
  }

  findItemById = (_id) => {
    var item = this.state.article_list.filter((item) => {
      return item._id === _id
    })
    if (item.length === 0) {
      item = {
        _id: 0,
        title: this.state.header_title,
        desc: this.state.toggle.toString()
      }
    }
    else {
      item = item[0]
    }
    return item
  }

  changeMode = (_mode) => {
    this.setState({
      mode: _mode
    })
  }

  createItem = (_item) => {
    fetch(`http://${config.ip}:3001/createArticle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_item)
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res === 'OK') {
          var copy_list = this.state.article_list.concat()
          copy_list.push(_item)
          this.setState({
            article_list: copy_list,
            selected_id: _item._id
          })
        }
      })
  }

  updateItem = (_item) => {
    fetch(`http://${config.ip}:3001/updateArticle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_item)
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res === 'OK') {
          var copy_list = this.state.article_list.concat()
          for (var i in copy_list) {
            if (copy_list[i]._id === _item._id) {
              copy_list[i].title = _item.title
              copy_list[i].desc = _item.desc
              break
            }
          }
          this.setState({
            article_list: copy_list,
            selected_id: _item._id
          })
        }
      })
  }

  deleteItem = (_item) => {
    fetch(`http://${config.ip}:3001/deleteArticle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_item)
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res === 'OK') {
          var copy_list = this.state.article_list.concat()
          copy_list = copy_list.filter(item => item._id !== _item._id)
          this.setState({
            article_list: copy_list,
            selected_id: 0
          })
        }
      })
  }

  onClickSave = (_mode, _item) => {
    if(util.isNullorWhiteSpace(_item.title)){
      alert('제목을 입력하세요')
      return
    }

    if (_mode === 'CREATE') {
      var len = this.state.article_list.length
      var newId = len === 0 ? 1 : this.state.article_list[len - 1]._id + 1
      _item._id = newId
      this.createItem(_item)
    }
    else if (_mode === 'UPDATE') {
      this.updateItem(_item)
    }
  }

  onClickDelete = (_item) => {
    this.deleteItem(_item)
  }

  getArticle = () => {
    if (this.state.mode === 'READ') {
      return this.getMainContent()
    }
    else if (this.state.mode === 'CREATE' || this.state.mode === 'UPDATE') {
      return this.getEditForm()
    }
  }

  getMainContent = () => {
    var selected_item = this.findItemById(this.state.selected_id)
    return (
      <MainContent
        selected_item={selected_item}
        changeMode={this.changeMode}
        onClickDelete={this.onClickDelete}
      ></MainContent>
    )
  }

  getEditForm = () => {
    var selected_item = this.findItemById(this.state.selected_id)
    return (
      <EditForm
        mode={this.state.mode}
        selected_item={selected_item}
        changeMode={this.changeMode}
        onClickSave={this.onClickSave}
      ></EditForm>
    )
  }

  render() {
    return (
      <div>
        <Header header_title={this.state.header_title} onClickHeader={this.onClickHeader}></Header>

        <List list={this.state.article_list} onClickItem={this.onClickItem}></List>

        {this.getArticle()}
      </div>
    )
  }
}

export default App;
