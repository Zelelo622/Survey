import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default class HeaderTest extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Survey</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/questionnaire">Questionnaire</Nav.Link>
                                <Nav.Link href="/question">Question</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </div>
        );
    }
}