import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

let store = createStore(reducer, applyMiddleware(thunk));
window.store = store;

export default store;
// import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import { findBook, searchBooks } from '../api/api';
// import thunk from 'redux-thunk';

// const ADD_BOOKS = 'ADD_BOOKS';
// const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
// const SET_COUNT_ITEMS_TO_DISPLAY = 'SET_COUNT_ITEMS_TO_DISPLAY';
// const SET_BOOK = 'SET_BOOK';
// const SET_FETCHING = 'SET_FETCHING';
// const SET_FETCHING_MORE_BOOKS = 'SET_FETCHING_MORE_BOOKS';
// const SET_START_INDEX = 'SET_START_INDEX';
// const ADD_MORE_BOOKS = 'ADD_MORE_BOOKS';
// const SET_SEARCHING_DATA = 'SET_SEARCHING_DATA';
// const CHANGE_BTN_DISABLE = 'CHANGE_BTN_DISABLE';
// const SET_ERROR = 'SET_ERROR';

// const initialState = {
//     books: [],
//     book: null,
//     input: '',
//     totalItems: null,
//     countItemsToDisplay: null,
//     category: 'all',
//     sortingValue: 'relevance',
//     isFetching: false,
//     isFetchingMoreBooks: false,
//     startIndex: 0,
//     isBtnDisabled: false,
//     error: null
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_BOOKS: return {
//             ...state,
//             books: action.books
//         };
//         case ADD_MORE_BOOKS: return {
//             ...state,
//             books: [...state.books, ...action.books]
//         };
//         case SET_TOTAL_COUNT: return {
//             ...state,
//             totalItems: action.count
//         }
//         case SET_COUNT_ITEMS_TO_DISPLAY: return {
//             ...state,
//             countItemsToDisplay: action.count
//         }
//         case SET_SEARCHING_DATA: return {
//             ...state,
//             input: action.data.searchingText,
//             category: action.data.category,
//             sortingValue: action.data.orderBy
//         }
//         case SET_BOOK: return {
//             ...state,
//             book: action.bookInfo
//         }
//         case SET_FETCHING: return {
//             ...state,
//             isFetching: action.value
//         }
//         case SET_FETCHING_MORE_BOOKS: return {
//             ...state,
//             isFetchingMoreBooks: action.value
//         }
//         case SET_START_INDEX: return {
//             ...state,
//             startIndex: action.index
//         }
//         case CHANGE_BTN_DISABLE: return {
//             ...state,
//             isBtnDisabled: action.value
//         }
//         case SET_ERROR: return {
//             ...state,
//             error: action.error
//         }
//         default: return state;
//     }
// };

// let store = createStore(reducer, applyMiddleware(thunk));
// window.store = store;

// // - // - // - // action creators

// export const setBooks = (books) => {
//     return {
//         type: ADD_BOOKS,
//         books
//     };
// };

// export const setMoreBooks = (books) => {
//     return {
//         type: ADD_MORE_BOOKS,
//         books
//     };
// };

// export const setTotalCount = (count) => {
//     return {
//         type: SET_TOTAL_COUNT,
//         count
//     };
// };
// export const setCountItemsToDisplay = (count) => {
//     return {
//         type: SET_COUNT_ITEMS_TO_DISPLAY,
//         count
//     };
// };

// const setBtnDisable = (value) => {
//     return {
//         type: CHANGE_BTN_DISABLE,
//         value
//     };
// };

// export const setSearchingData = (data) => {
//     return {
//         type: SET_SEARCHING_DATA,
//         data
//     };
// };

// const setBook = (bookInfo) => {
//     return {
//         type: SET_BOOK,
//         bookInfo
//     };
// };

// const setFetching = (value) => {
//     return {
//         type: SET_FETCHING,
//         value
//     };
// };
// const setFetchingMoreBooks = (value) => {
//     return {
//         type: SET_FETCHING_MORE_BOOKS,
//         value
//     };
// };

// export const setStartIndex = (index) => {
//     return {
//         type: SET_START_INDEX,
//         index
//     };
// };

// const setError = (error) => {
//     return {
//         type: SET_ERROR,
//         error
//     };
// };

// // - // - // - // thunks

// const handleError = (error) => {
//     return (dispatch) => {
//         dispatch(setError(error));
//         setTimeout(() => dispatch(setError(null)), 3000);
//     }
// };

// export const getBooks = (searchingText, category, orderBy, startIndex = 0) => {
//     return async (dispatch) => {
//         dispatch(setFetching(true));
//         try{
//             let response  = await searchBooks(searchingText, category, orderBy, startIndex);
//             let data = {
//                 searchingText,
//                 category,
//                 orderBy
//             };
//             dispatch(setSearchingData(data));
//             dispatch(setBooks(response.data.items));
//             dispatch(setTotalCount(response.data.totalItems));
//             dispatch(setStartIndex(startIndex));
//             dispatch(setCountItemsToDisplay(response.data.totalItems - 30));
//             dispatch(setFetching(false));
//         }
//         catch(err) {
//             dispatch(setFetching(false));
//             dispatch(handleError(err.message));
//         };
//     };
// };
// export const getMoreBooks = (startIndex) => {
//     return async (dispatch, getState) => {
//         let { input, category, sortingValue, countItemsToDisplay } = getState();
//         dispatch(setFetchingMoreBooks(true));
//         dispatch(setBtnDisable(true));
//         try{
//             let response = await searchBooks(input, category, sortingValue, startIndex);
//             dispatch(setMoreBooks(response.data.items));
//             dispatch(setStartIndex(startIndex));
//             dispatch(setCountItemsToDisplay(countItemsToDisplay - 30));
//             dispatch(setFetchingMoreBooks(false));
//             dispatch(setBtnDisable(false));
//         }
//         catch(err) {
//             dispatch(setFetchingMoreBooks(false));
//             dispatch(handleError(err.message));
//         };
//     };
// };

// export const getBook = (bookId) => {
//     return async (dispatch) => {
//         dispatch(setFetching(true));
//         try{
//             let response = await findBook(bookId);
//             dispatch(setBook(response.data));
//             dispatch(setFetching(false));
//         }
//         catch(err) {
//             dispatch(setFetching(false));
//             dispatch(handleError(err.message));
//         };
//     };
// };



// export default store;