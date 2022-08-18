import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooksThunk, removeBookThunk } from '../redux/books/books';

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
        <span>Action</span>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.category}</p>
        <ul>
          <button type="button">Comments</button>
          <button type="button" id={book.id} onClick={handle}>Remove</button>
          <button type="button">Edit</button>
        </ul>
      </div>

      <div className="progress">
        <h4>80%</h4>
      </div>
      <div className="chapter">
        <h4>Current Chapter</h4>
        <h5>Chapter 10</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>

  )));
};

export default Book;
