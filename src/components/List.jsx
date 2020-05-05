import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props)
  }

  setDisplayList = () => {
    var list = this.props.list;
    var display_list = []
    for (var i in list) {
      display_list.push(
        <li key={list[i].id}>
          <a href={'/'} onClick={
            //To use variable 'i', it must be added to input & bind parameter.
            function (i, e) {
              e.preventDefault()
              this.props.onClickItem(list[i].id)
            }.bind(this, i)
          }>
          {list[i].title}
          </a>
        </li>
      )
    }
    return display_list
  }

  render() {
    return (
      <nav>
        <ol>
          {this.setDisplayList()}
        </ol>
      </nav>
    )
  };
}

export default List