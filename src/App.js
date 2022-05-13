import {useEffect, useState} from 'react'
import BookCard from "./Components/Card/Card";

function App() {
  const [data, setData] = useState([]);
  const url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`;
  useEffect(() => {
    fetch(url)
      .then((responce) => responce.json())
      .then((books) => setData(books.results.lists));
  }, []);
  return (
    <div className="App">
      <BookCard />
      {data &&
        data.map((bookList, index) => {
          return (
            <div key={index}>
              <h2>{bookList.display_name}</h2>
              {bookList.books.map((book) => {
                return (
                  <div>
                    <img src={book.book_image} />
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default App;