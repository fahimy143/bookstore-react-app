import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Progressbar from 'react-js-progressbar';
import { loadBooksThunk, removeBookThunk } from '../redux/books/books';
import './style/cards.css';

const Book = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);

  useEffect(() => {
    dispatch(loadBooksThunk());
  }, []);

  const handle = (e) => {
    dispatch(removeBookThunk(e.target.id));
  };
  return (bookList.map((book) => (
    <div key={book.id} className="card">
      <div className="title">
        <span className="action">{book.category}</span>
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <ul>
          <button type="button">Comments</button>
          <button type="button" id={book.id} onClick={handle}>Remove</button>
          <button type="button">Edit</button>
        </ul>
      </div>

      <div className="progress">
        <div className="progressbar">
          <Progressbar
            input={70}
            pathWidth={5}
            pathColor="#0290ff"
            trailWidth={5}
            trailColor="#e4e4e4"
            textStyle={{ fill: '#0290ff' }}
          />
        </div>
        <div className="completed">Completed</div>
      </div>
      <div className="chapter">
        <h4>CURRENT CHAPTER</h4>
        <h5>Chapter 17</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>

  )));
};

export default Book;
