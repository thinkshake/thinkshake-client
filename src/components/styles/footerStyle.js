/* @flow */

import { palette } from '../styles/palette';

export const footerStyle = {
  bottomNav: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '50px',
    margin: '0 auto',
    backgroundColor: palette.primary3Color,
    display: 'flex',
    flexFlow: 'raw nowrap',
    justifyContent: 'center',
  },
  navContent: {
    marginTop: '15px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexGrow: 1,
  },
};
