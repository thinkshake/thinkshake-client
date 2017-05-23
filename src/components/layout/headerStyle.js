/* @flow */

import { baseStyle } from '../styles/baseStyle';

export const headerStyle = {
  nav: {
    backgroundColor: baseStyle.palette.canvasColor,
  },
  navContent: {
    marginTop: '15px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexGrow: 1,
  },
  logo: {
    margin: '0 20px 0 20px',
    width: '50px',
    '@media (max-width:500px)': {
      display: 'none',
    },
  },
  search: {
    width: '170px',
    // '@media (max-width:500px)': {
    //   width: '170px',
    // },
  },
};
