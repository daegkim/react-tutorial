import React from 'react';

class List extends React.Component {
    render() {
        var list = this.props.list;
        var display_list = []
        for(var i in list){
            display_list.push(
                <li key={list[i].id}>
                    <a href={'/'} onClick={
                        //To use variable 'i', it must be added to input & bind parameter.
                        function(i, e){
                            e.preventDefault()
                            this.props.onClickItem(i)
                        }.bind(this, i)
                    }>
                        {list[i].name}
                    </a>
                </li>
            )
        }
        return (
            <nav>
                <ol>
                    {display_list}
                </ol>
            </nav>
        )
    };
}

export default List