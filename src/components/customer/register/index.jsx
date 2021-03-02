import React from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends React.Component {


    handleRegisterSubmit = () => {
        this.props.history.push("/register-billing-information")
    }

    render(){
        return(
            <section>
                <div className='register-header'>
                    <h2>Register Account</h2>
                </div>
                <Form className='register-form'>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="phone" placeholder="Enter phone number" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.handleRegisterSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        )
    }
}

export default Register