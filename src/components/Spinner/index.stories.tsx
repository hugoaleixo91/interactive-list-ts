import { Story, Meta } from "@storybook/react/types-6-0";
import { Spinner } from ".";

export default {
  title: "Example/Spinner",
  component: Spinner
} as Meta;

const Template: Story = args => <Spinner {...args} />;

export const Default = Template.bind({});
