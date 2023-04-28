import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button/Button';
import { IUserBlock } from '../interfaces/IUserBlock';
import styles from '../sass/UserBlock.module.scss';

import ArrowIcon from '../../../assets/icons/arrowLeft.svg';
import GoogleIcon from '../../../assets/icons/google.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import UserPlaceholder from '../../../assets/images/userPlaceholder.png';

const UserBlock: FC<IUserBlock> = ({ name, photo, lastActivity }) => {
  const { t } = useTranslation('', { keyPrefix: 'home' });

  return (
    <div className={styles.userInfoContainer}>
      <Button iconLeft={ArrowIcon} customClass={styles.backButton} text={t('backToLeads')} />
      <img className={styles.photo} src={photo || UserPlaceholder} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <Button customClass={styles.googleButton} iconLeft={GoogleIcon} text={t('google')} />
      <div className={styles.userButtonContainer}>
        <Button customClass={styles.userButton} text={t('log')} iconLeft={PlusIcon} />
        <Button customClass={styles.userButton} text={t('email')} iconLeft={PlusIcon} />
        <Button customClass={styles.userButton} text={t('call')} iconLeft={PlusIcon} />
        <Button customClass={styles.userButton} text={t('more')} iconLeft={PlusIcon} />
      </div>
      <Button customClass={styles.contactButton} text={t('convertToContact')} />
      <div className={styles.lastActivity}>
        <div className={styles.greenDot} />
        <p>{`${t('lastActivity')}: ${lastActivity}`}</p>
      </div>
    </div>
  );
};

export default UserBlock;
