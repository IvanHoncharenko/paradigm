import React, { FC } from 'react';
import { IButton } from './interfaces/IButton';
import styles from './Button.module.scss';

const Button: FC<IButton> = ({
  customClass, iconLeft, iconRight, text,
}) => (
  <button className={`${styles.button} ${customClass || ''}`} type="button">
    {iconLeft && <img className={styles.iconLeft} src={iconLeft} alt="icon" />}
    <span>{text}</span>
    {iconRight && <img src={iconRight} alt="icon" />}
  </button>
);

export default Button;
