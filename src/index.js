import React from 'react';
import styles from './styles.module.css';
// import './design-system';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export { default as GlobalStyle } from './globalStyles';
export { default as RedTitle } from './components/RedTitle/RedTitle';
export { default as PrimaryButton } from './components/PrimaryButton/PrimaryButton';
export * from './design-system';
