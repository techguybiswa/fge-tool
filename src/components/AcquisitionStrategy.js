import React from 'react';
import { Row, Col,Icon } from 'antd';
import { Button } from 'antd';
import '../stylesheets/AcquisitionStrategy.css';
function AcquisitionStrategy() {
  return (
    <div>
    
    <Row>
    <Col xs={24} sm={9} md={8} lg={10} >
    <p className="services-header">
    Acquisition Strategy <span> <Icon type="edit" /> Edit</span>
    </p>
    {/* <p className="services-header__details">
    ID: HQ0000190101 
    </p> */}
    </Col>
    <Col xs={24} sm={5} md={13} lg={8} >
    </Col>
    <Col xs={24} sm={10} md={3} lg={6} >
      <Row className="welcome-header__row">
    
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button className="acquisition-header__button"> Acknowledge </Button>
      </Col>
      </Row>
    </Col>
  </Row>
  <br/>

  <Row>
    <Col xs={24} sm={9} md={9} >
    <Row>
        <p className="services-header small">VALUES</p>
    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Contracting Vehicle: </span> </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value">Navy SeaPort-E NexGen </p>
    </Col>
    </Row>
    <Row>
    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Funding Type: </span>   </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value"> MILCON </p>


    </Col>
    </Row>
    <Row>
    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Target Date: </span>   </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value"> --- </p>
    </Col>
    </Row>
    <Row>
    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Set Aside:  </span>    </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value"> HUBZone </p>
    </Col>
    </Row>
    <Row>
    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Certifications Required:</span> 
    </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value">
             1. TOP SECRET FCL
            <br/>
            2. MILCON BONDING
             <br/>
             3. CERTIFIED HUBZONE
        </p>
    </Col>
    </Row>
   

    </Col>
    <Col xs={24} sm={9} md={9} >
    <Row>
    <p className="services-header small">TEAM MEMBER</p>

    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Contracting Officer</span>   </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value"> Marie Gosnell </p>
    </Col>
    </Row>
  
    <Row>
    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Legal </span>    </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value"> Shawna Howell </p>
    </Col>
    </Row>
    <Row>
    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Program Office </span>    </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value"> John Blake </p>
    </Col>
    </Row>
    <Row>
    <Col xs={24} sm={6} md={10} >
    <span className="services-name">Budget Analyst </span>    </Col>
    <Col xs={24} sm={18} md={14}  >
    <p className="acquisition-value"> Mark Waites </p>
    </Col>
    </Row>
   
    </Col>

    <Col xs={12} sm={6} md={6}  >
    <p className="services-header small">RESPONSE</p>

    <span className="services-name green">
        <Icon type="check-circle"  theme="outlined" style={{color: '#52c41a' }}   /> &nbsp;
        Yes
    </span>  
       <span className="services-name green">
        <Icon type="check-circle"  theme="outlined" style={{color: '#52c41a' }}   /> &nbsp;
        Yes
    </span>  
  
    <span className="services-name grey">
        <Icon type="clock-circle" theme="outlined" style={{color: '#aaa7b5' }} /> &nbsp;
        Pending
    </span> 

      <span className="services-name grey">
        <Icon type="close" theme="outlined" style={{color: '#f85359' }} /> &nbsp;
        No
    </span>  

    </Col>
  </Row>
    <br/>
    </div>
  );
}

export default AcquisitionStrategy;
