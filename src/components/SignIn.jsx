import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import util from '../util';
import crypto from 'crypto';
import config from '../config.json'

class SignIn extends React.Component {
    constructor(props) {
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

    onClickOk = () => {
        if (this.state.modal === true) {
            //1.id와 비밀번호 전송
            //2.성공적으로 로그인되면 창 닫고 Header.js의 state값을 바꾼다.
            //3.로그인에 실패하면 창 닫지 말고 오류를 띄우거나 어디가 잘못된건지 확인?
            if (util.isNullorWhiteSpace(this.state.id)) {
                alert('Please enter a valid ID')
                return
            }
            if (util.isNullorWhiteSpace(this.state.pwd)) {
                alert('Please enter a valid Password')
                return
            }
            var changedPwdTosha256 = crypto.createHash('sha256').update(this.state.pwd).digest('hex')
            this.findUser({ id: this.state.id, password: changedPwdTosha256 }, (_res) => {
                if(_res === null){
                    alert('Check your id & password!')
                }
                else{
                    this.props.onClickOk(_res)
                }
            })
        }
    }

    findUser = (_user, callback) => {
        console.log(_user)
        fetch(`http://${config.ip}:3001/findUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_user)
        }).then((res) => { return res.json() })
            .then((res) => {
                callback(res)
            })
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
                                    <Input type="text" name="text" value={this.state.id} id="userId" onChange={(e) => {
                                        this.setState({
                                            id: e.target.value
                                        })
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className='Modal-label' for="userPwd" sm={3}>Password</Label>
                                <Col sm={9}>
                                    <Input type="password" name="password" value={this.state.pwd} id="userPwd" onChange={(e) => {
                                        this.setState({
                                            pwd: e.target.value
                                        })
                                    }} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" size='sm' onClick={this.onClickOk}>OK</Button>
                        <Button color="secondary" size='sm' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    };
}

export default SignIn