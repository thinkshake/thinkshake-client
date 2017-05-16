/* @flow */

import { baseStyle } from './baseStyle';

export const mergeStyle = (...args: any): Object => {
  const res = {};
  Object.assign(res, baseStyle);
  args.forEach((arg) => {
    if (arg) Object.assign(res, arg);
  });

  return res;
};
