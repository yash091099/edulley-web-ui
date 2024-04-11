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
    <div className="home-page-container  container-fluid " style={{paddingTop:"6rem"}}>
      
      <Tab.Container id="profile-tabs " activeKey={activeKey} onSelect={handleSelect}>
        <Nav variant="pills" className="flex-row mb-4">
          <Nav.Item>
            <Nav.Link eventKey="profile" style={{ color: activeKey === 'profile' ? '#FF6477' : 'black' }}>
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="applications" style={{ color: activeKey === 'applications' ? '#FF6477' : 'black' }}>
              Applications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="documents" style={{ color: activeKey === 'documents' ? '#FF6477' : 'black' }}>
              Documents
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="profile" className="pt-3">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="applications" className="pt-3">
                <Academic />
              </Tab.Pane>
              <Tab.Pane eventKey="documents" className="pt-3">
                <ViewUserDocument />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ProfileForm;
