import React from 'react'
import { Button, ButtonGroup, Table} from 'react-bootstrap';
import axios from 'axios'

class ProductsBySelectedCategory extends React.Component {

    constructor(props) {
        super();
        this.state = {products: 
            [{  id: '1', 
            name: 'Guitar',
            price: '3000.99',
            description:'A really nice guitar'  ,
            category: 'Instrument'
               },
               {id: '1', 
               name: 'Guitar',
               price: '3000.99',
               description:'A really nice guitar',
               category: 'album'  },
            
                {id: '1', 
                name: 'Guitar',
                price: '3000.99',
                description:'A really nice guitar',
                category: 'album'  },
                {id: '1', 
                name: 'Guitar',
                price: '3000.99',
                description:'A really nice guitar',
                category: 'album'  }],
                category: ''};
        
      }
      async componentDidMount() {
        this.setState({isLoading: true});
        var category = this.props.match.params.category;
        if (category == null) 
            this.props.history.push("./")
        else{
            this.setState({category: category})
         }
         axios.get(`http://localhost:8080/api/song`)
        .then(res => {
          const products = res.data;
          this.setState({products: products, isLoading: false });
        })
         
        }

      async  addToCart(product){
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
        const {products, category} = this.state;
        return(
            <section>
            <Table className = "container  ">
      <thead>
        <tr>
        <th></th>
        <th>Product name</th>
          <th>Price</th>
          <th>Description</th>
          <th>category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {products.filter(function(product){ return product.category.categoryName == category}).map(product =>
             <tr key={product.id}> 
             <td> </td>
               <td>{product.name}</td>  
               <td>${product.price}</td> 
               <td>{product.description}</td>
               <td>{product.category.categoryName}</td>
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

export default ProductsBySelectedCategory