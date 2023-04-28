import React, { FC } from 'react';
import { IInput } from './interfaces/IInput';
import styles from './sass/Input.module.scss';

const Input: FC<IInput> = ({
  name, value, customClass, placeholder, iconRight, iconLeft, onChange,
}) => (
  <label className={`${styles.label} ${customClass || ''}`} htmlFor={name}>
    {iconLeft && <img className={styles.iconLeft} src={iconLeft} alt="icon" />}
    <input
      className={styles.input}
      id={name}
      name={name}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    {iconRight && <img src={iconRight} alt="icon" />}
  </label>
);

export default Input;
