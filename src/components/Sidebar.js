import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './CSS/Sidebar.css'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

const { Header, Sider, Content } = Layout;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} className='#1'>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} className='#2'>
            <Link to='/dashboard'> Dashboard </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to='/courses'>My courses </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<MenuFoldOutlined />}>
            <Link to='/achievements'>Achievements</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
            <Link to='/Forum'>Forum </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<SettingOutlined />}>
            <Link to='/settings'>Settings</Link>
            </Menu.Item>

          </Menu>
        </Sider>
        
    );
  }
}

export default Sidebar;