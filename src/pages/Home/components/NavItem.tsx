import React, { FC } from 'react';
import { INavItem } from '../interfaces/INavItem';
import styles from '../sass/NavItem.module.scss';

const NavItem: FC<INavItem> = ({ isActive, image }) => (
  <div className={styles.container}>
    {isActive && <div className={styles.activeLine} />}
    <img className={`${styles.image} ${isActive ? styles.activeImage : ''}`} src={image} alt="icon" />
  </div>
);

export default NavItem;
