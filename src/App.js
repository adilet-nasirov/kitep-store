import './App.css';
import {useEffect, useState} from 'react'
import axios from "axios";

function App() {
  const [data, setData]= useState([]);
  let books;
  useEffect(()=>{
    fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=ATMGznzln6NgNyiBjEZkSAunDr2Odh8P')
          .then(req=> req.json())
          .then(res=> {
            // console.log(res.results.lists)
            setData(res.results.lists)
          })
          .catch(err=> console.log(err))
  },[])
  console.log(data)
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
