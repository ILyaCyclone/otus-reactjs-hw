import React from "react";

interface Props {
    highlighted: boolean;
    rowIndex: number;
    colIndex: number;
    cellClicked: (x: number, y: number) => void;
}

const baseCellStyle = {
    width: "40px",
    height: "40px",
    border: "1px silver solid",
    textAlign: "center"
};

const highlightedCellStyle = {
    ...baseCellStyle,
    background: "silver"
};

const Cell: React.FC<Props> = ({ highlighted, rowIndex, colIndex, cellClicked }) => {
    return (
        <td onClick={() => cellClicked(rowIndex, colIndex)} style={highlighted ? highlightedCellStyle : baseCellStyle}>
            {highlighted ? "🤞" : "👌"}
        </td>
    );
};

export default Cell;
