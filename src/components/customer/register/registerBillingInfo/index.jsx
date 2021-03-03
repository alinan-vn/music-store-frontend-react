import React from 'react'
import './index.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class RegisterBillingInfo extends React.Component {

    handleRegisterBillingInfo = () => {
        this.props.history.push('/')
    }

    render(){
        return(
            <section>
                <div className='register-header'>
                    <h1>Register Billing Information</h1>
                </div>
                <Form className='register-billing-form'>
                    <Form.Group controlId="formBasicStreetName">
                        <Form.Label>Street Name</Form.Label>
                        <Form.Control type="street_name" placeholder="Enter Street Name" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicApartmentNumber">
                        <Form.Label>Apartment Number</Form.Label>
                        <Form.Control type="apartment_no" placeholder="Enter apartment number" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city" placeholder="Enter city" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="state" placeholder="Enter state" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicCreditCardNumber">
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control type="credit_card_no" placeholder="Enter credit card number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicExpirationMonth">
                        <Form.Label>Expiration Month</Form.Label>
                        <Form.Control type="expiration_month" placeholder="Enter expiration month" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicExpirationDay">
                        <Form.Label>Expiration Day</Form.Label>
                        <Form.Control type="expiration_day" placeholder="Enter expiration day" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicNameOnCard">
                        <Form.Label>Name on Card</Form.Label>
                        <Form.Control type="name_on_card" placeholder="Enter name on card" />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPinNumber">
                        <Form.Label>Pin Number</Form.Label>
                        <Form.Control type="pin_no" placeholder="Enter pin number" />                        
                    </Form.Group>

                    <Button onClick={this.handleRegisterBillingInfo} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        )
    }
}

export default RegisterBillingInfo