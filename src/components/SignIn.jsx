import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modal: false,
            id: '',
            pwd: ''
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onLoginClick = () => {
        if(this.state.modal === true){
            console.log('hello')
        }
    }

    render() {
        return (
            <div className='Header-signin'>
                <Button size='sm' onClick={this.toggle}>Sign In</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className='Modal-style'>
                    <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
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
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" size='sm' onClick={this.onLoginClick}>OK</Button>
                        <Button color="secondary" size='sm' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    };
}

export default SignIn