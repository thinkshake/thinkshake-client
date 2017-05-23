/* @flow */

import React from "react";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";
import Divider from 'material-ui/Divider';

import DrawerButton from "../common/DrawerButton";
import ProfileCard from "../common/ProfileCard";
import Logo from "../common/Logo";
import * as Icon from "../common/Icon";
import SearchTextField from "../forms/SearchTextField";
import { headerStyle as style } from './headerStyle';

class Header extends React.Component {
  render() {
    return (
      <Toolbar style={style.nav}>
        <ToolbarGroup firstChild={true}>
          <Logo style={style.logo} />
          <SearchTextField style={style.search}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton>{Icon.notifications}</IconButton>
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
