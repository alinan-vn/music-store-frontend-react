import React from 'react'
import './index.css'


class PurchaseConfirmation extends React.Component {
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
            songSum: 0,
            overallSum: 0
        }
    }

    addPricesOfCartItems = () => {
        let firstSum = 0
        this.state.shoppingProductData.forEach(product => {
            firstSum += product.price * product.quantity
        })
        let secondSum = 0
        this.state.shoppingSongData.forEach(song => {
            secondSum += song.price * song.quantity
        })
        this.setState({
            ...this.state,
            overallSum: firstSum + secondSum
        })
    }

    componentDidMount(){
        // this.addPricesOfCartItems()
    }

    render(){
        return(
            <section>

            </section>
        )
    }
}

export default PurchaseConfirmation