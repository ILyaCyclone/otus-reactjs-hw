import React from "react";

interface Props {
  highlighted: boolean;
  rowIndex: number;
  colIndex: number;
  cellClicked: (row: number, col: number) => void;
}

const baseCellStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  border: "1px silver solid",
  textAlign: "center",
  cursor: "pointer"
};

const highlightedCellStyle: React.CSSProperties = {
  ...baseCellStyle,
  backgroundColor: "#eee"
};

const Cell: React.FC<Props> = ({
  highlighted,
  rowIndex,
  colIndex,
  cellClicked
}) => {
  return (
    <td
      onClick={() => cellClicked(rowIndex, colIndex)}
      style={highlighted ? highlightedCellStyle : baseCellStyle}
    >
      {highlighted ? "🤞" : "👌"}
    </td>
  );
};

export default Cell;
