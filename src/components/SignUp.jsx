import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col, FormText } from 'reactstrap';
import util from '../util';
import crypto from 'crypto';

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modal: false,
            id: '',
            pwd: '',
            email: ''
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onClickSave = () => {
        if(this.state.modal === true){
            console.log(this.state.id, this.state.pwd, this.state.email)
            if(util.isNullorWhiteSpace(this.state.id)){
                alert('Please enter a valid ID')
                return
            }
            if(util.isNullorWhiteSpace(this.state.pwd)){
                alert('Please enter a valid Password')
                return
            }
            if(util.isNullorWhiteSpace(this.state.email)){
                alert('PPlease enter a valid Email Address')
                return
            }

            var changedPwdTosha256 = crypto.createHash('sha256').update(this.state.pwd).digest('hex')
            this.createUser({id: this.state.id, password: changedPwdTosha256, email: this.state.email})
        }
    }

    onModalClosed = () => {
        this.setState({
            id: '',
            pwd: '',
            email: ''
        })
    }

    createUser = (_user) => {
        fetch('http://localhost:3001/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(_user)
        })
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            if (res === 'OK') {
                alert('Your account has been successfully created!')
                this.setState({
                    modal: false
                })
            }
          })
      }

    render() {
        return (
            <div className='Header-signup'>
                <Button size='sm' onClick={this.toggle}>Sign Up</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className='Modal-style' onClosed={this.onModalClosed}>
                    <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label className='Modal-label' for="userId" sm={3}>ID</Label>
                                <Col sm={9}>
                                    <Input type="text" name="text" value={this.state.id} id="userId" onChange={(e)=>{
                                        this.setState({
                                            id: e.target.value
                                        })
                                    }}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className='Modal-label' for="userPwd" sm={3}>Password</Label>
                                <Col sm={9}>
                                    <Input type="password" name="password" value={this.state.pwd} id="userPwd" onChange={(e)=>{
                                        this.setState({
                                            pwd: e.target.value
                                        })
                                    }}/>
                                    <FormText>Please enter at least 8 digits.</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className='Modal-label' for="userEmail" sm={3}>Email</Label>
                                <Col sm={9}>
                                    <Input type='email' name='email' value={this.state.email} id="userEmail" onChange={(e)=>{
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" size='sm' onClick={this.onClickSave}>Save</Button>
                        <Button color="secondary" size='sm' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    };
}

export default SignUp