import { useDispatch } from 'react-redux/es/exports';
import React, { useRef } from 'react';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);

  return (
    <form className="forms">
      <input ref={title} type="text" name="author" placeholder="Author" required />
      <input ref={author} type="text" name="book" placeholder="Book" required />
      <button type="button" onClick={() => dispatch(addBook(title.current.value, author.current.value, uniqid()))}>Add</button>
    </form>
  );
};

export default Form;
