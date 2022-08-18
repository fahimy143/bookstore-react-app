import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookThunk } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookThunk(state));
    setState({
      title: '',
      author: '',
      category: '',
    });
  };

  const handleChanges = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={handle}
        value={state.title}
        className="book"
        placeholder="Book Title"
      />
      <input
        type="text"
        name="author"
        onChange={handle}
        value={state.author}
        className="author"
        placeholder="Book Author"
      />
      <select value={state.category} name="category" onChange={handleChanges}>
        <option value="History">History</option>
        <option value="Romance">Romance</option>
        <option value="Mystery">Mystery</option>
        <option value="Science">Science</option>
        <option value="Technology">Technology</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
