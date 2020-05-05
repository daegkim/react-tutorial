import React from 'react';

class Buttons extends React.Component {
  constructor(props){
    super(props)
  }

  getButtons = () => {
    if(this.props.mode === 'READ' || this.props.mode === 'DELETE'){
      return (
        <div>
          <button onClick={function () {
            this.props.onClickButtons('CREATE')
          }.bind(this)}>CREATE</button>

          <button onClick={function () {
            this.props.onClickButtons('UPDATE')
          }.bind(this)}>UPDATE</button>

          <button onClick={function () {
            this.props.onClickButtons('DELETE')
          }.bind(this)}>DELETE</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <button onClick={function () {
            this.props.onClickSave()
          }.bind(this)}>SAVE</button>

          <button onClick={function () {
            this.props.onClickButtons('READ')
          }.bind(this)}>CANCEL</button>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.getButtons()}
      </div>
    )
  }
}

export default Buttons