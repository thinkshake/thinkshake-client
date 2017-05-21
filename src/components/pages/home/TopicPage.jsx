/* @flow */

import React from "react";
// import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List';
// import Subheader from 'material-ui/Subheader';
import ProjectCard from '../../common/ProjectCard';
import CommentCard from '../../common/CommentCard';
// import Paper from 'material-ui/Paper';
// import CommentTextField from '../../forms/CommentTextField';

class TopicPage extends React.Component {
  // static propTypes = {
  //   title: PropTypes.string,
  //   theme: PropTypes.string.require
  // };

  constructor(props: Object) {
    super(props);

    // TODO: トピックの種類によって内容変化
    // this.props.theme
  }

  render() {
    // TODO: key 指定する
    const comments = [
      <CommentCard key={'uniqueid'} fullname={'A'} username={'username'} comment={'comment'} photo={'./avator.png'}/>,
      <CommentCard key={'uniqueid2'} fullname={'A'} username={'username'} comment={'create project'} photo={'./avator.png'}>
        <ProjectCard title={'project title'} subtitle={'project subtitle'}
                     description={'project description'}
                     photo={'./photo'}/>
      </CommentCard>
    ];

    // TODO: List => GridList にしたほうがよい
    return (
      <List>
        {comments}
      </List>
    );
  }
}

export default TopicPage;
