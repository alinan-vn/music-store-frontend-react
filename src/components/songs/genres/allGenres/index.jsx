import React from 'react'
import {Col, Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import hiphop from '../genreImages/hiphop.jpg';
import pop from '../genreImages/pop.png';
import rock from '../genreImages/rock.png';
import rb from '../genreImages/rb.jpg';
import techno from '../genreImages/techno.jpg';
import country from '../genreImages/country.jpeg';
class AllGenres extends React.Component {

    render(){
        return(
            <section>
                 <Container>
  <Row>
    <Col><img src = {hiphop} width="200" height="200"/></Col>
    <Col><img src = {pop} width="200" height="200"/></Col>
    <Col><img src = {rock} width="200" height="200"/> </Col>
  </Row>
  <Row>
  <Col><img src = {techno} width="200" height="200"/> </Col>
  <Col><img src = {country} width="200" height="200"/> </Col>
<Col><img src = {rb} width="200" height="200"/> </Col>
  </Row>
</Container>
            </section>
        )
    }
}

export default AllGenres