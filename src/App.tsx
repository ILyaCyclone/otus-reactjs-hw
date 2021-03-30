import React from "react";

import BoardContainer from "./components/Board/BoardContainer";

interface Props {
  rows: number;
  cols: number;
}

const App: React.FC<Props> = ({ rows, cols }) => {
  return (
    <>
      <h1>Board</h1>
      <p>
        size: {rows}x{cols}
      </p>
      <p>Click cells to toggle their values</p>

      <BoardContainer rows={rows} cols={cols} />
    </>
  );
};

export default App;
