import React from 'react'
import { Nav } from 'react-bootstrap';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
import {Button} from 'react-bootstrap';
class EditProfile extends React.Component {

    emptyItem = {
        name: '',
        username: '',
        password: '',
        phone: '',
        email: ''
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
                <Label for="name">Name: </Label>
                <Input type="text" name="name" id="name" value={item.name}
                       onChange={this.handleChange} autoComplete="name"/>
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone Number: </Label>
                <Input type="text" name="phone" id="phone" value={item.phone}
                       onChange={this.handleChange} autoComplete="phone"/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email: </Label>
                <Input type="text" name="email" id="email" value={item.email}
                       onChange={this.handleChange} autoComplete="email"/>
              </FormGroup>
              <FormGroup>
                <Button style = {{width: 100 + '%'}}  color="primary" type="submit">Save</Button>{' '}
                <Button style = {{width: 100 + '%'}} variant="secondary"  a href ="/profile" >Cancel</Button>
              </FormGroup>
            </Form>
          </Container>
        </div>
      }
}

export default EditProfile