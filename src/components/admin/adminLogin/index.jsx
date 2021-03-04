import React from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AdminLogin extends React.Component {

    goToAdminPage = () => {
        this.props.history.push("/admin/admin-page")
    }

    render(){
        return(
            <section>
                <div className='admin-login-header'>
                    <h2>Welcome Administrator, Please Login</h2>
                </div>
                <Form className="admin-login-form">
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.goToAdminPage}variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        )
    }
}

export default AdminLogin