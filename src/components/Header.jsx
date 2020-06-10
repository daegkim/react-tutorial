import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header" onClick={this.props.onClickHeader}>
                {this.props.header_title}
            </header>
        )
    };
}

export default Header