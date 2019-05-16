import React from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import '../stylesheets/WelcomeHeader.css';
function WelcomeHeader() {
  return (
    <div style={{padding: '50px'}}>
        <Row>
    <Col xs={24} sm={9} md={8} lg={10} >
    <p className="welcome-header">
    Hello, Mr. David Sanders
    </p>
    <p className="welcome-header__details">
    Head of Contracting &nbsp;
    {/* <span className="welcome-header__break">&nbsp;</span> */}
     |
     <span className="header-oblique"> Last login April 30, 8:17am</span>
    </p>
    </Col>
    <Col xs={24} sm={5} md={13} lg={8} >
    </Col>
    <Col xs={24} sm={10} md={3} lg={6} >
      <Row className="welcome-header__row">
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button className="welcome-header__button">Create New PR</Button>
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button className="welcome-header__button"> Create New RFP </Button>
      </Col>
      </Row>
    </Col>
  </Row>
    
    </div>
  );
}

export default WelcomeHeader;
