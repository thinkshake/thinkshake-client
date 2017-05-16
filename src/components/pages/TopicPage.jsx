/* @flow */

import React from "react";
// Components
import * as Icon from '../common/Icon';
import ProjectCard from '../common/ProjectCard';
import CommentForm from '../common/CommentForm';
// UI
import {List, ListItem} from 'material-ui/List';
// types
import type { Comment } from '../../redux/models/Comment';
import type { Project } from '../../redux/models/Project';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';

export default class TopicPage extends React.Component {

  renderList = (talkList: Array<Comment|Project>) => talkList.map( action => {
    switch (action.type) {
      case 'comment' :
        return <ListItem secondaryText={action.ownerName} disabled={true} leftIcon={Icon.userIcon} key={action.id}>
          {action.text}
        </ListItem>;

      case 'project' :
        return <ListItem disabled={true} key={action.id}>
          <ProjectCard
            key={action.id}
            name={action.name}
            topic={action.topic}
            title={action.title}
            text={action.text}
          />
        </ListItem>;
      
      default :
        return <div></div>;
    }
  })

  render() {
    return (
      <div>
        <List>
          {this.renderList(this.props.topic)}
        </List>
        <CommentForm />
      </div>
    );
  }
}
