import React from 'react';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

import  * as Icon  from '../common/Icon';
import style from './commentTextFieldStyle';

class CommentTextField extends React.Component {
  static propTypes = {
    addComment: PropTypes.func,
    onEnterKey: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  // _onKeyPress = (event) => {
  //   if (event.charCode === 13) {
  //     event.preventDefault();
  //     if (this.props.onEnterKey) this.props.onEnterKey(event);
  //   }
  // };

  addComment = () => {
    this.props.addComment(this.state.comment);
    this.setState({
      comment: '',
    });
  }

  changeComment = (event) => {
    event.preventDefault();
    this.setState({
      comment: event.target.value,
    });
  }

  render() {
    // gridをつかった形に変更する
    return (
      <div>
        <TextField
          id="text-field-comment"
          hintText="Comment"
          fullWidth={true}
          multiLine={true}
          style={style.textField}
          onChange={this.changeComment}
          value={this.state.comment}
        />
        <IconButton style={style.IconButton}>{Icon.emotion}</IconButton>
        <IconButton style={style.IconButton} onTouchTap={this.addComment}>{Icon.send}</IconButton>
      </div>
    );
  }
}

export default CommentTextField;
