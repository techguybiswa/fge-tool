import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import '../stylesheets/Navbar.css';
import { Row, Col } from 'antd';

class Navbar extends Component {
  render() {
    return (
     <div>
       <div className="navbar">
        <Row>
        <Col xs={24} sm={5} md={1} lg={1} >
        </Col>
        <Col xs={24} sm={5} md={8} lg={8} >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/WHS_Insignia.svg/1200px-WHS_Insignia.svg.png" className="navbar-image"/>
        <p className="navbar-text">
        Washington Headquaters Services
        </p>
        </Col>
        <Col xs={0} sm={0} md={8} lg={8}>
        </Col>
        <Col xs={24} sm={5} md={7} lg={7} style={{paddingTop: '10px'}}>
        <Icon type="search" className="icon-search"/>  &nbsp;  
         <input className="input-search" placeholder="Search Active Contract Actions"/> 
         <Icon type="plus"  className="navbar-icon" />
         <Icon type="setting" className="navbar-icon" />
         <img src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/34937/large_thumb_gabriel_test__26_.jpg" className="navbar-profile" />

        </Col>
        </Row>
       </div>
     </div>
    );
  }
}
export default Navbar;
