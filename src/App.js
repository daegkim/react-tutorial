import React from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List.jsx'
import Article from './components/Article.jsx'
import Buttons from './components/Buttons.jsx'

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
      mode: 'READ'
    }
  }

  onClickHeader = () => {
    alert(this.state.toggle)
    this.setState({
      toggle: !this.state.toggle
    })
  }

  onClickItem = (_id) => {
    this.changeMode('READ')
    this.setState({
      selected_id: Number(_id),
    })
  }

  findItemById = (_id) => {
    var item = null

    for(var i in this.state.article_list){
      if(this.state.article_list[i].id === _id){
        item = this.state.article_list[i]
        return item
      }
    }

    if(item === null){
      item = {
        id: 0,
        title: 'WELCOME!!!',
        desc: null
      }
    }

    return item
  }

  changeMode = (_mode) => {
    this.setState({
      mode: _mode
    })
  }

  onClickButtons = (_mode) => {
    this.changeMode(_mode)
  }

  onClickSave = (_mode, _item) => {
    var id = 0
    if(_mode === 'CREATE'){

    }
  }

  render() {
    var selected_item = this.findItemById(this.state.selected_id)

    return (
      <div>
        <Header header_title={this.state.header_title} onClickHeader={this.onClickHeader}></Header>

        <List list={this.state.article_list} onClickItem={this.onClickItem}></List>

        <Article mode={this.state.mode}
        selected_item={selected_item}
        onClickButtons={this.onClickButtons}
        onClickSave={this.onClickSave}></Article>
      </div>
    )
  }
}

export default App;
