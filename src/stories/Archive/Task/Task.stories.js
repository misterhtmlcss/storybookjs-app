import React from 'react'

import { Task } from './Task'

export default {
  title: "Task/Input",
  component:  Task,
}

const Template = args => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Default Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  }
}

export const Archived = Template.bind({})

Archived.args = {
  task: {
    ...Default.args.task,
    state: 'ARCHIVED_TASK'
  }
}

export const Pinned = Template.bind({})

Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'PINNED_TASK',
  }
}





