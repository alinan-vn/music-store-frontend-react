import React from 'react'
import './index.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

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
            purchaseConfirmationId: 1234
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
        return firstSum + secondSum
    }

    getItemDataCard = () => {
        const productsLength = this.state.shoppingProductData.length
        const songsLength = this.state.shoppingSongData.length 
        const subTotal = this.addPricesOfCartItems()
        const taxes = subTotal * 0.10
        return(
            <tr>
                <td className='purchase-confirmation__general-item'>{productsLength}</td>
                <td className='purchase-confirmation__general-item'>{songsLength}</td>
                <td className='purchase-confirmation__general-item'>{productsLength + songsLength}</td>
                <td className='purchase-confirmation__general-item'>{subTotal}</td>
                <td className='purchase-confirmation__general-item'>{taxes}</td>
                <td className='purchase-confirmation__total-item'>{subTotal + taxes}</td>
            </tr>
        )
    }

    handleButtonClick = e => {
        this.props.history.push(`/all-${e.target.name}`)
    }

    render(){
        return(
            <section>
                <div className='purchase-confirmation__header'>
                    <h3>Receipt #d000{this.state.purchaseConfirmationId}</h3>
                </div>
                <div className='purchase-confirmation__table'>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th className='purchase-confirmation__no-items'>No of Products Purchased</th>
                                <th className='purchase-confirmation__no-items'>No of Songs Purchased</th>
                                <th className='purchase-confirmation__no-items'>Total No</th>
                                <th className='purchase-confirmation__sub-total'>Sub Total</th>
                                <th className='purchase-confirmation__taxes'>Taxes</th>
                                <th className='purchase-confirmation__total'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getItemDataCard()}
                        </tbody>
                    </Table>
                </div>
                <div className='purchase-confirmation__btns'>
                    <Button onClick={this.handleButtonClick} name='categories' className='purchase-confirmation__btn'>View our Categories!</Button><br />
                    <Button onClick={this.handleButtonClick} name='genres' className='purchase-confirmation__btn'>View our Genres!</Button>
                </div>
            </section>
        )
    }
}

export default PurchaseConfirmation