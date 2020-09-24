import React from 'react';

import Input from './Input'

export default {
  title: "Form/Input",
  component: Input
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  todo: {
    id: "1",
    text: "Some text for the todo you need to do",
    done: "INCOMPLETE",
    createdBy: Date.now(),
  },
  fontColor: 'incomplete',
  // placeholder: `${this.fontColor} is the right color`,
}

export const Done = Template.bind({})

Done.args = {
  todo: {
    ...Default.args.todo,
    done: "DONE",
    updatedBy: Date.now(),
  },
  fontColor: 'done',
  // placeholder: `${this.fontColor} is the right color`,
}

Done.storyName = "State: Done"

