/* @flow */

import React from "react";
import { hashHistory } from 'react-router';
// Components
import Image from '../common/Image';
import * as Icon from '../common/Icon';
// UI
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';
import { projectCardStyle as style } from '../styles/projectCardStyle';

export default class ProjectCard extends React.Component {

  handleTouchTap() {
    hashHistory.push('/project')
  }

  render() {
    return (
      <div style={m(style.base)}>
        <Card>
          <CardHeader
            title="プロジェクト名"
            subtitle="トピック名"
            actAsExpander={true}
            showExpandableButton={true}
            avatar={Icon.userAvator}
          />
          <CardMedia>
            <Image alt="" src="images/sample.png" />
          </CardMedia>
          <CardTitle title="プロジェクトの更新記事" />
          <CardActions>
            <FlatButton secondary={true} label="ページに移動" onTouchTap={()=>this.handleTouchTap()}/>
          </CardActions>
          <CardText expandable={true}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </CardText>
        </Card>
      </div>
    );
  }
}
