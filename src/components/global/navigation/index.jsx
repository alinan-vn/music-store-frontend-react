import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Navigation extends React.Component {

    render(){
        return(                
            <Navbar bg="dark" variant="dark">                
                <Navbar.Brand href="/">Music Store</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Catalog" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/all-songs">Songs</NavDropdown.Item>
                        <NavDropdown.Item href="/all-products">Products</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/products-by-selected-category/djgear">DJ Gear</NavDropdown.Item>
                        <NavDropdown.Item href="/products-by-selected-category/instruments">Intruments</NavDropdown.Item>
                        <NavDropdown.Item href="/products-by-selected-category/album">Albums</NavDropdown.Item>
                        <NavDropdown.Item href="/products-by-selected-category/lifestyle">Lifestyle</NavDropdown.Item>
                        <NavDropdown.Item href="/products-by-selected-category/accesseries">Accesseries</NavDropdown.Item>
                        <NavDropdown.Item href="/products-by-selected-category/audio">Audio</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Genres" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/songs-by-selected-genre/hiphop">Hip-Hop</NavDropdown.Item>
                        <NavDropdown.Item href="/songs-by-selected-genre/rb">R&B</NavDropdown.Item>
                        <NavDropdown.Item href="/songs-by-selected-genre/pop">Pop</NavDropdown.Item>
                        <NavDropdown.Item href="/songs-by-selected-genre/rock">Rock</NavDropdown.Item>
                        <NavDropdown.Item href="/songs-by-selected-genre/techno">Techno</NavDropdown.Item>
                        <NavDropdown.Item href="/songs-by-selected-genre/country">Country</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="/login">Login/Register</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation