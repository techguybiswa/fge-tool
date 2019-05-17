import React from 'react';
import { Table, Divider, Tag } from 'antd';

import { Row, Col,Icon } from 'antd';
import { Button } from 'antd';
import '../stylesheets/AcquisitionStrategy.css';
const { Column, ColumnGroup } = Table;

function Documents() {
    const columns = [
        {
          title: 'DOCUMENT',
          dataIndex: 'document',
          key: 'document',
          width: 250,

        },
        {
          title: 'DATE UPLOADED',
          dataIndex: 'dateUploaded',
          key: 'dateUploaded',
          width: 250,

        },
        {
          title: 'UPLOADED BY',
          dataIndex: 'uploadedBy',
          key: 'uploadedBy',
          width: 250,

        },
        {
            title: 'LAST ACCESSED BY',
            dataIndex: 'lastAccessedBy',
            key: 'lastAccessedBy',
            width: 250,

          },
        {
          title: '',
          key: 'action',
          width: 150,
          render: (text, record) => (
            <span>
             <Icon type="cloud-download" />
            </span>
          ),
        },
      ];

    const data = [
        {
            key: '1',

            document: 'Program Request',
           dateUploaded: '10/05/2019',
          uploadedBy: 'Tori Caputo',
          lastAccessedBy: 'Mark Waites',
        },
        {
            key: '2',

            document: 'Requirements ',
           dateUploaded: '10/05/2019',
          uploadedBy: 'Tori Caputo',
          lastAccessedBy: 'Mark Waites',
        },
        {
            key: '3',

            document: 'IGCE',
           dateUploaded: '10/05/2019',
          uploadedBy: 'Tori Caputo',
          lastAccessedBy: 'Mark Waites',

        },
      ];
  return (
    <div>
    
    <Row>
    <Col xs={24} sm={9} md={8} lg={10} >
    <p className="services-header">
    Documents
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
        <Button className="acquisition-header__button"> <Icon type="plus" /> New Document </Button>
      </Col>
      </Row>
    </Col>
  </Row>
  <br/>
<div style={{width: '100%' , overflow: 'scroll'}}>
<Table  columns={columns} dataSource={data} style={{cursor: 'pointer' , fontFamily: 'Avenir'}}/>

</div>
  {/* <Table dataSource={data}>
  <Column title="DOCUMENT" dataIndex="document" key="document" />
  <Column title="DATE UPLOADED" dataIndex="dateUploaded" key="dateUploaded" />

    <Column title="UPLOADED BY" dataIndex="uploadedBy" key="uploadedBy" />
    <Column title="LAST ACCESSED BY" dataIndex="lastAccessedBy" key="lastAccessedBy" />
    <Column title="LAST ACCESSED BY" dataIndex="lastAccessedBy" key="lastAccessedBy" />

  </Table>, */}
    </div>
  );
}

export default Documents;
