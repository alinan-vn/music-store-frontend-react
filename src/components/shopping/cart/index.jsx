import React from 'react'
import './index.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class Cart extends React.Component {
    constructor(){
        super()
        this.state = {
            shoppingProductData: [
                {
                    name: 'product one',
                    price: 25.01,
                    quantity: 1
                },
                {
                    name: 'product two',
                    price: 25.01,
                    quantity: 2
                },
                {
                    name: 'product three',
                    price: 14.61,
                    quantity: 3
                }
            ],
            shoppingSongData: [
                {
                    name: 'song one',
                    price: 0.99,
                    quantity: 1
                },
                {
                    name: 'song two',
                    price: 1.99,
                    quantity: 1
                },
                {
                    name: 'song three',
                    price: 4.99,
                    quantity: 1
                }
            ],
            productSum: 0,
            songSum: 0
        }
    }

    checkProductItems = () => {
        if(this.state.shoppingProductData.length !== 0){
            return(
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th className='cart__product-items-name-column'>Product</th>
                        <th className='cart__product-items-price-column'>Price</th>
                        <th className='cart__product-items-quantity-column'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getProductItemsCards()}
                    </tbody>
                </Table>
            )
        }
    }

    getProductItemsCards = () => {
        let productCostSum = 0
        let cards = this.state.shoppingProductData.map((product, ind) => {
            productCostSum += product.price * product.quantity
            return(
                <tr key={ind}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                </tr>
            )
        })
        if (this.state.productSum === 0){
            this.setState({
                ...this.state,
                productSum: productCostSum
            })
        }
        return cards
    }

    checkSongItems = () => {
        if(this.state.shoppingProductData.length !== 0){
            return(
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th className='cart__song-items-name-column'>Song</th>
                        <th className='cart__song-items-price-column'>Price</th>
                        <th className='cart__song-items-quantity-column'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getSongItemsCards()}
                    </tbody>
                </Table>
            )
        }
    }

    getSongItemsCards = () => {
        let songCostSum = 0
        let cards = this.state.shoppingSongData.map((song, ind) => {
            songCostSum += song.price * song.quantity
            return(
                <tr key={ind}>
                    <td>{song.name}</td>
                    <td>{song.price}</td>
                    <td>{song.quantity}</td>
                </tr>
            )
        })
        if(this.state.songSum === 0){
            this.setState({
                ...this.state,
                songSum: songCostSum
            })
        }
        return cards
    }

    getSubTotalCard = () => {
        let subTotal = this.state.productSum + this.state.songSum
        return(
            <div className='cart__sub-total'>
                <p>Sub Total: {subTotal}</p>
                <Button onClick={this.handleCheckout}>Checkout!</Button>
            </div>
        )
    }

    handleCheckout = () => {
        this.props.history.push('/purchase-confirmation')
    }

    getCustomerPaymentInformationCard = () => {
        return(
            <h3>
                Using payment ending with "..1234"
            </h3>
        )
    }

    render(){
        return(
            <section>
                <div className='cart__header'>
                    <h1>Checkout</h1>
                </div>

                <div className='cart__customer'>
                    {this.getCustomerPaymentInformationCard()}
                </div>

                <div className='cart__product-items'>
                    {this.checkProductItems()}
                </div>

                <div className='cart__song-items'>
                    {this.checkSongItems()}
                </div>

                <div className='cart__sub-total'>
                    {this.getSubTotalCard()}
                </div>
            </section>
        )
    }
}

export default Cart