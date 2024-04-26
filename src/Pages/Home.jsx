import React, { useEffect,useState } from "react";
import HeroSection from "../components/Home/HeroSection";
import WeCanDo from "../components/Home/WeCanDo";
import Statistics from "../components/Home/Statistics";
import Countries from "../components/Home/Countries";
// import Universties from "../components/Home/Universties";
import Works from "../components/Home/Works";
import StudentSays from "../components/Home/StudentSays";
import FAQ from "../components/Home/FAQ";
import UniverstiesHome from "../components/Home/UniversityHome";
import LoginModal from "../components/auth/login";
import { Modal, Button, Form, FormGroup, FormCheck, FormControl, Row, Col } from 'react-bootstrap';



const ModalForm = ({ showModal, handleClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('+91');
  const [destination, setDestination] = useState('');
  const [studyLevel, setStudyLevel] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, mobile, destination, studyLevel, agree });
    handleClose();
  };

  return (
  
    <Modal 
      show={showModal} 
      onHide={handleClose} 
      className="unique-modal-form" 
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton className="unique-modal-form-header">
        <Modal.Title id="contained-modal-title-vcenter">Interested in studying abroad with Edulley?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="unique-modal-form-body">
        <Form onSubmit={handleSubmit} className="unique-modal-form-main">
          <p>Enter your details below and we'll call you back when it suits you.</p>
          <FormGroup className="mb-3">
            <FormControl 
              type="text" 
              placeholder="First Name" 
              required 
              value={firstName} 
              onChange={e => setFirstName(e.target.value)} 
              className="unique-modal-form-input"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormControl 
              type="text" 
              placeholder="Last Name" 
              required 
              value={lastName} 
              onChange={e => setLastName(e.target.value)} 
              className="unique-modal-form-input"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormControl 
              type="tel" 
              placeholder="Mobile Number" 
              required 
              value={mobile} 
              onChange={e => setMobile(e.target.value)} 
              className="unique-modal-form-input"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormControl 
              type="text" 
              placeholder="Your preferred study destination" 
              required 
              value={destination} 
              onChange={e => setDestination(e.target.value)} 
              className="unique-modal-form-input"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormControl 
              type="text" 
              placeholder="Preferred study level" 
              required 
              value={studyLevel} 
              onChange={e => setStudyLevel(e.target.value)} 
              className="unique-modal-form-input"
            />
          </FormGroup>
          <p>Note: We will not share your details without your permission.</p>
          <FormGroup className="mb-3">
            <FormCheck 
              type="checkbox" 
              label="I agree to the privacy and terms and conditions" 
              required 
              checked={agree} 
              onChange={e => setAgree(e.target.checked)} 
              className="unique-modal-form-check"
            />
          </FormGroup>
          <Button 
            variant="primary" 
            type="submit" 
            className="unique-modal-form-button float-end"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const Home = () => {
  // const fetchUniversities = async () => {
  //   try {
  //     const response =  
  // }
  // useEffect(() => {
    
    
  // },[]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const _u=JSON.parse(localStorage.getItem('_u'));
  let token = _u?.token;
  useEffect(() => {
      setShowModal(true);
  },[])
  return (
    <>
    <div>
      {!token && <LoginModal />}
      <HeroSection />
      <WeCanDo />
      <Statistics />
      <Countries />
     {token && <UniverstiesHome />}
      <Works />
      <StudentSays />
      <FAQ />
      <ModalForm showModal={showModal} handleClose={handleClose} />

    </div>
    </>
  );
};

export default Home;
