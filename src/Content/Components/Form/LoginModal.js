import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap' ;

import Login from './Login'

class ModalLogin extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}
	

	render() {
		return (
			<>
				<Button variant="outline-light" 
					onClick={this.handleShow} 
					style={{
						fontSize: '0.5em',
						outline: 'none',
						border: 'none',
						width: 200,
						height: 40,
				}}>

					Log In
        </Button>

				<Modal show={this.state.show} onHide={this.handleClose} >
					<Modal.Header style={{backgroundColor:'#4a69bb', border:'none', outline:'none'}} >
						<Modal.Title style={{color:'white', alignItems:'center'}}>EduTech</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{backgroundColor:'#4a69bb'}}>
						<Login handleClose={this.handleClose} />
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

export default ModalLogin;