import { Card,Button } from 'antd';
import {UnorderedListOutlined,FileOutlined, CopyOutlined, SnippetsOutlined, DiffOutlined} from '@ant-design/icons';
// import React from 'react';

function AppLeft(){
    return (
        <div classname="AppLeft" bodyStyle={{margin:0}}>
            <Card bodyStyle={{margin:0,padding:10,borderRight:"1px solid",borderRadius:0,width:180}}>
            <Button type="text"icon={<UnorderedListOutlined style={{fontSize:25}}/>}></Button>
            <Button type="text"icon={<FileOutlined style={{fontSize:25,borderRadius:0,borderBottom:"2px solid blue"}}/>}></Button>
            <hr style={{margin:0,padding:0}}/><br/>
            <div >
            <Button shape="round" icon={<CopyOutlined />} style={{width:150,}}>getAccountCo..</Button>
            <br/><br/>
            <Button shape="round" icon={<CopyOutlined />} style={{width:150,}}>CreateCensusid</Button>
            <br/><br/>
            <Button shape="round" icon={<CopyOutlined />} style={{width:150,backgroundColor:"#f1f3f1"}}>CreateCensus</Button>
            <br/><br/>
            <Button shape="round" icon={<CopyOutlined />} style={{width:150,}}>setCensusid </Button>
            <br/><br/>
            <Button shape="" style={{width:150,height:80}}>UploadandReview</Button>
            <br/><br/>
            <Button shape="round" icon={<SnippetsOutlined />}style={{width:150,}}>ClearErrorList</Button>
            <br/><br/>
            <Button shape="round" icon={<DiffOutlined />}style={{width:150,}}>CheckCMError</Button>
            <br/><br/>
            <Button shape="" style={{width:150,height:80}}>CensusUploadError</Button>
            </div>
            </Card>
        </div>
    );
}

export default AppLeft;