import React from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AuthService from '../../services/auth-service'

class Login extends React.Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }


    loginUser = e => {
        e.preventDefault()

        let loginCustomer = {
            username: this.state.username,
            password: this.state.password
        }

        fetch('http://localhost:8080/api/customer')
            .then(r => r.json())
            .then(customers => {
                this.checkCustomers(customers, loginCustomer)
            })
    }

    checkCustomers = (customers, currentCustomer) => {
        let pass = false
        customers.forEach(cust => {
            if(currentCustomer.username == cust.username){
                if(currentCustomer.password == cust.password){
                    localStorage.setItem("user", JSON.stringify(currentCustomer))
                    this.props.history.push("/")
                    pass = true
                }
            }
        })
        if(!pass){
            alert("invalid credentials")
        }
        
    }

    render(){
        return(
            <section>
                <div className='login-header'>
                    <h2>Please Login</h2>
                </div>
                <Form className="login-form">
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name='username' type="username" placeholder="Enter username" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleInputChange} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.loginUser} variant="primary" type="submit">
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