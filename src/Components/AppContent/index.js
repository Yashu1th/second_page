import { Card,Checkbox,Select,Space, Typography} from 'antd';
// import { CheckboxChangeEvent } from 'antd/es/checkbox';
import {CopyOutlined, DeleteOutlined, FileAddOutlined, HolderOutlined} from '@ant-design/icons';
// import React from 'react';

function AppContent(){
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
    return (
        <div classname="AppContent">
            <Card borderd={false} bodyStyle={{padding:10,width:800,margin:0}} >
                <div style={{display:"flex",flexDirection:'row-reverse'}}>
                <Select
                defaultValue="lightning"
                style={{ width: 120 }}
                options={[{ value: 'lightning', label: 'lightning' },{value:'dark',label:'dark'}]}
                />
                <Checkbox onChange={onChange}>Hide Conditional Elements</Checkbox>
                </div>
                <Card bordered={false} bodyStyle={{padding:10,borderRadius:0}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Space>
                <HolderOutlined style={{fontSize:30,color:"#a4aca4"}} />
                <CopyOutlined style={{fontSize:30}} />
                <Space direction='vertical'>
                <Typography.Title level={5} style={{padding:0,margin:0}}>
                GetAccountContractDetails<br/>
                </Typography.Title>
                <Typography.Title level={5} style={{fontSize:13,color:"#a4aca4",padding:0,margin:0}}>
                DataRapter Extract Action
                </Typography.Title>
                </Space>
                </Space>
                <Space>
                <FileAddOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                <DeleteOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                </Space>
                </div>
                </Card>
                <br/>
                <Card bordered={false} bodyStyle={{padding:10,borderRadius:0}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Space>
                <HolderOutlined style={{fontSize:30,color:"#a4aca4"}} />
                <CopyOutlined style={{fontSize:30}} />
                <Space direction='vertical'>
                <Typography.Title level={5} style={{padding:0,margin:0}}>
                CreateCensusid<br/>
                </Typography.Title>
                <Typography.Title level={5} style={{fontSize:13,color:"#a4aca4",padding:0,margin:0}}>
                DataRapter Post Action
                </Typography.Title>
                </Space>
                </Space>
                <Space>
                <FileAddOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                <DeleteOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                </Space>
                </div>
                </Card>
                <br/>
                <Card bordered={false} bodyStyle={{padding:10,borderRadius:0}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Space>
                <HolderOutlined style={{fontSize:30,color:"#a4aca4"}} />
                <CopyOutlined style={{fontSize:30}} />
                <Space direction='vertical'>
                <Typography.Title level={5} style={{padding:0,margin:0}}>
                setCensusid<br/>
                </Typography.Title>
                <Typography.Title level={5} style={{fontSize:13,color:"#a4aca4",padding:0,margin:0}}>
                Set Values
                </Typography.Title>
                </Space>
                </Space>
                <Space>
                <FileAddOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                <DeleteOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                </Space>
                </div>
                </Card>
                <br/>
                <Card bordered={false} bodyStyle={{padding:10,borderRadius:0}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Space>
                <HolderOutlined style={{fontSize:30,color:"#a4aca4"}} />
                <CopyOutlined style={{fontSize:30}} />
                <Space direction='vertical'>
                <Typography.Title level={5} style={{padding:0,margin:0}}>
                UploadandReview<br/>
                </Typography.Title>
                <Typography.Title level={5} style={{fontSize:13,color:"#a4aca4",padding:0,margin:0}}>
                Step
                </Typography.Title>
                </Space>
                </Space>
                <Space>
                <FileAddOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                <DeleteOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                </Space>
                </div>
                </Card>
                <br/>
                <Card bordered={false} bodyStyle={{padding:10,borderRadius:0}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Space>
                <HolderOutlined style={{fontSize:30,color:"#a4aca4"}} />
                <CopyOutlined style={{fontSize:30}} />
                <Space direction='vertical'>
                <Typography.Title level={5} style={{padding:0,margin:0}}>
                ClearErrorList<br/>
                </Typography.Title>
                <Typography.Title level={5} style={{fontSize:13,color:"#a4aca4",padding:0,margin:0}}>
                Set Values
                </Typography.Title>
                </Space>
                </Space>
                <Space>
                <FileAddOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                <DeleteOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                </Space>
                </div>
                </Card>
                <br/>
                <Card bordered={false} bodyStyle={{padding:10,borderRadius:0}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Space>
                <HolderOutlined style={{fontSize:30,color:"#a4aca4"}} />
                <CopyOutlined style={{fontSize:30}} />
                <Space direction='vertical'>
                <Typography.Title level={5} style={{padding:0,margin:0}}>
                CheckCMError<br/>
                </Typography.Title>
                <Typography.Title level={5} style={{fontSize:13,color:"#a4aca4",padding:0,margin:0}}>
                Set Values
                </Typography.Title>
                </Space>
                </Space>
                <Space>
                <FileAddOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                <DeleteOutlined style={{fontSize:20,color:"#a4aca4"}}/>
                </Space>
                </div>
                </Card>
                </Card>
                </div>
    );
}

export default AppContent;