import React from 'react'

class EditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.selected_item,
      isInit: true
    }
  }
  onClickSave = (_id, _title, _desc) => {

  }

  render() {
    //1. 새롭게 렌더링 될 때마다 생성자가 호출되지 않음
    //2. UPDATE버튼을 눌러서 새로 렌더링 되어도 this.state.item은 EditForm이 생성된 순간의 값으로 고정됨
    //3. 하지만 UPDATE버튼을 누르면 this.state.item은 this.props.selected_item값이 되어야 함
    //4. 이를 위해서 단순히 this.state.item = this.props.selected_item을 하면 textarea에 글을 입력하면서 렌더링될 때 값이 고정
    //5. 이를 해결하기 위해 isInit 사용
    if(this.state.isInit){
      if(this.props.mode === 'CREATE'){
        this.state.item = {id: 0, title: '', desc: ''}
      }
      else if(this.props.mode === 'UPDATE'){
        this.state.item = this.props.selected_item
      }
      this.state.isInit = !this.state.isInit
    }
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