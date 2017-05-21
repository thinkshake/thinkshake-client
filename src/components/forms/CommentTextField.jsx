import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import EmotionIcon from 'material-ui/svg-icons/editor/insert-emoticon';
import style from './commentTextFieldStyle';
import PropTypes from 'prop-types'

class CommentTextField extends React.Component {
  static propTypes = {
    onEnterKey: PropTypes.func
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
          id="text-field-comment"
          hintText="Comment"
          fullWidth={true}
          multiLine={true}
          onKeyPress={this._onKeyPress}
          style={{ padding: '0 -50px 0 0' }}
          inputStyle={{ padding: '0 -50px 0 0' }}
          textareaStyle={{ padding: '0 -50px 0 0' }}
        />
        <IconButton style={style.IconButton}><EmotionIcon /></IconButton>
      </div>
    );
  }
}

export default CommentTextField;
