import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ListItem } from ".";
import { IListItem } from "models";

export default {
  title: "Example/ListItem",
  component: ListItem
} as Meta;

const Template: Story<IListItem> = args => <ListItem {...args} />;

export const SubmitSuccess = Template.bind({});
SubmitSuccess.args = {
  data: {
    id: 1,
    value: "This is a list item that succeeds on update"
  },
  readOnly: false,
  onEdit: async () => true,
  onDelete: () => alert("Item deleted")
};

export const SubmitError = Template.bind({});
SubmitError.args = {
  data: {
    id: 1,
    value: "This is a list item that fails on update"
  },
  readOnly: false,
  onEdit: async () => false,
  onDelete: () => alert("Item deleted")
};
