import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './home.styles.css';


export default function Home() {
    return (
        <div>
            <Container>
                <div className="container-fluid bg-light py-5 mt-3">
                    <h2>Welcome to CodeLife.io</h2>
                    <p>This is how we buid a website with React, React-Router & React-Bootstrap</p>
                    <Link to='/about'>
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </div>
                <Row className='show-grid text-center mt-5'>
                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src='assest/pic-1.jpg' width='171' roundedCircle className='profile-pic' />
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum ea cumque ab dolorum id?</p>
                    </Col>
                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src='assest/pic-2.jpg' width='171' roundedCircle className='profile-pic' />
                        <h3>Joe Daniels</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum ea cumque ab dolorum id?</p>
                    </Col>
                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src='assest/pic-3.jpg' width='171' roundedCircle className='profile-pic' />
                        <h3>Mike Philips</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum ea cumque ab dolorum id?</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
