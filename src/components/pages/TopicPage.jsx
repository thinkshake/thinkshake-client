import React from "react";
// Components
import Image from '../common/Image';
import * as Icon from '../common/Icon';
import ProjectCard from '../common/ProjectCard';
import CommentForm from '../common/CommentForm';
// UI
import {List, ListItem} from 'material-ui/List';
// styles
import { mergeStyle as m } from '../styles/mergeStyle';

export default class TopicPage extends React.Component {
  render() {
    return (
      <div>
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
          <ListItem>
            <ProjectCard />
          </ListItem>
          <ListItem secondaryText={'Bさん'} leftIcon={Icon.userIcon}>
            テキストテキストテキストテキスト
          </ListItem>
        </List>
        <CommentForm />
      </div>
    );
  }
}
