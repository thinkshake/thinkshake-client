/* @flow */

// Package
import React from 'react';
// Styles
import { iconStyle as style } from '../styles/iconStyle';
import { mergeStyle as m } from '../styles/mergeStyle';
// UI
// import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
// import SentimentSatisfied from 'material-ui/svg-icons/social/sentiment-satisfied';
// import SentimentDissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Home from 'material-ui/svg-icons/action/home';
import Search from 'material-ui/svg-icons/action/search';
import SocialPerson from 'material-ui/svg-icons/social/person';
// import QuestionAnswer from 'material-ui/svg-icons/action/question-answer';

// export const agreeIcon = <SentimentSatisfied />;
// export const disagreeIcon = <SentimentDissatisfied />;
// export const userIcon = <FontIcon className="icon-user" />;
// export const addIcon = <FontIcon className="icon-pencil" />;
// export const editIcon = <FontIcon className="icon-pencil" />;
// export const homeIcon = <FontIcon className="icon-home" />;
// export const mypageIcon = <FontIcon className="icon-user" />;
// export const noticeIcon = <FontIcon className="icon-bell" />;
// export const followIcon = <FontIcon className="icon-star" />;
// export const settingIcon = <FontIcon className="icon-gear" />;
// export const logoutIcon = <FontIcon className="icon-exit" />;
// export const searchIcon = <FontIcon className="icon-search" color={style.topicsIcon.color} />;
// export const questionIcon = <FontIcon className="icon-question" />;
// export const talkIcon = <FontIcon className="icon-bubbles" />;
// export const answerIcon = <FontIcon className="icon-hack" />;

export const menuIcon = <Menu />;
export const homeIcon = <Home />;
export const searchIcon = <Search />;
export const userIcon = <SocialPerson />;
export const userAvator = <Avatar style={m(style.userAvator)} icon={<SocialPerson />} />
