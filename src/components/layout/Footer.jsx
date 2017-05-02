import React from "react";
// UI
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// Components
import * as Icon from '../common/Icon';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';
import { footerStyle as style } from '../styles/footerStyle';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <Paper style={m(style.bottomNav)}>
        <div style={m(style.navContent)}>{Icon.searchIcon}</div>
        <div style={m(style.navContent)}>{Icon.homeIcon}</div>
        <div style={m(style.navContent)} onTouchTap={this.handleToggle}>{Icon.menuIcon}</div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </Paper>
    );
  }
}

export default Footer;
