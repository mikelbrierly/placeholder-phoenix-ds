import { Story, Meta } from '@storybook/html';
import { ButtonProps } from './button.interface';
import tpl from './button.twig';

export default {
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text', required: true },
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => {
  return tpl(args);
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  label: 'Button',
  size: 'medium',
};
