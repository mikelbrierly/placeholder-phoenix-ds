import { Story, Meta } from '@storybook/html';
import { ButtonProps } from './button.interface';
import { Button } from './button';

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

// 'any' added for in progress debugging, otherwise compilation fails
const Template: any = (args: ButtonProps) => {
  // const Template: Story<ButtonProps> = (args: ButtonProps) => {
  const buttonCmp = Button;
  return buttonCmp(args);
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  label: 'Click me!',
  size: 'small',
};
