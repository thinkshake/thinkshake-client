/* @flow */

import React from "react";
// Components
import Image from '../common/Image';
import * as Icon from '../common/Icon';
import CommentForm from '../common/CommentForm';
// UI
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';
import { projectStyle as style } from '../styles/projectStyle';

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div style={m(style.base)}>
        <h1>プロジェクトタイトル</h1>
        <div style={m(style.userBox)}>
          <p>メンバー</p>
          {Icon.userAvator}
          {Icon.userAvator}
          {Icon.userAvator}
          <FlatButton secondary={true} label={'参加する'} />
        </div>
        <div>
          <Image alt="" src="images/sample.png" />
        </div>
        <div>
          <h3>ゴール</h3>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
        <Paper style={m(style.talk)}>
          <List>
            <ListItem secondaryText={'Aさん'} leftIcon={Icon.userIcon}>
              テキストテキストテキストテキスト
            </ListItem>
            <ListItem secondaryText={'Bさん'} leftIcon={Icon.userIcon}>
              テキストテキストテキストテキスト
            </ListItem>
            <ListItem secondaryText={'Cさん'} leftIcon={Icon.userIcon}>
              テキストテキストテキストテキスト
            </ListItem>
            <ListItem secondaryText={'Bさん'} leftIcon={Icon.userIcon}>
              テキストテキストテキストテキスト
            </ListItem>
          </List>
          <CommentForm />
        </Paper>
      </div>
    );
  }
}
