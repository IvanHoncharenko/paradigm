import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../sass/InfoTabs.module.scss';

const InfoTabs = () => {
  const { t } = useTranslation('', { keyPrefix: 'home' });

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tab}>
          <p className={styles.tabHeading}>{t('leadsInfo')}</p>
          <div />
        </div>
        <div className={styles.tab}>
          <p className={`${styles.tabHeading} ${styles.tabHeadingActive}`}>{t('addressInfo')}</p>
          <div className={styles.activeLine} />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.infoHeading}>{t('street')}</p>
        <p className={styles.infoDescription}>7 W Jackson Blvd</p>
        <p className={styles.infoHeading}>{t('city')}</p>
        <p className={styles.infoDescription}>San Jose</p>
        <p className={styles.infoHeading}>{t('state')}</p>
        <p className={styles.infoDescription}>SA</p>
        <p className={styles.infoHeading}>{t('country')}</p>
        <p className={styles.infoDescription}>United States</p>
        <p className={styles.infoHeading}>{t('zipCode')}</p>
        <p className={styles.infoDescription}>95111</p>
      </div>
    </div>
  );
};

export default InfoTabs;
