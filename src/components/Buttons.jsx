import React from 'react';

class Buttons extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={function(){
          this.props.changeMode('CREATE')
        }.bind(this)}>CREATE</button>
        <button onClick={function(){
          this.props.changeMode('UPDATE')
        }.bind(this)}>UPDATE</button>
        <button onClick={function(){
          this.props.onClickDelete(this.props.selected_item)
          this.props.changeMode('READ')
        }.bind(this)}>DELETE</button>
      </div>
    )
  }
}

export default Buttons