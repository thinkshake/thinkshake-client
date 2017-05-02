import { baseStyle } from './baseStyle';

export const mergeStyle = (...args) => {
  const res = {};
  Object.assign(res, baseStyle);
  for (var i = 0; i < args.length; i++) {
    if (args[i]) Object.assign(res, args[i]);
  }

  return res;
};
