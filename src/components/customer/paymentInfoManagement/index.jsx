import React from 'react'
import { Nav } from 'react-bootstrap';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
import {Button} from 'react-bootstrap';

class EditPaymentInfo extends React.Component {

    emptyItem = {
        streetName: '',
        apartmentNo: '',
        city: '',
        state: '',
        creditCardNo: '',
        expirationMonth: '',
        expirationDay: '',
        nameOnCard: '',
        pinNo: ''
      };
    
      constructor(props) {
        super();
        this.state = {
          item: this.emptyItem,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      async componentDidMount() {
        var id = this.props.match.params.id;
        //Fetch user from local storage
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
      }
    
      async handleSubmit(event) {
         event.preventDefault();
         const {item} = this.state;
        
    
        this.props.history.push('/profile');
        
      }
    
      render() {
        let item = {...this.state.item};
        return <div>
          <Container style = {{width: 400 + 'px'}} >
            <hr id="hr2" />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="address">Address: </Label>
                <Input type="text" name="address" id="address" value={item.address}
                       onChange={this.handleChange} autoComplete="address"/>
              </FormGroup>
              <FormGroup>
                <Label for="apartmentNo">Aparment Number: </Label>
                <Input type="text" name="apartmentNo" id="apartmentNo" value={item.apartmentNo}
                       onChange={this.handleChange} autoComplete="apartmentNo"/>
              </FormGroup>
              <FormGroup>
                <Label for="city">City: </Label>
                <Input type="text" name="city" id="city" value={item.city}
                       onChange={this.handleChange} autoComplete="city"/>
              </FormGroup>
              <FormGroup>
                <Label for="state">State: </Label>
                <Input type="text" name="state" id="state" value={item.state}
                       onChange={this.handleChange} autoComplete="state"/>
              </FormGroup>
              <FormGroup>
                <Label for="creditCardNo">Credit Card Number: </Label>
                <Input type="text" name="creditCardNo" id="creditCardNo" value={item.creditCardNo}
                       onChange={this.handleChange} autoComplete="creditCardNo"/>
              </FormGroup>
              <FormGroup>
                <Label for="expirationMonth">Expiration Month: </Label>
                <Input type="text" name="expirationMonth" id="expirationMonth" value={item.expirationMonth}
                       onChange={this.handleChange} autoComplete="expirationMonth"/>
              </FormGroup>
              <FormGroup>
                <Label for="expirationDay">Expiration Day: </Label>
                <Input type="text" name="expirationDay" id="expirationDay" value={item.expirationDay}
                       onChange={this.handleChange} autoComplete="expirationDay"/>
              </FormGroup>
              <FormGroup>
                <Label for="nameOnCard">Name On Card : </Label>
                <Input type="text" name="nameOnCard" id="nameOnCard" value={item.nameOnCard}
                       onChange={this.handleChange} autoComplete="nameOnCard"/>
              </FormGroup>
              <FormGroup>
                <Label for="pinNo">Pin No: </Label>
                <Input type="text" name="pinNo" id="pinNo" value={item.pinNo}
                       onChange={this.handleChange} autoComplete="pinNo"/>
              </FormGroup>
              <FormGroup>
                <Button style = {{width: 100 + '%'}}  color="primary" type="submit">Save</Button>{' '}
                <Button style = {{width: 100 + '%'}} variant="secondary" a href = "/profile">Cancel</Button>
              </FormGroup>
            </Form>
          </Container>
        </div>
      }
}

export default EditPaymentInfo