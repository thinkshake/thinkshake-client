/* @flow */

import React from "react";
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper';

import CommentTextField from '../forms/CommentTextField';
import style from './footerStyle';

class Footer extends React.Component {
  static propTypes = {
    onCommentEnterKey: PropTypes.func.isRequired,
    addComment: PropTypes.func,
  };

  render() {
    return (
      <div>
        {/* TODO: 表示する必要がある画面のみ表示する */}
        <Paper style={style}>
          <CommentTextField onEnterKey={this.props.onCommentEnterKey} addComment={this.props.addComment} />
        </Paper>
      </div>
    );
  }
}

export default Footer;
