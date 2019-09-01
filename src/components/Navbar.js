import React from 'react';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authService: {
                isLoggedIn: false
            },
            searchQuery: ''
        };
    }

    componentDidMount() {
        const userImageUrl = localStorage.getItem('userImageUrl');

        if (userImageUrl) {
            this.setState({userImageUrl});
        }
    }

    updateSearch = event => {
        event.preventDefault();
        this.setState({searchQuery: event.target.value});
    };

    render() {

        const {searchQuery, authService} = this.state;

        return (
            <NavbarBootstrap bg="light" expand="md" className="px-5">
                <NavbarBootstrap.Brand className="nav-logo"><Link to="/">Atila</Link></NavbarBootstrap.Brand>
                <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBootstrap.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                        <Nav.Link><Link to="/essay">Essay</Link></Nav.Link>
                        <Nav.Link><Link to="/scholarship">Scholarships</Link></Nav.Link>
                        {authService.isLoggedIn &&
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>}
                    </Nav>
                    <Form inline>
                        <input value={searchQuery} className="form-control search-input" type="text" name="search"
                               placeholder="Enter a search term" onChange={this.updateSearch}/>
                        <Link to="search" className="ml-3"><FontAwesomeIcon icon={faSearch}/></Link>
                    </Form>
                </NavbarBootstrap.Collapse>
            </NavbarBootstrap>);
    }
}

export default Navbar;