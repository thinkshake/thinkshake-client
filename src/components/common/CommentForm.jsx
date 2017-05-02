// Package
import React from 'react';
// Styles
import { commentFormStyle as style } from '../styles/commentFormStyle';
import { mergeStyle as m } from '../styles/mergeStyle';

const CommentForm = () => <div>
  <div style={m(style.formBox)}>
    コメントフォーム
  </div>
</div>;

export default CommentForm;
