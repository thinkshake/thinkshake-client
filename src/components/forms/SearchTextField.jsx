import React from 'react';
import Radium from 'radium';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import PropTypes from 'prop-types'

@Radium
class SearchTextField extends React.Component {
  static propTypes = {
    onEnterKey: PropTypes.func,
    style: PropTypes.object
  };

  _onKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      if (this.props.onEnterKey) this.props.onEnterKey(event);
    }
  };

  render() {
    return (
      <div>
        {/* TODO: padding がうまく適用されない */}
        <TextField
          id="text-field-search"
          hintText="Search"
          onKeyPress={this._onKeyPress}
          style={this.props.style}
        />
        <IconButton><SearchIcon /></IconButton>
      </div>
    );
  }
}

export default SearchTextField;