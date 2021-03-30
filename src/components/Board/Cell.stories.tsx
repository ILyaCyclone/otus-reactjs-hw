import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Cell from "./Cell";

export default {
  title: "Board/Cell",
  component: Cell,
  argTypes: {
    cellClicked: { action: "cell clicked" }
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    )
  ]
} as Meta;

const Template: Story<ComponentProps<typeof Cell>> = (args) => (
  <Cell {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  highlighted: false,
  rowIndex: 0,
  colIndex: 0
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  highlighted: true,
  rowIndex: 0,
  colIndex: 0
};
