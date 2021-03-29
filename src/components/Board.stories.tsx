import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Board from "./Board";

export default {
    title: "Board/Board",
    component: Board,
    argTypes: {
        cellClicked: { action: "cell clicked" }
    }
} as Meta;

const Template: Story<ComponentProps<typeof Board>> = (args) => <Board {...args} />;

export const PartiallyFilled = Template.bind({});
PartiallyFilled.args = {
    highlights: [
        [true, false],
        [false, true]
    ]
};

export const Empty = Template.bind({});
Empty.args = {
    highlights: [
        [false, false],
        [false, false]
    ]
};

export const Filled = Template.bind({});
Filled.args = {
    highlights: [
        [true, true],
        [true, true]
    ]
};
