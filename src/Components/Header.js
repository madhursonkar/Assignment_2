import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function Header() {
    const body = document.body;

    const [mode, changeMode] = useState("Dark Mode")
    const changemode = () => {
        if (mode == "Dark Mode") {
            changeMode("Light Mode");
            body.style.backgroundColor = "#31363F"
        }
        if (mode == "Light Mode") {
            changeMode("Dark Mode");
            body.style.backgroundColor = "white"
        }
    }

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold'>My Notes</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home" className='mx-2'>Home</Nav.Link>
                        <Nav.Link href="#features" onClick={changemode}>Enable {mode}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header

