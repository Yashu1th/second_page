// import logo from './logo.svg';
import AppHeader from './Components/AppHeader';
import './App.css';
import AppContent from './Components/AppContent';
import AppContent2 from './Components/AppContent2';
import AppContent3 from './Components/AppContent3';
import SideMenu from './Components/sideMenu';
import AppLeft from './Components/AppLeft';
import AppRight from './Components/AppRight';
import {Space,Card} from "antd";
import AppTop from './Components/AppTop';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import { ApartmentOutlined,CaretDownOutlined} from '@ant-design/icons';

function App() {

  return (
    
    <div className="App" >
    <BrowserRouter>
    <AppHeader/>
    <Routes>
    <Route path='/two' element={<AppContent3/>}/>
    <Route path='/three' element={<Card bordered={false}bodyStyle={{padding:0}}>
    <AppTop/>
    <Space>
        <AppLeft/>
        <AppContent/>
        <AppRight/>
        </Space>
        </Card>}/>
        <Route path='/' element={<Space>
          <SideMenu/>
          <AppContent2/>
          </Space>
        }/>
        </Routes>
    </BrowserRouter>
      
      <br/>
      
    </div>
  );
}

export default App;
