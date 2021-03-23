import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { InputContainer } from ".";
import { IInputContainer } from "models";

export default {
  title: "Example/InputContainer",
  component: InputContainer
} as Meta;

const Template: Story<IInputContainer> = args => <InputContainer {...args} />;

export const InputContainerWithData = Template.bind({});
InputContainerWithData.args = {
  data: {
    id: 1,
    value: "This is an input container with data"
  },
  onSubmit: async () => {
    alert("Item updated");
    return true;
  }
};

export const InputContainerWithoutData = Template.bind({});
InputContainerWithoutData.args = {
  onSubmit: async () => {
    alert("Item added");
    return true;
  }
};
