/* @flow */

import React from "react";
// import { hashHistory } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types'

export default class ProjectCard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string.isRequired,
    // showDetails: PropTypes.boolean
  };
  static defaultProps = {
    showDetails: false
  };

  // TODO: タブに移動
  // handleTouchTap() {
  // hashHistory.push('/project')
  // }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          avatar={this.props.photo} // FIXME:  // TODO: デフォルト <Avatar style={m(style.userAvator)} icon={<SocialPerson />} />?
        />
        <CardTitle title={this.props.description}/>
      </Card>
    );
  }
}

{/*<Card>*/}
  {/*<CardHeader*/}
    {/*title="プロジェクト名"*/}
    {/*subtitle="トピック名"*/}
    {/*// actAsExpander={true}*/}
    {/*// showExpandableButton={true}*/}
    {/*// avatar={Icon.userAvator}*/}
    {/*avatar={"a"}*/}
  {/*/>*/}
  {/*/!*<CardMedia>*!/*/}
  {/*/!*<Image alt='logo' src="images/sample.png"/>*!/*/}
  {/*/!*</CardMedia>*!/*/}
  {/*<CardTitle title="プロジェクトの更新記事"/>*/}
  {/*/!*<CardText expandable={true}>*!/*/}
  {/*/!*テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト*!/*/}
  {/*/!*</CardText>*!/*/}
{/*</Card>*/}
