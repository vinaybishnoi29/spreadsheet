import React from 'react';
import Cell from './Cell';

const Row = (props) => {
  const cells = [];
  const r = props.row;
  for (let col = 0; col < props.column; col += 1) {
    cells.push(
      <Cell
        key={`${col}-${r}`}
        row={r}
        column={col}
        onChangedValue={props.handleChangedCell}
        updateCells={props.updateCells}
        value={props.rowData[col] || ''}
      />,
    )
  }
  return (
    <div>
      {cells}
    </div>
  )
}

export default Row;