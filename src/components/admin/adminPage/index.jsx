import React from 'react'
import './index.css'
import Button from 'react-bootstrap/Button'

class AdminPage extends React.Component {

    handleAdminPageChange = e => {
        this.props.history.push(`/admin/${e.target.name}`)
    }

    render(){
        return(
            <section className='admin-page'>
                <div className='admin-page-btns'>
                    <Button onClick={this.handleAdminPageChange} name='song-inventory' className='admin-page-btn'>View Song Inventory</Button><br />
                    <Button onClick={this.handleAdminPageChange} name='product-inventory' className='admin-page-btn'>View Product Inventory</Button><br />
                    <Button onClick={this.handleAdminPageChange} name='customer-management' className='admin-page-btn'>Customer Management</Button><br />
                </div>
            </section>
        )
    }
}

export default AdminPage