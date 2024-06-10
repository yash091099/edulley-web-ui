import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import map from '../assets/mappin.svg';
import ellipse from '../assets/Ellipse.png';
import contactRelationshipManager from '../assets/contact-relation-ship-manager.png';
import contact from '../assets/contact.png';
import whatsapp from '../assets/logos_whatsapp-icon.png';
import linkedin from '../assets/devicon_linkedin.png';
import email from '../assets/material-symbols-light_stacked-email-sharp.png';

const ChatSupport = () => {
    const location = useLocation();
    const course = location.state;
    const [chatMessages, setChatMessages] = useState([]);

    const handleSendMessage = (event) => {
        event.preventDefault();
        const message = event.target.elements.chatMessage.value;
        if (message) {
            setChatMessages([...chatMessages, { sender: 'Student', message, timestamp: new Date().toLocaleString() }]);
            event.target.elements.chatMessage.value = '';
            setTimeout(() => {
                setChatMessages([...chatMessages, { sender: 'Student', message, timestamp: new Date().toLocaleString() }, { sender: 'Edulley Consulting', message: 'This is a response from Edulley Consulting.', timestamp: new Date().toLocaleString() }]);
            }, 1000);
        }
    };

    return (
        <Container className="py-4 course_container">
            <Row className="py-5 mt-4 mb-4">
                <Col md={4}>
                    <Card style={{ borderRadius: "26px", boxShadow: "0px 4px 12px 0px #0000001C" }}>
                        <Card.Body>
                            <Card.Text style={{ fontFamily: 'Gilroy-Medium', color: '#000' }}>{course?.createdAt?.split('T')[0]}</Card.Text>
                            <Card.Title style={{ fontFamily: 'Gilroy-Bold' }}>{course.courseId.courseName}</Card.Title>
                            <Card.Subtitle style={{ fontFamily: 'Gilroy-Medium', color: '#000' }}> <img src={ellipse} alt="map" style={{ width: "1rem", height: "1rem" }} /> {course.courseId.universityName}</Card.Subtitle>
                            <Card.Text style={{ fontFamily: 'Gilroy-Medium', marginTop: "5px" }}>Status :   <span className="badge pt-2 pb-2" style={{ backgroundColor: '#CDC1F9', color: '#5932EA', fontFamily: 'Gilroy-Medium' }}>{course?.status === "DEPOSIT_PAID" ? "Paid" : course.status}</span></Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-4" style={{ borderRadius: "26px", boxShadow: "0px 4px 12px 0px #0000001C" }}>
                        <Card.Body className="text-center">
                            <Card.Title style={{ fontFamily: 'Gilroy-Bold' }}>
                                <img src={contact} alt="contact" style={{ width: "1.5rem", height: "1.5rem", color: '#FF6477' }} />
                                Contact a Relationship Manager
                            </Card.Title>
                            <Card.Img variant="top" src={contactRelationshipManager} />
                            <Card.Text style={{ fontFamily: 'Gilroy-Medium', color: '#000' }}>Let us help you</Card.Text>
                            <div className='d-flex justify-content-center flex-column align-items-center'>
                                <Button variant="link" href="mailto:muskan@edulley.com" target="_blank" style={{ display: 'flex', alignItems: 'center', fontFamily: 'Gilroy-Medium', color: '#000' }}>
                                    <img src={email} alt="email" style={{ width: "1.5rem", height: "1.5rem", marginRight: '5px' }} />
                                    muskan@edulley.com
                                </Button>
                                <Button variant="link" href="https://wa.me/message/SMDIYPHGQFQRC1" target="_blank" style={{ display: 'flex', alignItems: 'center', fontFamily: 'Gilroy-Medium', color: '#000' }}>
                                    <img src={whatsapp} alt="whatsapp" style={{ width: "1.5rem", height: "1.5rem", marginRight: '5px' }} />
                                    Whatsapp Link
                                </Button>
                                <Button variant="link" href="https://www.linkedin.com/in/muskan-anni/" target="_blank" style={{ display: 'flex', alignItems: 'center', fontFamily: 'Gilroy-Medium', color: '#000' }}>
                                    <img src={linkedin} alt="linkedin" style={{ width: "1.5rem", height: "1.5rem", marginRight: '5px' }} />
                                    Linkedin Link
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card style={{ borderRadius: "16px", border: "1px solid #57565626" }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Gilroy-Medium' }}>Pay Application Fee</Card.Title>
                            <Button style={{ fontFamily: 'Gilroy-Medium', marginRight: '10px' }}>Pay Tuition fee</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mt-4" style={{ borderRadius: "16px", border: "1px solid #57565626" }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Gilroy-Medium' }}>Chat with us</Card.Title>
                            <div className="chat-box">
                                {chatMessages.map((chat, index) => (
                                    <div key={index} className="chat-message" style={{ backgroundColor: chat.sender === 'Student' ? '#FFF' : '#F6F6F6', fontFamily: 'Gilroy-Medium', color: '#000', borderRadius: '10px', marginBottom: '10px', padding: '10px' }}>
                                        <strong style={{ fontFamily: 'Gilroy-Bold', color: '#FF6477' }}>{chat.sender}</strong>
                                        <p>{chat.message}</p>
                                        <span className="chat-time" style={{ fontFamily: 'Gilroy-Medium', color: '#000' }}>{chat.timestamp}</span>
                                    </div>
                                ))}
                            </div>
                            <Form onSubmit={handleSendMessage}>
                                <Form.Group controlId="chatMessage" className="mt-3">
                                    <Form.Control type="text" placeholder="Add Message" style={{ fontFamily: 'Gilroy-Medium' }} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3" style={{ backgroundColor: '#FF6477', borderColor: '#FF6477', fontFamily: 'Gilroy-Bold' }}>Send</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ChatSupport;
