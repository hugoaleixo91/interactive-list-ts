import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Header } from ".";
import { IHeader } from "models";

export default {
  title: "Example/Header",
  component: Header
} as Meta;

const Template: Story<IHeader> = args => <Header {...args} />;

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  title: "Header title - Read only",
  readOnly: true
};

export const Editable = Template.bind({});
Editable.args = {
  title: "Header title - Edit mode",
  readOnly: false
};
