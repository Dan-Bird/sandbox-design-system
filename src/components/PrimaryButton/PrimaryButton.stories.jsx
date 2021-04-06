import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Buttons/Primary Button',
  component: PrimaryButton,
  args: {
    children: 'Button',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = args => <PrimaryButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  argOne: true,
};
Primary.storyName = 'Primary Button';
