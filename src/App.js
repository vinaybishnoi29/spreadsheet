import React from 'react';
import Table from './components/Table';

const App = () =>
  (<div style={{ width: 'max-content' }}>
    <Table columns={26} rows={50} id={'1'} saveToLocalStorage={false}/>
    {/* Set saveToLocalStorage as true if you want to retain data even if you refresh the page
    and false if u need blank spreadsheet after each refresh of page */}
  </div>);

export default App;