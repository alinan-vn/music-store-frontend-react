import React from 'react'
import './index.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap'

class Profile extends React.Component {

    constructor(){
        super()
        this.state = {
            profileData: {
                name: 'Sam Sammy',
                username: 'sammy',
                password: '********',
                phone: '(123) 1234 123',
                email: 'sammy@gmail.com'
            },
            paymentData: {
                streetName: 'Electric Avenue',
                apartmentNo: 'n/a',
                city: 'Chicago',
                state: 'IL',
                creditCardNo: '123456789',
                expirationMonth: 'Dec',
                expirationDay: '13',
                nameOnCard: 'Sam Sammy',
                pinNo: '****'
            }
        }
    }

    handleDeleteAccount = () => {
        alert('Deleting account...')
    }

    render(){
        return(
            <section>
                <div className='profile__header'>
                    <h2>Profile</h2>
                </div>
                    
                <Card className='profile__card' style={{ width: '18rem' }}>
                    <Card.Header><strong>Account Details</strong></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Name: {this.state.profileData.name}</ListGroup.Item>
                        <ListGroup.Item>Username: {this.state.profileData.username}</ListGroup.Item>
                        <ListGroup.Item>Password: {this.state.profileData.password}</ListGroup.Item>
                        <ListGroup.Item>Phone: {this.state.profileData.phone}</ListGroup.Item>
                        <ListGroup.Item>Email: {this.state.profileData.email}</ListGroup.Item>
                        <Button  a href = {"/profile/" + this.state.profileData.username}>Edit</Button>
                    </ListGroup>
                </Card>

                <Card className='profile__card' style={{ width: '18rem' }}>
                    <Card.Header><strong>Payment Details</strong></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Street Name: {this.state.paymentData.streetName}</ListGroup.Item>
                        <ListGroup.Item>Apartment Number: {this.state.paymentData.apartmentNo}</ListGroup.Item>
                        <ListGroup.Item>City: {this.state.paymentData.city}</ListGroup.Item>
                        <ListGroup.Item>State: {this.state.paymentData.state}</ListGroup.Item>
                        <ListGroup.Item>Credit Card Number: {this.state.paymentData.creditCardNo}</ListGroup.Item>
                        <ListGroup.Item>Expiration Month: {this.state.paymentData.expirationMonth}</ListGroup.Item>
                        <ListGroup.Item>Expiration Day: {this.state.paymentData.expirationDay}</ListGroup.Item>
                        <ListGroup.Item>Name on Card: {this.state.paymentData.nameOnCard}</ListGroup.Item>
                        <ListGroup.Item>Pin Number: {this.state.paymentData.pinNo}</ListGroup.Item>
                        <Button  a href = {"/payment/" + this.state.profileData.username}>Edit</Button>
                    </ListGroup>
                </Card>

                <Button onClick={this.handleDeleteAccount} className='profile__delete-btn' variant='danger'>Delete Account</Button>

            </section>
        )
    }
}

export default Profile