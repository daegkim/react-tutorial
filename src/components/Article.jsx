import React from 'react';
import Buttons from  './Buttons.jsx'

class Article extends React.Component {
  constructor(props) {
    super(props)
    console.log('Article')
    this.state = {
      _id: this.props.selected_item._id,
      title: this.props.selected_item.title,
      desc: this.props.selected_item.desc,
      isInit: true
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
              desc: e.target.value
            })
          }.bind(this)}></textarea>
        </div>
      )
    }
    else if(this.props.mode === 'UPDATE' && this.props.selected_item._id !== 0){
      return (
        <div>
          <label>Title</label>
          <br />
          <textarea
          name='title'
          style={{ width: 300 }}
          value={this.state.title}
          onChange={function(e){
            this.setState({
              title: e.target.value,
              isInit: false
            })
          }.bind(this)}></textarea>
          <br />
          <label>Desc</label>
          <br />
          <textarea
          name='desc'
          style={{ width: 300 }}
          value={this.state.desc}
          onChange={function(e){
            this.setState({
              desc: e.target.value,
              isInit: false
            })
          }.bind(this)}></textarea>
        </div>
      )
    }
  }

  changeInit = (_flag) => {
    this.setState({
      isInit: _flag
    })
  }

  render() {
    //Create나 Update일 때
    if(this.state.isInit){
      this.state._id = this.props.selected_item._id
      this.state.title = this.props.selected_item.title
      this.state.desc = this.props.selected_item.desc
      this.state.isInit = !this.state.isInit
    }
    console.log(this.state.isInit)
    console.log(this.props.selected_item)

    if(this.props.mode === 'READ' || this.props.mode === 'DELETE'){
      return (
        <div className='App-article'>
          {this.getTitle()}
          {this.getDesc()}
          <Buttons mode={this.props.mode}
          item={{_id:this.state._id, title:this.state.title, desc:this.state.desc}}
          changeMode={this.props.changeMode}
          onClickButtons={this.props.onClickButtons}
          onClickSave={this.props.onClickSave}
          changeInit={this.changeInit}></Buttons>
        </div>
      )
    }
    else{
      return (
        <div className='App-article'>
          {this.getForm()}
          <Buttons mode={this.props.mode}
          item={{_id:this.state._id, title:this.state.title, desc:this.state.desc}}
          changeMode={this.props.changeMode}
          onClickButtons={this.props.onClickButtons}
          onClickSave={this.props.onClickSave}
          changeInit={this.changeInit}></Buttons>
        </div>
      )
    }
  }
}

export default Article