import React from 'react';
import { Table, Divider, Tag } from 'antd';
import { Input } from 'antd';

import { Row, Col,Icon } from 'antd';
import { Button } from 'antd';
import '../stylesheets/Conversations.css';
const { Column, ColumnGroup } = Table;

function Conversations() {
  return (
    <div>
    
    <Row>
    <Col xs={24} sm={9} md={8} lg={10} >
    <p className="services-header">
    Conversations
    </p>
    </Col>
    <Col xs={24} sm={5} md={13} lg={8} >
    </Col>
    <Col xs={24} sm={10} md={3} lg={6} >
      
    </Col>
  </Row>
  <br/>

<Row className="conversation-container">
<Col xs={24} sm={10} md={6} lg={6} className="conversation-left__block" > 

<p className="conversation-left__heading">
Topics <Icon type="plus-circle"  style={{float: 'right', fontSize: '20px', cursor: 'pointer'}}/>
</p>

<br/>
<p className="conversation-left__topic topic-selected">
# general(3) 
</p>
<p className="conversation-left__topic">
# strategy
</p>
<p className="conversation-left__topic">
# funding 
</p>
<p className="conversation-left__topic">
# requirments 
</p>
</Col>
<Col xs={24} sm={10} md={18} lg={18} className="conversation-right__block">
<div className="conversation-right__chat">
<div  className="horizontal-rule">
  <span className="horizontal-text"  >
  16th May 2019 
  </span>
</div>
<Row>
<Col xs={3} sm={3} md={1} lg={1}>
<img src="https://s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2017/06/18050914/round-thumbnail.png" className="conversation-image" />
</Col>
<Col xs={21} sm={21} md={22} lg={22}>
  <p className="conversation-right__heading">Tori Caputo <span className="conversation-time">10:47 AM</span></p>
  <p className="conversation-text">
  <span>@markwaites1 </span> hey, requirements draft is uploaded. Once you get the IGCE up, I'll get an RFI started.  Did you want to keep this SDVOB set aside? 
  </p>
</Col>
</Row>
<Row>
<Col xs={3} sm={3} md={1} lg={1}>
<img src="https://s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2017/06/18050914/round-thumbnail.png" className="conversation-image" />
</Col>
<Col xs={21} sm={21} md={22} lg={22}>
  <p className="conversation-right__heading">Tori Caputo <span className="conversation-time">10:47 AM</span></p>
  <p className="conversation-text">
  Thanks Tori, I'll have the IGCE up in a couple days.  We want it to stay sb set aside, but no strong feelings aboutwhat type.   Could you make sure to ask about sb availability in the rfi  </p>
</Col>
</Row>
<div  className="horizontal-rule">
  <span className="horizontal-text"  >
  17th May 2019 
  </span>
</div>
<Row>
<Col xs={3} sm={3} md={1} lg={1}>
<img src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/34937/large_thumb_gabriel_test__26_.jpg" className="conversation-image" />
</Col>
<Col xs={21} sm={21} md={22} lg={22}>
  <p className="conversation-right__heading">Mark Waites<span className="conversation-time">10:47 AM</span></p>
  <p className="conversation-text">
  <span>@markwaites1 </span> hey, requirements draft is uploaded. Once you get the IGCE up, I'll get an RFI started.  Did you want to keep this SDVOB set aside? 
  </p>
</Col>
</Row>
<div  className="horizontal-rule">
  <span className="horizontal-text"  >
  18th May 2019 
  </span>
</div>
<Row>
<Col xs={3} sm={3} md={1} lg={1}>
<img src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/34937/large_thumb_gabriel_test__26_.jpg" className="conversation-image" />
</Col>
<Col xs={21} sm={21} md={22} lg={22}>
  <p className="conversation-right__heading">Mark Waites<span className="conversation-time">10:47 AM</span></p>
  <p className="conversation-text">
  <span>@markwaites1 </span> hey, requirements draft is uploaded. Once you get the IGCE up, I'll get an RFI started.  Did you want to keep this SDVOB set aside? 
  </p>
</Col>
</Row>
<Row>
<Col xs={3} sm={3} md={1} lg={1}>
<img src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/34937/large_thumb_gabriel_test__26_.jpg" className="conversation-image" />
</Col>
<Col xs={21} sm={21} md={22} lg={22}>
  <p className="conversation-right__heading">Mark Waites<span className="conversation-time">10:47 AM</span></p>
  <p className="conversation-text">
  <span>@markwaites1 </span> hey, requirements draft is uploaded. Once you get the IGCE up, I'll get an RFI started.  Did you want to keep this SDVOB set aside? 
  </p>
</Col>
</Row>

<Row>
<Col xs={3} sm={3} md={1} lg={1}>
<img src="https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/34937/large_thumb_gabriel_test__26_.jpg" className="conversation-image" />
</Col>
<Col xs={21} sm={21} md={22} lg={22}>
  <p className="conversation-right__heading">Mark Waites<span className="conversation-time">10:47 AM</span></p>
  <p className="conversation-text">
  <span>@markwaites1 </span> hey, requirements draft is uploaded. Once you get the IGCE up, I'll get an RFI started.  Did you want to keep this SDVOB set aside? 
  </p>
</Col>
</Row>
</div>
<div style={{paddingLeft: '15px', paddingRight: '15px'}}>
<Input className="conversation-right__input" placeholder="Add message to #general …"/>

</div>
</Col>
</Row>
  
    </div>
  );
}

export default Conversations;
