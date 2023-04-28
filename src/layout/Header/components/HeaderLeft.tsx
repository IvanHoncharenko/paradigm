import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../../assets/images/headerLogo.jpg';
import styles from '../sass/HeaderLeft.module.scss';

const HeaderLeft = () => {
  const { t } = useTranslation('', { keyPrefix: 'header' });

  return (
    <div className={styles.headerLeft}>
      <img src={Logo} alt="logo" />
      <div className={styles.verticalLine} />
      <p className={styles.headerLeftText}>{t('contacts')}</p>
    </div>
  );
};

export default HeaderLeft;
