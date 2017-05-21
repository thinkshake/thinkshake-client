/* @flow */

import React from "react";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import DrawerButton from "../common/DrawerButton";
import ProfileCard from "../common/ProfileCard";
import SearchTextField from "../forms/SearchTextField";
import Logo from "../common/Logo";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";
import { headerStyle as style } from './headerStyle';
import Divider from 'material-ui/Divider';

class Header extends React.Component {
  render() {
    return (
      <Toolbar style={style}>
        <ToolbarGroup firstChild={true}>
          <Logo/>
          <SearchTextField/>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton><NotificationsIcon /></IconButton>
          <DrawerButton>
            <ProfileCard fullname="f" username="u" photo="a"/>
            {/* TODO: 実行できない this.handleClose*/}
            <MenuItem onTouchTap={this.handleClose}>プロフィール</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>設定</MenuItem>
            <Divider />
            <MenuItem onTouchTap={this.handleClose}>ログアウト</MenuItem>
          </DrawerButton>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Header;
