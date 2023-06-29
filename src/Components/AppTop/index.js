import React from 'react'
import { Typography,Button,Card,Space } from 'antd';
import { ApartmentOutlined,CaretDownOutlined } from '@ant-design/icons';

function AppTop() {
  return (
    <div>
    <Card bordered={false} bodyStyle={{padding:10,paddingBottom:0,backgroundColor:"#f1f3f1",borderBottomLeftRadius:0,borderBottomRightRadius:0}} className='p-0'>
    <div className='rand' style={{display:'flex',justifyContent:"space-between" }}>
    <div>
    <Space>
    <ApartmentOutlined style={{fontSize:30}} />
    <Typography.Title level={4} style={{margin:0}} >
    <span style={{color:"#aca4ac"}}>OmniScript</span><br/>Bulk Enrollment
    </Typography.Title>
    </Space>
    </div>

    <div style={{padding:10,paddingRight:0}}>
    <Button style={{color:"blue"}}> Preview</Button>&nbsp;
    <Button style={{color:"blue",borderBottomRightRadius:0,borderTopRightRadius:0}}> New Version</Button>
    <Button style={{color:"blue",borderRadius:0}}> Active Version</Button>
    <Button style={{color:"blue",borderRadius:0}}> Edit</Button>
    <Button icon={<CaretDownOutlined />}style={{borderBottomLeftRadius:0,borderTopLeftRadius:0}}></Button>
    </div>
    </div>
  </Card>
  <Card bordered={false} bodyStyle={{padding:10,borderTopLeftRadius:0,borderTopRightRadius:0}}>
  <Space>
  <Typography.Title level={5} style={{margin:0}} >
    <span style={{color:"#aca4ac",fontSize:13}}>Type</span><br/>InsEnrollmentStd
    </Typography.Title>&nbsp;&nbsp;&nbsp;
    <Typography.Title level={5} style={{margin:0}} >
    <span style={{color:"#aca4ac",fontSize:13}}>Subtype</span><br/>NewDataModel
    </Typography.Title>&nbsp;&nbsp;&nbsp;
    <Typography.Title level={5} style={{margin:0}} >
    <span style={{color:"#aca4ac",fontSize:13}}>Language</span><br/>English
    </Typography.Title>&nbsp;&nbsp;&nbsp;
    <Typography.Title level={5} style={{margin:0}} >
    <span style={{color:"#aca4ac",fontSize:13}}>Version</span><br/>1
    </Typography.Title>&nbsp;&nbsp;&nbsp;
    <Typography.Title level={5} style={{margin:0}} >
    <span style={{color:"#aca4ac",fontSize:13}}>Active</span><br/>false
    </Typography.Title>&nbsp;&nbsp;&nbsp;
    <Typography.Title level={5} style={{margin:0,color:"white"}} >
    <span style={{color:"#aca4ac",fontSize:13}}>Description</span><br/>Bulk Enrollment
    </Typography.Title>
    </Space>
  </Card>
    </div>
  )
}

export default AppTop
