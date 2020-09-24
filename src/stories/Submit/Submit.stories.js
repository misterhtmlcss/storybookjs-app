import React from 'react';

import Submit from './Submit'
import Input from '../Input/Input'
import Button from '../MyButton/Button'



export default {
  title: "Form/Submit",
}

const Template = args => <Submit {...args} />

export const Default = Template.bind({})

Default.args = {
  ...Input.args,
  ...Button.args
}


