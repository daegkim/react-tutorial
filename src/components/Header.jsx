import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import util from '../util';
import { Button } from 'reactstrap';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: ''
        }
    }

    getHeaderSign = () => {
        if(util.isNullorWhiteSpace(this.state.id)){
            return (
                <div className="Header-sign">
                    <SignIn onClickOk={(_res) => {
                        this.setState({id: _res.id})
                    }}></SignIn>
                    <SignUp></SignUp>
                </div>
            )
        }
        else{
            return (
                <div className="Header-sign">
                    <div className='Header-signin'><p>Signed in as <b>{this.state.id}</b></p></div>
                    <div className='Header-signup'><Button size='sm' onClick={()=>{this.setState({id:''})}}>Logout</Button></div>
                </div>
            )
        }
    }

    render() {
        return (
            <header className="App-header">
                <div className="Header-title" onClick={this.props.onClickHeader}>
                    {this.props.header_title}
                </div>
                {this.getHeaderSign()}
            </header>
        )
    };
}

export default Header