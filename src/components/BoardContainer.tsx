import React, { FC, useState } from "react";
import Board from "./Board";

interface Props {
    rowNumber: number;
    colNumber: number;
}

const random2DArray = (size1: number, size2: number) =>
    Array.from({ length: size1 }, () => Array.from({ length: size2 }, () => Math.random() < 0.5));

const false2DArray = (size1: number, size2: number) => Array.from({ length: size1 }, () => new Array(size2).fill(false));

const BoardContainer: FC<Props> = ({ rowNumber, colNumber }) => {
    const [highlights, setHighlights] = useState<boolean[][]>(false2DArray(rowNumber, colNumber));

    const flip = (y: number, x: number) => {
        const clone = highlights.slice(0);
        clone[y][x] = !clone[y][x];
        setHighlights(clone);
    };

    return <Board highlights={highlights} cellClicked={flip} />;
};

export default BoardContainer;
