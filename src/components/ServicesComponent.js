import React from 'react';
import { Row, Col,Icon } from 'antd';
import { Button } from 'antd';
import '../stylesheets/ServicesComponent.css';
function ServicesComponent() {
  return (
    <div >
    <br/>
    
    <span><Icon type="arrow-left" className="back-icon"/> <p className="services-navigate">Back to Action Tracker </p></span>
  <div className="services-container">
  <Row>
    <Col xs={24} sm={9} md={8} lg={10} >
    <p className="services-header">
    Data Management Services <span> <Icon type="edit" /> Edit</span>
    </p>
    <p className="services-header__details">
    ID: HQ0000190101 
    </p>
    </Col>
    <Col xs={24} sm={5} md={13} lg={8} >
    </Col>
    <Col xs={24} sm={10} md={3} lg={6} >
      <Row className="welcome-header__row">
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Button className="welcome-header__button">Create New PR</Button>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Button className="welcome-header__button"> Create RFP </Button>
      </Col>
      </Row>
    </Col>
  </Row>
  <Row>
    <Col xs={24} sm={9} md={8} lg={10} >
    <span className="services-name">Requested Funds: </span> <p className="services-value">$4,20,00,000 </p>
    <br/>
    <span className="services-name">Obligated Funds: </span> <p className="services-value">--- </p>

    </Col>
    <Col xs={24} sm={5} md={13} lg={8} >

    </Col>
    <Col xs={24} sm={10} md={3} lg={6} >
      
    </Col>
  </Row>
  </div>
    <br/>
    </div>
  );
}

export default ServicesComponent;
