import axios from "axios";
import { useEffect, useState } from "react";
const ApiCall = ({setData}) => {
    const url=`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`;
    useEffect(()=>{
        const fetchBooks = async()=>{
            const res =await axios.get(url);
            setData(res.data.results.lists)
        }
        fetchBooks();
    },[])
}

export default ApiCall