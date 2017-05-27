/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class DrawerButton extends React.Component {
  static propTypes = {
    children: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <IconButton
          onTouchTap={this.handleToggle}><MoreVertIcon /></IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          openSecondary={true}
          onRequestChange={(open) => this.setState({ open })}
        >
          { this.props.children }
        </Drawer>
      </div>
    );
  }
}

export default DrawerButton;