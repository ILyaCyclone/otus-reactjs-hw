import React from "react";

import BoardContainer from "./components/BoardContainer";

interface Props {
    rowNumber: number,
    colNumber: number
}

const App: React.FC<Props> = ({ rowNumber, colNumber }) => {
    return (
        <>
            <h1>hi</h1>
            <span>rowNumber = {rowNumber}</span>
            <span>colNumber = {colNumber}</span>

            <BoardContainer rowNumber={rowNumber} colNumber={colNumber} />
        </>
    );
}

export default App;