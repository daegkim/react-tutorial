import React from 'react';
import Buttons from './Buttons'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='App-article'>
        <p className='Title'>{this.props.selected_item.title}</p>
        <p>{this.props.selected_item.desc}</p>
        <Buttons
        selected_item={this.props.selected_item}
        changeMode={this.props.changeMode}
        onClickDelete={this.props.onClickDelete}></Buttons>
      </div>
    )
  }
}

export default MainContent