import React from 'react'
import './index.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class ProductInventory extends React.Component {

    constructor(){
        super()
        this.state = {
            productData: [
                {
                    id: 1,
                    name: 'product 1',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos cupiditate vero, modi ipsa totam amet et dicta adipisci perspiciatis dolores ducimus dolorem! Ipsa, aliquid corporis non officia pariatur quas numquam.',
                    price: 40.22,
                    category: 'accessory',
                },
                {
                    id: 2,
                    name: 'product 2',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos cupiditate vero, modi ipsa totam amet et dicta adipisci perspiciatis dolores ducimus dolorem! Ipsa, aliquid corporis non officia pariatur quas numquam.',
                    price: 42.22,
                    category: 'accessory',
                },
                {
                    id: 3,
                    name: 'product 3',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos cupiditate vero, modi ipsa totam amet et dicta adipisci perspiciatis dolores ducimus dolorem! Ipsa, aliquid corporis non officia pariatur quas numquam.',
                    price: 10.90,
                    category: 'accessory',
                },
                {
                    id: 4,
                    name: 'product 4',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos cupiditate vero, modi ipsa totam amet et dicta adipisci perspiciatis dolores ducimus dolorem! Ipsa, aliquid corporis non officia pariatur quas numquam.',
                    price: 5.99,
                    category: 'accessory',
                }
            ]
        }
    }

    getProductDataCards = () => {
        return this.state.productData.map(prod => {
            return(
                <tr>
                    <td className='product-inventory__'>{prod.name}</td>
                    <td className='product-inventory__'>{this.trimDescription(prod.description)}</td>
                    <td className='product-inventory__'>{prod.price}</td>
                    <td className='product-inventory__'>{prod.category}</td>
                    <td className='product-inventory__'><Button onClick={this.editProduct} id={prod.id} name={prod.name}>Edit</Button></td>
                    <td className='product-inventory__'><Button onClick={this.deleteProduct} id={prod.id} name={prod.name}>Delete</Button></td>
                </tr>
            )
        })
    }

    trimDescription = description => {
        let descrArray = description.split(' ')
        let newDescArray = []
        for(let i = 0; i < 5; i++){
            newDescArray[i] = descrArray[i]
        }
        let finalDescription = newDescArray.join(' ')
        return finalDescription
    }

    editProduct = e => {
        alert(`${e.target.name} Will be edited`)
    }

    deleteProduct = e => {
        alert(`${e.target.name} Will be deleted`)
    }

    render(){
        return(
            <section>
                <div className='product-inventory__header'>
                    <h3>Product Inventory</h3>
                </div>
                <div className='product-inventory__table'>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th className='product-inventory__'>Product</th>
                                <th className='product-inventory__'>Description</th>
                                <th className='product-inventory__'>Price</th>
                                <th className='product-inventory__'>Category</th>
                                <th className='product-inventory__'>Edit</th>
                                <th className='product-inventory__'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getProductDataCards()}
                        </tbody>
                    </Table>
                </div>
            </section>
        )
    }
}

export default ProductInventory