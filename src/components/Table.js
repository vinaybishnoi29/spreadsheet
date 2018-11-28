import React,{Component} from 'react';
import Row from './Row';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props)
    this.tableIdentifier = `tableData-${props.id}`
    this.state = {
      data: {},
    }
  }

  componentWillMount() {
    if (this.props.saveToLocalStorage &&
        window &&
        window.localStorage) {
      const data = window.localStorage.getItem(this.tableIdentifier)
      if (data) {
        this.setState({ data: JSON.parse(data) })
      }
    }
  }

//   handleChangedCell = ({ x, y }, value) => {
//     const modifiedData = Object.assign({}, this.state.data)
//     if (!modifiedData[y]) modifiedData[y] = {}
//     modifiedData[y][x] = value
//     this.setState({ data: modifiedData })
//   }

  handleChangedCell = ({ x, y }, value) => {
    const modifiedData = Object.assign({}, this.state.data)
    if (!modifiedData[y]) modifiedData[y] = {}
    modifiedData[y][x] = value
    this.setState({ data: modifiedData })
  
    /*This code is for retaining cell data in local storage that can displayed 
    *even after refreshing the screen
    */
    if (window && window.localStorage) {
      window.localStorage.setItem(this.tableIdentifier,
        JSON.stringify(modifiedData))
    }
  }

  updateCells = () => {
    this.forceUpdate()
  }

  render() {
    const rows = []

    for (let row = 0; row < this.props.rows + 1; row += 1) {
      const rowData = this.state.data[row] || {}
      rows.push(
        <Row
          handleChangedCell={this.handleChangedCell}
          updateCells={this.updateCells}
          key={row}
          row={row}
          column={this.props.columns + 1}
          rowData={rowData}
        />,
      )
    }
    return (
      <div id="grid" className="grid">
        {rows}
      </div>
    )
  }
}

export default Table;

//The grid class has been added to support the fixing of first column in spreadsheet
//however this is not working as expected