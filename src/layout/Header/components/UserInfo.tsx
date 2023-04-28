import React, { FC } from 'react';
import { IUserInfo } from '../interfaces/IUserInfo';
import styles from '../sass/UserInfo.module.scss';

const UserInfo: FC<IUserInfo> = ({ photo, name, description }) => (
  <div className={styles.userInfoContainer}>
    <img className={styles.photo} src={photo} alt={name} />
    <div className={styles.textContainer}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default UserInfo;
