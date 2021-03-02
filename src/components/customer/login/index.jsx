import React from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends React.Component {

    render(){
        return(
            <section>
                <div className='login-header'>
                    <h2>Please Login</h2>
                </div>
                <Form className="login-form">
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div>
                    <Button className='login-register-link'><a href="/register">Register/Sign up!</a></Button>
                </div>
            </section>
        )
    }
}

export default Login