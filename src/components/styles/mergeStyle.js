/* @flow */

import { baseStyle } from './baseStyle';

export const mergeStyle = (...args: any) => {
  const res = {};
  Object.assign(res, baseStyle);
  args.forEach((arg) => {
    if (arg) Object.assign(res, arg);
  });

  return res;
};
