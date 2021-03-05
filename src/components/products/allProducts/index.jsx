import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Container, Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import guitar from '../product_images/ORANGEWOOD_REY_MOHOGANY_CUTAWAY_BEGINNER_ACOUSTIC_GUITAR-1_2000x.png';
import axios from 'axios';

class AllProducts extends React.Component {
    


    constructor(props) {
        super();
        this.state = {products: [],
            isLoading: false};
        
      }

      componentDidMount() {
        this.setState({isLoading: true});
        axios.get(`http://localhost:8080/api/product`)
        .then(res => {
          const products = res.data;
          this.setState({products: products, isLoading: false });
        })
      }




       addToCart(product){
        axios.get(`http://localhost:8080/api/shoppingcart/1`)
        .then(res => {
          const shoppingCart = res.data;
          fetch('http://localhost:8080/api/savecartproducts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'shoppingCart': shoppingCart,'quantity':1,'product':product})
        }).then(res => {
            console.log(res);
            console.log(res.data);
          });
        })
    }

    render(){
        const {products} = this.state;
        return(
            <section>
            <Table className = "container  ">
      <thead>
        <tr>
          <th>Product name</th>
          <th>Price</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {products.map(product =>
             <tr key={product.id}> 
               <td>{product.productName}</td>  
               <td>${product.price}</td> 
               <td>{product.description}</td>
               <td>
               <ButtonGroup>
                 <Button className="float-right" size="sm" color="primary"  onClick={() => this.addToCart(product)}>Add to Cart</Button>
                </ButtonGroup>       
                </td>     
              </tr>
            )}
      </tbody>
    </Table>
            </section>
        )
    }
}

export default AllProducts