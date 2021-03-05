import React from 'react'
import { Button, ButtonGroup, Table} from 'react-bootstrap';

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
        var category = this.props.match.params.category;
        if (category == null) 
            this.props.history.push("./")
        else{
            this.setState({category: category})
         }
        }

      async  addToCart(id){
          
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
      {products.filter(function(product){ return product.category == category;}).map(product =>
             <tr key={product.id}> 
             <td> </td>
               <td>{product.name}</td>  
               <td>${product.price}</td> 
               <td>{product.description}</td>
               <td>{product.category}</td>
               <td>
               <ButtonGroup>
                 <Button className="float-right" size="sm" color="primary"  onClick={() => this.addToCart(product.id)}>Add to Cart</Button>
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