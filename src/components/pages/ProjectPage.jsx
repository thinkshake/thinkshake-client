/* @flow */

import React from "react";
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';

import * as Icon from '../common/Icon';
import { projectStyle as style } from './projectStyle';

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div style={style.base}>
        <h1>プロジェクトタイトル</h1>
        <div style={style.userBox}>
          <p>メンバー</p>
          {Icon.userIcon}
          {Icon.userIcon}
          <FlatButton secondary={true} label={'参加する'} />
        </div>
        <div>
          <img alt="" src="images/sample.png" style={style.image}/>
        </div>
        <div>
          <h3>ゴール</h3>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
        <Paper style={style.talk}>
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
        </Paper>
      </div>
    );
  }
}
