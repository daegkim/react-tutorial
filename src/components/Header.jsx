import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="Header-title" onClick={this.props.onClickHeader}>
                    {this.props.header_title}
                </div>
                <div className="Header-sign">
                    <SignIn></SignIn>
                    <SignUp></SignUp>
                </div>
            </header>
        )
    };
}

export default Header