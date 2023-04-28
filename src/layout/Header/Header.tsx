import React from 'react';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';
import styles from './sass/Header.module.scss';

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <HeaderLeft />
    <HeaderRight />
  </header>
);

export default Header;
