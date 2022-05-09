import {useEffect, useState} from 'react'
import axios from "axios";
import ApiCall from './Data/ApiCall';

function App() {
  const [data, setData]=useState([])
  
  return (
    <div className="App">
      <ApiCall setData={setData}/>
    </div>
  );
}

export default App;
