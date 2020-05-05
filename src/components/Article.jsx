import React from 'react';
import Buttons from  './Buttons.jsx'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.selected_item.title,
      desc: this.props.selected_item.desc
    }
  }

  getTitle = () => {
    return <p className='Title'>{this.props.selected_item.title}</p>
  }

  getDesc = () => {
    return <p>{this.props.selected_item.desc}</p>
  }

  getForm = () => {
    if(this.props.mode === 'CREATE'){
      return (
        <div>
          <label>Title</label>
          <br />
          <textarea
          name='title'
          style={{ width: 300 }}
          onChange={function(e){
            this.setState({
              title: e.target.value
            })
          }.bind(this)}></textarea>
          <br />
          <label>Desc</label>
          <br />
          <textarea
          name='desc'
          style={{ width: 300 }}
          onChange={function(e){
            this.setState({
              title: e.target.value
            })
          }.bind(this)}></textarea>
        </div>
      )
    }
    else if(this.props.mode === 'UPDATE' && this.props.selected_item.id !== 0){
      return (
        <div>
          <label>Title</label>
          <br />
          <textarea name='title' style={{ width: 300 }} value={this.props.selected_item.title}></textarea>
          <br />
          <label>Desc</label>
          <br />
          <textarea name='desc' style={{ width: 300 }} value={this.props.selected_item.desc}></textarea>
        </div>
      )
    }
  }

  render() {
    if(this.props.mode === 'READ' || this.props.mode === 'DELETE'){
      return (
        <div className='App-article'>
          {this.getTitle()}
          {this.getDesc()}
          <Buttons mode={this.props.mode}
          onClickButtons={this.props.onClickButtons}
          onClickSave={this.props.onClickSave}></Buttons>
        </div>
      )
    }
    else{
      return (
        <div className='App-article'>
          {this.getForm()}
          <Buttons mode={this.props.mode}
          onClickButtons={this.props.onClickButtons}
          onClickSave={this.props.onClickSave}></Buttons>
        </div>
      )
    }
  }
}

export default Article