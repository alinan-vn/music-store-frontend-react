import React from 'react'
import './index.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class CustomerManagement extends React.Component {
    constructor(){
        super()
        this.state = {
            customerData: [
                {
                    id: 1,
                    name: 'alejandro',
                    username: 'alinan',
                    phone: '(123) 4567891',
                    email: 'alinan@example.com'
                },
                {
                    id: 2,
                    name: 'chris',
                    username: 'cfulton',
                    phone: '(123) 4567891',
                    email: 'cfulton@example.com'
                },
                {
                    id: 3,
                    name: 'bishnu',
                    username: 'bchhan',
                    phone: '(123) 4567891',
                    email: 'bchhan@example.com'
                },
                {
                    id: 4,
                    name: 'angelico',
                    username: 'arodr',
                    phone: '(123) 4567891',
                    email: 'arodr@example.com'
                }
            ]
        }
    }

    getCustomerDataCards = () => {
        return this.state.customerData.map(cust => {
            return(
                <tr>
                    <td className='customer-management__'>{cust.name}</td>
                    <td className='customer-management__'>{cust.username}</td>
                    <td className='customer-management__'>{cust.phone}</td>
                    <td className='customer-management__'>{cust.email}</td>
                    <td className='customer-management__'><Button onClick={this.deleteCustomer} id={cust.id} name={cust.name}>Delete</Button></td>
                </tr>
            )
        })
    }

    deleteCustomer = e => {
        alert(`${e.target.name} Will be deleted`)
    }

    render(){
        return(
            <section>
                <div className='customer-management__header'>
                    <h3>Customer Management</h3>
                </div>
                <div className='customer-management__table'>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th className='customer-management__'>Customer</th>
                                <th className='customer-management__'>Username</th>
                                <th className='customer-management__'>Phone Number</th>
                                <th className='customer-management__'>Email</th>
                                <th className='customer-management__'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getCustomerDataCards()}
                        </tbody>
                    </Table>
                </div>
            </section>
        )
    }
}

export default CustomerManagement