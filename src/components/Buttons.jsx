import React from 'react';

class Buttons extends React.Component {
  constructor(props){
    super(props)
  }

  

  render() {
    let updateButton = null
    if(this.props.selected_item.id !== 0){
      updateButton = <button onClick={function(){
        this.props.changeMode('UPDATE')
      }.bind(this)}>UPDATE</button>
    }

    let deleteButton = null
    if(this.props.selected_item.id !== 0){
      deleteButton = <button onClick={function(){
        this.props.onClickDelete(this.props.selected_item)
        this.props.changeMode('READ')
      }.bind(this)}>DELETE</button>
    }
    
    return (
      <div>
        <button onClick={function(){
          this.props.changeMode('CREATE')
        }.bind(this)}>CREATE</button>
        {updateButton}
        {deleteButton}
      </div>
    )
  }
}

export default Buttons