import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import '../stylesheets/Navigation.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends Component {
  state = {
    current: 'action-tracker',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
     <div >
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
        <Menu.Item key="home" >
        Home
        </Menu.Item>
        <Menu.Item key="action-planning">
        Acquisition Planning
        </Menu.Item>
        <Menu.Item key="action-tracker">
        Action Tracker
        </Menu.Item>
        <Menu.Item key="contacts">
        Contacts
        </Menu.Item>
        <Menu.Item key="program-accounts">
        Program Accounts
        </Menu.Item>
        <Menu.Item key="market-research">
        Market Research
        </Menu.Item>
        <Menu.Item key="files">
        Files
        </Menu.Item>
        <Menu.Item key="conversation">
        Conversations
        </Menu.Item>
        <Menu.Item key="training">
        Training
        </Menu.Item>

      </Menu>
      <br/>
     </div>
    );
  }
}
export default Navigation;
