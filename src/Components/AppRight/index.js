import { Typography,Space,Card,Select,Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
// import React from 'react';

function AppRight(){
    return (
        <div classname="AppRight">
        <Card bodyStyle={{padding:0,width:340,height:600}}>
        <Space>
        &nbsp;&nbsp;&nbsp;
        <Typography.Title level={5} style={{fontWeight:'bold',padding:0,margin:0,borderBottom:"2px solid blue"}}>
        Build
        </Typography.Title>
        <Typography.Title level={5} style={{padding:0,margin:0}}>
        Setup
        </Typography.Title>
        </Space>
        <hr/>
        <Input addonBefore={<SearchOutlined style={{backgroundColor:""}}/>} placeholder="Search " /><br/><br/>
        <Select
                defaultValue="Actions"
                style={{ width: 340,height:30,fontSize:40}}
                options={[{ value: 'Actions', label: 'Actions' },{value:'dark',label:'dark'}]}
                /><br/>
                <Select
                defaultValue="Displays"
                style={{ width: 340,height:30}}
                options={[{ value: 'Displays', label: 'Displays' },{value:'dark',label:'dark'}]}
                /><br/>
                <Select
                defaultValue="Functions"
                style={{ width: 340,height:30}}
                options={[{ value: 'Functions', label: 'Functions' },{value:'dark',label:'dark'}]}
                /><br/>
                <Select
                defaultValue="Groups"
                style={{ width: 340,height:30}}
                options={[{ value: 'Groups', label: 'Groups' },{value:'dark',label:'dark'}]}
                /><br/>
                <Select
                defaultValue="Inputs"
                style={{ width: 340,height:30}}
                options={[{ value: 'Inputs', label: 'Inputs' },{value:'dark',label:'dark'}]}
                /><br/>
                <Select
                defaultValue="OmniScripts"
                style={{ width: 340,height:30}}
                options={[{ value: 'OmniScripts', label: 'OmniScripts' },{value:'dark',label:'dark'}]}
                />
                
        </Card>
        </div>
    );
}

export default AppRight;