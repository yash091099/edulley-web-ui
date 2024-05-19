import React, { useState } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Profile from './profile';
import Academic from './application';
import ViewUserDocument from './document';

const ProfileForm = () => {
  const [activeKey, setActiveKey] = useState('profile');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="home-page-container profile-tab  container-fluid" style={{paddingTop:"6rem"}}>
       <div className="container">
       <Tab.Container className="" id="profile-tabs" activeKey={activeKey} onSelect={handleSelect}>
        <Nav variant="pills" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="profile" style={{ color: activeKey === 'profile' ? '#FF5573' : 'black',fontFamily: 'Gilroy-SemiBold' }}>
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="applications" style={{ color: activeKey === 'applications' ? '#FF5573' : 'black' ,fontFamily: 'Gilroy-SemiBold' }}>
              Applications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="documents" style={{ color: activeKey === 'documents' ? '#FF5573' : 'black',fontFamily: 'Gilroy-SemiBold'  }}>
              Documents
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="profile">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="applications">
                <Academic />
              </Tab.Pane>
              <Tab.Pane eventKey="documents">
                <ViewUserDocument />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
       </div>
      
     
    </div>
  );
};

export default ProfileForm;
