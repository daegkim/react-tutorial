import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import EditForm from './components/EditForm'
import List from './components/List.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      header_title: 'Hello World!!!',
      toggle: false,
      article_list:
      [
        { id: 1, title: 'HTML', desc: 'This is HTML...' },
        { id: 2, title: 'CSS', desc: 'This is CSS...' },
        { id: 3, title: 'JavaScript', desc: 'This is JavaScript...' }
      ],
      selected_id: 0,
      mode: 'READ',
    }
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
    var item = this.state.article_list.filter(item => item.id === _id)
    if(item.length === 0){
      item = {
        id: 0,
        title: this.state.header_title,
        desc: this.state.toggle.toString()
      }
    }
    else{
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
    var len = this.state.article_list.length
    var id = len === 0 ? 1 : this.state.article_list[len - 1].id + 1
    var copy_list = this.state.article_list.concat()
    copy_list.push({ id: id, title: _item.title, desc: _item.desc })
    this.setState({
      article_list: copy_list,
      selected_id: id
    })
  }

  updateItem = (_item) => {
    var copy_list = this.state.article_list.concat()
      for(var i in copy_list){
        if(copy_list[i].id === _item.id){
          copy_list[i].title = _item.title
          copy_list[i].desc = _item.desc
          break
        }
      }
      this.setState({
        article_list: copy_list,
        selected_id: _item.id
      })
  }

  deleteItem = (_item) => {
    var copy_list = this.state.article_list.concat()
    copy_list = copy_list.filter(item => item.id !== _item.id)
    this.setState({
      article_list: copy_list,
      selected_id: 0
    })
  }

  onClickSave = (_mode, _item) => {
    console.log('onClickSave')
    if(_mode === 'CREATE'){
      this.createItem(_item)
    }
    else if(_mode === 'UPDATE'){
      this.updateItem(_item)
    }
  }

  onClickDelete = (_item) => {
    this.deleteItem(_item)
  }

  getArticle = () => {
    if(this.state.mode === 'READ'){
      return this.getMainContent()
    }
    else if(this.state.mode === 'CREATE' || this.state.mode === 'UPDATE'){
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
