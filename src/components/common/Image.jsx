// Package
import React from 'react';

const Image = props => {
  const {
    alt,
    ...otherProps,
  } = props;

  return (
    <img alt={alt} style={{width:'100%'}} {...otherProps} />
  );
};

export default Image;
