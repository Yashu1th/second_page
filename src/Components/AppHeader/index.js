import { Typography,Space,Button } from 'antd';
import {BorderBottomOutlined,ApartmentOutlined,DownOutlined,CloseOutlined} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

function AppHeader(){
    return (
        <div classname="AppHeader">
            <Space>
            <Typography.Title level={4} style={{margin:0,borderRight:"1px solid #a0aca0"}} >
            <BorderBottomOutlined style={{fontSize:24}} /> OmniStudio
            </Typography.Title>
            <Button style={{margin:0,border:"none",borderRight:"1px solid #a0aca0",color:"#475247",borderRadius:0}} >
            OmniScripts <DownOutlined style={{fontSize:10}}/><CloseOutlined style={{fontSize:10}}/>
            </Button>
            <Link to="/"><Button style={{margin:0,border:"none",borderRight:"1px solid #a0aca0",color:"#a0aca0",borderRadius:0}} >
            <ApartmentOutlined />Home  <DownOutlined style={{fontSize:10}}/><CloseOutlined style={{fontSize:10}}/>
            </Button></Link>
            <Link to="/two"><Button style={{margin:0,border:"none",borderRight:"1px solid #a0aca0",color:"#a0aca0",borderRadius:0}} >
            <ApartmentOutlined />InblitzCreateUpdate <DownOutlined style={{fontSize:10}}/><CloseOutlined style={{fontSize:10}}/>
            </Button></Link>
            <Link to="/three"><Button style={{margin:0,border:"none",borderRight:"1px solid #a0aca0",color:"#a0aca0",borderRadius:0}} >
            <ApartmentOutlined />Projects & Opportunities <DownOutlined style={{fontSize:10}}/><CloseOutlined style={{fontSize:10}}/>
            </Button></Link>
            <Button style={{margin:0,border:"none",borderRight:"1px solid #a0aca0",color:"#a0aca0",borderRadius:0}} >
            <ApartmentOutlined />Bulk Enrollment  <DownOutlined style={{fontSize:10}}/><CloseOutlined style={{fontSize:10}}/>
            </Button>
            <Button style={{margin:0,border:"none",borderRight:"1px solid #a0aca0",color:"#a0aca0",borderRadius:0}} >
            <ApartmentOutlined />Recently viewed  <DownOutlined style={{fontSize:10}}/><CloseOutlined style={{fontSize:10}}/>
            </Button>
            </Space>
            
        </div>
    );
}

export default AppHeader;