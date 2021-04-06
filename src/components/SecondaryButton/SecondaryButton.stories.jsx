import React from 'react';
import SecButton from './SecondaryButton';

export default {
  title: 'Buttons/Secondary Button',
  component: SecButton,
};

const Template = args => <SecButton {...args}>Some Text</SecButton>;

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  argOne: true,
  onClick: () => console.log('clicked'),
};
