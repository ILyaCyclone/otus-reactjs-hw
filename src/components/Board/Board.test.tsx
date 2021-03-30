import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";

import Board from "./Board";
import Cell from "./Cell";

describe("<Board />", () => {
    let mockCellClicked: jest.Mock;
    beforeEach(() => {
        mockCellClicked = jest.fn();
    });

    it("creates <Cell /> components with highlights", () => {
        const highlights = [
            [true, false],
            [false, true]
        ];
        const wrapper = shallow(<Board highlights={highlights} cellClicked={mockCellClicked} />);

        const actualHighlights = wrapper.find("tr").map((tr) => tr.find(Cell).map((cell) => cell.prop("highlighted")));

        expect(actualHighlights).toStrictEqual([
            [true, false],
            [false, true]
        ]);
    });

    it("passes rowIndex, colIndex to <Cell /> components", () => {
        const highlights = [
            [false, false],
            [false, false]
        ];
        const wrapper = shallow(<Board highlights={highlights} cellClicked={mockCellClicked} />);

        const actualIndexes = wrapper
            .find("tr")
            .map((tr, mapRowIndex) =>
                tr.find(Cell).map((cell, mapColIndex) => (({ rowIndex, colIndex }) => ({ rowIndex, colIndex }))(cell.props()))
            );

        expect(actualIndexes).toStrictEqual([
            [
                { rowIndex: 0, colIndex: 0 },
                { rowIndex: 0, colIndex: 1 }
            ],
            [
                { rowIndex: 1, colIndex: 0 },
                { rowIndex: 1, colIndex: 1 }
            ]
        ]);
    });

    it("<Cell /> click calls cellClicked", () => {
        const highlights = [[false]];
        const wrapper = mount(<Board highlights={highlights} cellClicked={mockCellClicked} />);

        wrapper.find(Cell).simulate("click");

        expect(mockCellClicked).toBeCalledTimes(1);
    });
});
