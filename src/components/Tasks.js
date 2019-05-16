import React from 'react';
import { Row, Col,Icon } from 'antd';
import { Button } from 'antd';
import '../stylesheets/Tasks.css';
function Tasks() {
  return (
    <div style={{padding: '50px'}}>
    
    <Row>
    <Col xs={24} sm={9} md={8} lg={10} >
    <p className="services-header">
    Tasks 
    </p>
    </Col>
    <Col xs={24} sm={5} md={13} lg={8} >
    </Col>
    <Col xs={24} sm={10} md={3} lg={6} >
      <Row className="welcome-header__row">
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button className="acquisition-header__button"><Icon type="plus" />  New Task </Button>
      </Col>
      </Row>
    </Col>
  </Row>
  <br/>
    <Row>
    <Col xs={24} sm={24} md={6} lg={6} >
    <div className="task-container">
    <p className="task-heading">
    Completed
    <Icon type="more"  className="more-icon" style={{fontSize: '26px'}}/>
    <div className="task-content">

    </div>
    </p>
    </div>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6} >
    Hola
    </Col>
    <Col xs={24} sm={24} md={6} lg={6} >
    Hola
    </Col>
    <Col xs={24} sm={24} md={6} lg={6} >
    Hola
    </Col>
    </Row>
    </div>
  );
}

export default Tasks;
