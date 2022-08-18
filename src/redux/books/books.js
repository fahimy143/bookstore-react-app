import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const ADD_BOOK = 'bookstore-react-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react-app/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookstore-react-app/books/LOAD_BOOKS';

const appId = '6QokoJSAh5dHBW2fXVma';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const loadBooksThunk = createAsyncThunk(LOAD_BOOKS, async () => {
  const response = await axios.get(`${baseUrl}/${appId}/books/`).catch((err) => {
    console.log('Error', err);
  });
  const res = response.data;
  const spreadData = Object.keys(res).map((key) => ({
    id: key,
    ...res[key][0],
  }));
  return spreadData;
});

export const addBookThunk = createAsyncThunk(ADD_BOOK, async (
  { title, author, category },
  thunkAPI,
) => {
  const book = {
    item_id: uniqid(),
    title,
    author,
    category,
  };

  await axios.post(`${baseUrl}/${appId}/books`, book)
    .then(() => thunkAPI.dispatch(loadBooksThunk()))
    .catch((err) => { console.log('Error', err); });

  const books = thunkAPI.getState().booksList;
  return books;
});

export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, async (id, thunkAPI) => {
  await axios.delete(`${baseUrl}/${appId}/books/${id}`)
    .then(() => thunkAPI.dispatch(loadBooksThunk()))
    .catch((err) => { console.log('Error', err); });
  const books = thunkAPI.getState().booksList;
  return books;
});

const storeSlice = createSlice({
  name: 'bookstore-react-app/books',
  initialState: [],
  extraReducers: {
    [loadBooksThunk.fulfilled]: (state, action) => action.payload,
    [addBookThunk.fulfilled]: (state, action) => action.payload,
    [removeBookThunk.fulfilled]: (state, action) => action.payload,
  },
});
export const booksList = (state) => state.bookList;
export default storeSlice.reducer;
