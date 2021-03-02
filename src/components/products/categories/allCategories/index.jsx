import React from 'react'
import {Col, Row, Container} from 'react-bootstrap';
import instruments from '../category_images/instruments.jpeg';
import dj from '../category_images/dj.jpg';
import albums from '../category_images/albums.jpg';
import headphones from '../category_images/headphones.jpg';
import accessories from '../category_images/accessories.JPG';
import lifestyle from '../category_images/lifestyle.png';

class AllCategories extends React.Component {

    render(){
        return(
            <section>
                 <Container>
  <Row>
    <Col><img src = {dj} width="200" height="200"/> </Col>
    <Col><img src = {instruments} width="200" height="200"/></Col>
    <Col><img src = {albums} width="200" height="200"/> </Col>
  </Row>
  <Row>
  <Col><img src = {headphones} width="200" height="200"/> </Col>
  <Col><img src = {accessories} width="200" height="200"/> </Col>
<Col><img src = {lifestyle} width="200" height="200"/> </Col>
  </Row>
</Container>
            </section>
        )
    }
}

export default AllCategories