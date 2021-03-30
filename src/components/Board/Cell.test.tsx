import "jsdom-global/register";
import React from "react";
import { shallow } from "enzyme";

import Cell from "./Cell";

describe("<Cell />", () => {
  let mockCellClicked: jest.Mock;
  beforeEach(() => {
    mockCellClicked = jest.fn();
  });

  it("<Cell /> click calls cellClicked with rowIndex, colIndex", () => {
    const wrapper = shallow(
      <Cell
        highlighted={false}
        rowIndex={2}
        colIndex={3}
        cellClicked={mockCellClicked}
      />
    );

    wrapper.simulate("click");

    expect(mockCellClicked).toHaveBeenCalledWith(2, 3);
  });

  it("<Cell highlighted />", () => {
    const wrapper = shallow(
      <Cell
        highlighted={true}
        rowIndex={0}
        colIndex={0}
        cellClicked={mockCellClicked}
      />
    );

    expect(wrapper.text()).toEqual("🤞");
  });

  it("<Cell highlighted={false} />", () => {
    const wrapper = shallow(
      <Cell
        highlighted={false}
        rowIndex={0}
        colIndex={0}
        cellClicked={mockCellClicked}
      />
    );

    expect(wrapper.text()).toEqual("👌");
  });
});
