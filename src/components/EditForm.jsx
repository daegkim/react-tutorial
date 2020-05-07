import React from 'react'

class EditForm extends React.Component {
  constructor(props) {
    super(props)
    //deep copy
    //deep copy를 하지 않으면 props값이 변경되는 것을 볼 수 있었다.
    //App의 state -> Edit의 props -> Edit의 state가 되어 deep copy를 하지 않고 Edit의 state를 변경하면
    //결국 App의 state까지 변경되는 것을 확인할 수 있었다.
    //즉, state에 props를 할당할 때는 deep copy를 사용하는 것이 중요하다
    let _item = {
      id: this.props.selected_item.id,
      title: this.props.selected_item.title,
      desc: this.props.selected_item.desc
    }
    this.state = {
      item: _item
    }
  }

  componentWillMount = () => {
    if(this.props.mode === 'CREATE'){
      this.state.item = {id: 0, title: '', desc: ''}
    }
    else if(this.props.mode === 'UPDATE'){
      //deep copy
      let _item = {
        id: this.props.selected_item.id,
        title: this.props.selected_item.title,
        desc: this.props.selected_item.desc
      }
      this.state.item = _item
      //Object.assign()을 사용하여 깊은 복사 가능
    }
  }

  render() {
    return (
      <div className='App-article'>
        <form>
          <label>Title</label>
          <br />
          <textarea
          value={this.state.item.title}
          onChange={function(e){
            var item = this.state.item
            item.title = e.target.value
            this.setState({
              item: item
            })
          }.bind(this)}></textarea>
          <br />
          <label>Desc</label>
          <br />
          <textarea
          value={this.state.item.desc}
          onChange={function(e){
            var item = this.state.item
            item.desc = e.target.value
            this.setState({
              item: item
            })
          }.bind(this)}></textarea>
          <br />
        </form>
        <button onClick={function(){
          this.props.onClickSave(this.props.mode, this.state.item)
          this.props.changeMode('READ')
          this.setState({
            isInit: true
          })
        }.bind(this)}>SAVE</button>
        <button onClick={function(){
          this.props.changeMode('READ')
          this.setState({
            isInit: true
          })
        }.bind(this)}>CANCEL</button>
      </div>
    )
  }
}

export default EditForm