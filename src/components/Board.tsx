import React, { FC, useState } from "react";
import Cell from "./Cell";

interface Props {
    highlights: boolean[][];
    cellClicked: (x: number, y: number) => void;
}

const Board: FC<Props> = ({ highlights, cellClicked }) => {
    return (
        <table style={{ borderCollapse: "collapse" }}>
            <tbody>
                {highlights.map((highlightRow, rowIndex) => (
                    <tr key={rowIndex}>
                        {highlights[rowIndex].map((highlighted, colIndex) => (
                            <Cell
                                key={colIndex}
                                highlighted={highlighted}
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                cellClicked={cellClicked}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Board;
