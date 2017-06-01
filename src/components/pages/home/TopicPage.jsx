/* @flow */

import React from "react";
import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List';
// import Subheader from 'material-ui/Subheader';
import ProjectCard from '../../common/ProjectCard';
import CommentCard from '../../common/CommentCard';
// import Paper from 'material-ui/Paper';
// import CommentTextField from '../../forms/CommentTextField';

class TopicPage extends React.Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    // title: PropTypes.string,
    // theme: PropTypes.string.require,
    loadComments: PropTypes.func,
  };

  constructor(props: Object) {
    super(props);

    // TODO: トピックの種類によって内容変化
    // this.props.theme
  }

  // TODO: topicIdをURIから取得して返す
  componentWillMount() {
    console.log('hello');    
    this.props.loadComments('topicId');
  }

  // TODO: イマイチな実装なのでリファクタリングする。
  //       forを使いたくない。プロパティではなく型で分岐させたい。
  renderComments: Object[] = (comments: Object[]) => {
    const commentList: Object[] = [];
    for(let i=0; i < comments.length; i++) {
        if(comments[i].hasChild) {
          commentList.push(
            <CommentCard
              key={comments[i].id}
              fullName={comments[i].fullName}
              userName={comments[i].userName}
              comment={comments[i].comment}
              image={comments[i].image}
            >
              <ProjectCard
                key={comments[i+1].id}
                title={comments[i+1].title}
                topic={comments[i+1].topic}
                description={comments[i+1].description}
                image={comments[i+1].image}
              />
            </CommentCard>
          );
        } else if(comments[i].type==='comment') {
          commentList.push(
            <CommentCard
              key={comments[i].id}
              fullName={comments[i].fullName}
              userName={comments[i].userName}
              comment={comments[i].comment}
              image={comments[i].image}
            />
          );
        }
    }
    return commentList;
  }

  render() {
    // TODO: List => GridList にしたほうがよい
    return (
      <List>
        {this.renderComments(this.props.comments)}
      </List>
    );
  }
}

export default TopicPage;
