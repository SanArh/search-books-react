import React from 'react';
import style from './App.module.css';
import ContainerBooksBlock from './components/BooksBlock/ContainerBooksBlock';
import ContainerForm from './components/Form/ContainerForm';
import {
  Routes,
  Route
} from "react-router-dom";
import ContainerBookPage from './components/BookPage/ContainerBookPage';
import Error from './components/Error/Error';

function App({error}) {
  return (
    <div className={style.App}>
      {error && <Error error={error} />}
      <header className={style.header}>
        <h1 className={style.title}>Search for the books</h1>
        <ContainerForm />
      </header>
      <Routes>
        <Route path="/" element={<div className={style.search}>search...</div>} />
        <Route path="/books/:bookId" element={<ContainerBookPage />} />
        <Route path="/books" element={<ContainerBooksBlock />} />
      </Routes>

    </div>
  );
}



export default App;
