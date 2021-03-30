import React, { FC, useState } from "react";
import Board from "./Board";

import { createMatrix, toggleElement } from "@/utils/booleanMatrixUtils";

interface Props {
    rows: number;
    cols: number;
}

const BoardContainer: FC<Props> = ({ rows, cols }) => {
    const [highlights, setHighlights] = useState<boolean[][]>(createMatrix(rows, cols, false));

    const toggle = (rowIndex: number, colIndex: number) => {
        setHighlights(toggleElement(highlights, rowIndex, colIndex));
    };

    return <Board highlights={highlights} cellClicked={toggle} />;
};

export default BoardContainer;
