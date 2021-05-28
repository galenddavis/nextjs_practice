/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
import styles from './layout.module.css';
// import PropTypes from 'prop-types';

// export default function Layout({children}) {
//   return <div className={styles.container}>{children}</div>;
// }

// OR

const Layout = ({children}) => {
  return <div className={styles.container}>
    {children}
  </div>;
};

// Below is necessary for props validation re: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
// Without it, the children props above will show an eslinter error

// Layout.propTypes = {
//   children: PropTypes.string.isRequire,
// };

export default Layout;
