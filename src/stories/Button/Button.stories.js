import React from 'react';

import { Button } from "./Button";

export default {
  title: "Form/MyButton",
  component: Button
}

const Template = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  label: "Submit",
  fontColor: "primary"
}





