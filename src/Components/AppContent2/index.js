import { Card,Space,Button,Typography,Table,Drawer } from "antd";
import React, { useState } from 'react';
// import{useState} from "react";
import{PlusOutlined,KeyOutlined,AntCloudOutlined,FileTextOutlined,FormOutlined,BookOutlined,CreditCardOutlined,TeamOutlined,UserOutlined,StopOutlined,UserDeleteOutlined}from "@ant-design/icons";
var nm,unm,bn,al,fn,ln;
function AppContent(){
  const [open, setOpen] = useState(false);
    const showDrawer = (name,username) => {
      nm=name;
      unm=username;
      al=username.slice(0,username.indexOf("."));
      fn=name.slice(0,name.indexOf(" "));
      ln=name.slice(name.indexOf(" "));
      bn=fn.slice(0,1).concat(ln.slice(1,2));
      console.log(fn);
      console.log(ln);
      console.log(username);
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
    const dataSource = [
        {
          key: '1',
          Name: 'NxtDiv Info',
          Username : 'info@nxtdiv.com',
          Licenses: 'Microsoft 365 Bussiness Basic',
        },
        {
          key: '2',
          Name: 'Sudhakar T',
          Username : 'Sudhakar@nxtdiv.com',
          Licenses: 'Microsoft 365 Bussiness Basic',
        },
        {
            key: '3',
            Name: 'Sunil K',
            Username : 'sunil@nxtdiv.com',
            Licenses: 'Microsoft 365 Bussiness Basic',
          },
          {
            key: '4',
            Name: 'Swapna Swapna',
            Username : 'swapna@nxtdiv.com',
            Licenses: 'Unlicensed',
          },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
        },
        {
          title: 'Username',
          dataIndex: 'Username',
          key: 'Username',
        },
        {
          title: 'Licenses',
          dataIndex: 'Licenses',
          key: 'Licenses',
        },
      ];
    return (
        <div className="AppContent">
        <h5 style={{color:"blue",margin:0,padding:0}}>NxtDiv</h5>
        <Typography.Title level={1}>
        Good Afternoon, Swapna Swapna
        </Typography.Title>
        <Button icon={<PlusOutlined />} type="primary"size="large">Add user</Button>&nbsp;&nbsp;&nbsp;
        <Button icon={<KeyOutlined />} size="large">Reset password</Button>
        <Typography.Title level={3}>
        For organizations like yours
        </Typography.Title>
        <Space direction="horizontal">
            <Card style={{borderLeft:"2px solid blue",borderRadius:0}}>
            <Space direction="horizontal">
            <FileTextOutlined size="large" style={{fontSize:50,color:"blue"}}/>
            <Typography.Title level={4} style={{margin:0}}>
            Help coustomers schedule <br/>appointments with you<br/>
            <span style={{fontSize:12 ,color:"#474644"}}>Setup a calender with your bussiness hours </span>
            </Typography.Title>
            </Space>
            </Card>
            <Card style={{borderLeft:"2px solid navy",borderRadius:0}}>
            <Space direction="horizontal">
            <TeamOutlined size="large" style={{fontSize:50,color:"blue"}}/>
            <Typography.Title level={4} style={{margin:0}}>
            Sharing training info about <br/>Microsoft teams<br/>
            <span style={{fontSize:12 ,color:"#474644"}}>Help everyone learn to use teams</span>
            </Typography.Title>
            </Space>
            </Card>
            <Card style={{borderLeft:"2px solid blue",borderRadius:0}}>
            <Space direction="horizontal">
            <AntCloudOutlined size="large" style={{fontSize:50,color:"blue"}}/>
            <Typography.Title level={4} style={{margin:0}}>
            Migrate emails and files to <br/>Microsoft 365<br/>
            <span style={{fontSize:12 ,color:"#474644"}}>Move content from Gmail and Yahoo</span>
            </Typography.Title>
            </Space>
            </Card>
        </Space>
        <Typography.Title level={3}>
        Your organization
        </Typography.Title>
        <Button icon={<UserOutlined />} type="text"size="large" style={{borderBottom:"2px solid blue",borderRadius:0}}shape="rectangle">Users </Button>
        <Button icon={<TeamOutlined />} type="text"size="large">Teams</Button>
        <Button icon={<CreditCardOutlined />} type="text"size="large">Subscription</Button>
        <Button icon={<BookOutlined />} type="text"size="large">Learn</Button>
        <Button icon={<FormOutlined />} type="text"size="large">Set up</Button><br/>
        <Typography.Title level={5} style={{color:"#464644"}}>
        Manage who can access apps and services included in your Microsoft 365 Subscriptions.<br/>
        Add or remove users, manage licenses and reset passwords.
        </Typography.Title>
        <hr/>
        
        <Button icon={<PlusOutlined style={{color:"blue"}}/>} type="text"size="large">Add user</Button>&nbsp;&nbsp;&nbsp;
        <Button icon={<KeyOutlined style={{color:"blue"}}/>} size="large"type="text">Reset password</Button>
        <Table columns={columns} dataSource={dataSource} onSelect={showDrawer} onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {showDrawer(record.Name,record.Username)},}}} style={{
              cursor: "pointer"}}/>

        <Drawer  placement="right" onClose={onClose} open={open} width={600}>
        <Space>
        <Button type="primary" shape="circle" value="large"style={{fontSize:50,width:100,height:100}}>{bn}</Button>
        <Typography.Title level={1} style={{margin:0}}>
        {nm} <br/>
        <Button icon={<KeyOutlined style={{color:"blue"}}/>} type="text">Reset password</Button>
        <Button icon={<StopOutlined style={{color:"blue"}}/>} type="text">Block sign-in</Button>
        <Button icon={<UserDeleteOutlined style={{color:"blue"}}/>} type="text">Delete user</Button>
        </Typography.Title>
        </Space>
        <Space>
        <Typography.Title level={5}style={{color:"",borderBottom:"2px solid blue"}}>Account</Typography.Title>&nbsp;&nbsp;
        <Typography.Title level={5}>Licenses and Apps</Typography.Title>
        </Space>
        <br/>
        <Space>
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Username and email</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>{unm}</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage username and email</Typography.Title>
        </Space>&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Aliases</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>{al}.onmicrosoft.com</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage username and email</Typography.Title>
        </Space>
        </Space><br/><br/>
        <Space>
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Groups</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}></Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage groups</Typography.Title>
        </Space>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Roles</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>No administrator access</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage roles</Typography.Title>
        </Space>
        </Space><br/>
        <br/><Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Manager</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>None provided</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Add manager </Typography.Title>
        </Space><br/><br/>
        <Typography.Title level={5} style={{margin:0,padding:0}}>Contact information</Typography.Title>
        <Space>
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Display name</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>{nm}</Typography.Title>
        </Space>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>First name</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>{fn}</Typography.Title>
        </Space>
        </Space><br/><br/>
        <Space>
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Phone number</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage contact information</Typography.Title>
        </Space>&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Last name</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>{ln}</Typography.Title>
        </Space>
        </Space>
      </Drawer>
        </div>
    );
}
export default AppContent
