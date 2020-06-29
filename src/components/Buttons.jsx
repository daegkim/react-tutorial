import React from 'react';
import { Button } from 'reactstrap';


class Buttons extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    let updateButton = null
    if(this.props.selected_item._id !== 0){
      updateButton = <Button size="sm" color="info" className="Buttons-crud" onClick={function(){
        this.props.changeMode('UPDATE')
      }.bind(this)}>UPDATE</Button>
    }

    let deleteButton = null
    if(this.props.selected_item._id !== 0){
      deleteButton = <Button size="sm" color="info" className="Buttons-crud" onClick={function(){
        this.props.onClickDelete(this.props.selected_item)
        this.props.changeMode('READ')
      }.bind(this)}>DELETE</Button>
    }
    
    return (
      <div>
        <Button size="sm" color="info" className="Buttons-crud" onClick={function(){
          this.props.changeMode('CREATE')
        }.bind(this)}>CREATE</Button>
        {updateButton}
        {deleteButton}
      </div>
    )
  }
}

export default Buttons