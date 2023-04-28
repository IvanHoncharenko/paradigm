import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../components/Input/Input';
import IconButton from '../../../components/IconButton/IconButton';
import UserInfo from './UserInfo';
import styles from '../sass/HeaderRight.module.scss';

import UserPlaceholder from '../../../assets/images/userPlaceholder.png';
import SearchIcon from '../../../assets/icons/search.svg';
import CalendarIcon from '../../../assets/icons/calendar.svg';
import BellIcon from '../../../assets/icons/bell.svg';
import DialogueIcon from '../../../assets/icons/dialogue.svg';
import PlusIcon from '../../../assets/icons/plus.svg';

const HeaderRight = () => {
  const { t } = useTranslation('', { keyPrefix: 'header' });

  return (
    <div className={styles.headerRight}>
      <Input
        customClass={styles.customInput}
        name="search"
        value=""
        placeholder={t('searchPlaceholder')}
        iconLeft={SearchIcon}
        onChange={() => {}}
      />
      <IconButton customClass={styles.plusButton} image={PlusIcon} />
      <div className={styles.verticalLine} />
      <div className={styles.iconButtonContainer}>
        <IconButton image={DialogueIcon} />
        <IconButton customClass={styles.middleIconButton} image={BellIcon} />
        <IconButton image={CalendarIcon} />
      </div>
      <div className={styles.verticalLine} />
      <UserInfo photo={UserPlaceholder} name="John Kuy" description="CEO, Superadmin" />
    </div>
  );
};

export default HeaderRight;
