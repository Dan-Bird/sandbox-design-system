import React from 'react';
import styles from './styles.module.css';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export { default as GlobalStyle } from './globalStyles';
export { default as RedTitle } from './components/RedTitle/RedTitle';
export { default as PrimaryButton } from './components/PrimaryButton/PrimaryButton';

import './design-system';
