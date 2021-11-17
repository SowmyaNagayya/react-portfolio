import React from "react";

export default function Header({ setPage, setCurrentPage }) {

    const setAbout = () => { setPage("About") }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" onClick={setAbout}>Sowmya Nagayya</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#Resume">Resume</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

