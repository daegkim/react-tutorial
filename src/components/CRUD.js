import React from 'react';

class CRUD extends React.Component {

    render() {
        return (
            <div>
                <button onClick={function(){
                    this.props.onClickButtons('CREATE')
                }.bind(this)}>CREATE</button>
                <button onClick={function(){
                    this.props.onClickButtons('UPDATE')
                }.bind(this)}>UPDATE</button>
                <button onClick={function(){
                    this.props.onClickButtons('DELETE')
                }.bind(this)}>DELETE</button>
            </div>
        )
    }
}

export default CRUD