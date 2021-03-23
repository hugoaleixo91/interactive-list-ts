import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { List } from ".";
import { IList } from "models";

export default {
  title: "Example/List",
  component: List
} as Meta;

const Template: Story<IList> = args => <List {...args} />;

export const EmptyList = Template.bind({});
EmptyList.args = {
  list: [],
  readOnly: false,
  editListItem: async () => true,
  removeListItem: () => alert("Item deleted")
};

export const ThreeItemsList = Template.bind({});
ThreeItemsList.args = {
  list: [
    { id: 1, value: "List item 1" },
    { id: 2, value: "List item 2" },
    { id: 3, value: "List item 3" }
  ],
  readOnly: false,
  editListItem: async () => {
    alert("Item updated");
    return true;
  },
  removeListItem: () => alert("Item deleted")
};
