import React from 'react';
import { Row, Col,Icon } from 'antd';
import { Button } from 'antd';
import '../stylesheets/Tasks.css';
function Tasks() {
  return (
    <div >
    
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
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
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
    New
    <Icon type="more"  className="more-icon" style={{fontSize: '26px'}}/>
  
 

    <div className="task-content">
        <Row>
            <Col xs={18} sm={18} md={18} lg={18} >
                <p className="task-content_value">
                Create RFI Draft
                </p>
                <p className="task-content_details">
                May 28, 2019
                </p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="task-image__container" >
            <img src="https://s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2017/06/18050914/round-thumbnail.png" className="task-image" />
            </Col>
        </Row>
    </div>

    <input className="task-add" placeholder="+ Add Task"/>
    </p>
    </div>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6} >
    <div className="task-container">
    <p className="task-heading">
    In Progress
    <Icon type="more"  className="more-icon" style={{fontSize: '26px'}}/>
    <div className="task-content">
        <Row>
            <Col xs={18} sm={18} md={18} lg={18} >
                <p className="task-content_value">
                Draft Requirements
                </p>
                <p className="task-content_details">
                May 24, 2019
                </p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="task-image__container" >
            <img src="https://s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2017/06/18050914/round-thumbnail.png" className="task-image" />
            </Col>
        </Row>
    </div>
    <input className="task-add" placeholder="+ Add Task"/>
    </p>
    </div>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6} >
    <div className="task-container">
    <p className="task-heading">
    In Review
    <Icon type="more"  className="more-icon" style={{fontSize: '26px'}}/>
    <button className="task-add__button">+ Add Task</button>
    </p>
    </div>
    </Col>
    <Col xs={24} sm={24} md={6} lg={6} >
    <div className="task-container">
    <p className="task-heading">
    Completed
    <Icon type="more"  className="more-icon" style={{fontSize: '26px'}}/>
  
 

    <div className="task-content">
        <Row>
            <Col xs={18} sm={18} md={18} lg={18} >
                <p className="task-content_value">
                    Review Program Request
                </p>
                <p className="task-content_details">
                May 5, 2019
                </p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="task-image__container" >
            <img src="https://s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2017/06/18050914/round-thumbnail.png" className="task-image" />
            </Col>
        </Row>
    </div>
    <div className="task-content">
        <Row>
            <Col xs={18} sm={18} md={18} lg={18} >
                <p className="task-content_value">
                    Review Program Request
                </p>
                <p className="task-content_details">
                May 5, 2019
                </p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="task-image__container" >
            <img src="https://s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2017/06/18050914/round-thumbnail.png" className="task-image" />
            </Col>
        </Row>
    </div>
    <div className="task-content">
        <Row>
            <Col xs={18} sm={18} md={18} lg={18} >
                <p className="task-content_value">
                    Review Program Request
                </p>
                <p className="task-content_details">
                May 5, 2019
                </p>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="task-image__container" >
            <Row>
            <Col xs={6} sm={6} md={6} lg={6} className="task-image__container first-image" >
            <img src="https://s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2017/06/18050914/round-thumbnail.png" className="task-image" />

            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="task-image__container" >
            <img src="https://media.glenfiddich.com/assets/Uploads/Shared/artists-in-residence/2012/WuTungLung/Thumbnails/Glenfiddich-Artists%20in%20Residence-2012-WuTungLung-Taiwan-ProfileThumbnail-007.jpg" className="task-image" />
            </Col>
            
            </Row>

            </Col>
        </Row>
    </div>
    <input className="task-add" placeholder="+ Add Task"/>
    </p>
    </div>
    </Col>
    </Row>
    <br/>
    </div>
  );
}

export default Tasks;
