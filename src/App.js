import React from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Article from './components/Article'
import CRUD from './components/CRUD'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      header_title: 'Hello World!',
      toggle: 'false',
      list:
        [
          { id: 1, name: 'HTML', desc: 'This is HTML...' },
          { id: 2, name: 'CSS', desc: 'This is CSS...' },
          { id: 3, name: 'JavaScript', desc: 'This is JavaScript...' }
        ],
      selectedItem: 0,
      mode: 'CREATE'
    }
  }

  render() {
    return (
      <div>
        <Header header_title={this.state.header_title} onClickHeader={
          function () {
            if (this.state.toggle === 'false') {
              alert('false')
              this.setState({ toggle: 'true' })
            }
            else {
              alert('true')
              this.setState({ toggle: 'false' })
            }
          }.bind(this)
        }></Header>

        <List list={this.state.list} onClickItem={
          function (i, e) {
            this.setState({ selectedItem: Number(i), mode: 'READ' })
          }.bind(this)
        }></List>

        <Article
          title={this.state.list[this.state.selectedItem].name}
          desc={this.state.list[this.state.selectedItem].desc}
          mode={this.state.mode}
        ></Article>

        <CRUD onClickButtons={function(_mode, e){
          this.setState({mode: _mode})
          if(_mode === 'DELETE') alert('Do you want to delete?')
        }.bind(this)}></CRUD>
      </div>
    )
  }
}

export default App;
