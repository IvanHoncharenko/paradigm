import React, { FC } from 'react';
import { IIconButton } from './interfaces/IIconButton';
import styles from './sass/IconButton.module.scss';

const IconButton: FC<IIconButton> = ({ image, customClass }) => (
  <button type="button" className={`${styles.button} ${customClass || ''}`}>
    <img src={image} alt="button" />
  </button>
);

export default IconButton;
