import React from 'react';
import RedTitle from './RedTitle';

export default {
  title: 'Headings/RedTitle',
  component: RedTitle,
};

const Template = args => <RedTitle {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  argOne: true,
};

export const SecondStory = Template.bind({});

SecondStory.args = {
  argTwo: true,
};
