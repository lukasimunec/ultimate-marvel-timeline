import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap';


const HeadNav = (props) => {

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-secondary">
                <Container>
                    <Navbar.Brand href="/" className="d-flex align-items-center">
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="p-1"
                        />
                        <div className="row">
                            <h4 className="p-2 nav-title">&nbsp;<b>{props.title}</b></h4>
                            {props.home ?
                                null :
                                <span style={{ fontSize: "10px" }}>by BRONION&nbsp;</span>
                            }
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </React.Fragment>
    )
}

export default HeadNav
