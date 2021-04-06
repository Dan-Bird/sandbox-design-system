import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const BaseButton = ({ className, children, ...otherProps }) => {
  return (
    <Button className={className} {...otherProps}>
      {children}
    </Button>
  );
};

export default BaseButton;
