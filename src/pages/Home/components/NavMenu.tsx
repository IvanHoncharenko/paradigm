import React from 'react';
import NavItem from './NavItem';
import styles from '../sass/NavMenu.module.scss';

import SpeedometerIcon from '../../../assets/icons/speedometer.svg';

const NavMenu = () => (
  <div className={styles.container}>
    <NavItem image={SpeedometerIcon} />
    <NavItem isActive image={SpeedometerIcon} />
    <NavItem image={SpeedometerIcon} />
    <NavItem image={SpeedometerIcon} />
  </div>
);

export default NavMenu;
