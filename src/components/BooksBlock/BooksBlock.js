import React from "react";
import Preloader from "../common/Preloader";
import Book from "./Book/Book";
import style from "./BooksBlock.module.css";

const BooksBlock = (props) => {
    return (
        <div className={style.books_block}>
            <div>
                {props.totalItems
                    ? `Found ${props.totalItems} results`
                    : `no books found, try again`}
            </div>
            <div className={style.book_container}>
                {props.books && props.books.map((book, id) => {
                    return <Book key={book.id + id}
                        bookId={book.id}
                        volumeInfo={book.volumeInfo}
                        isFetching={props.isFetching} />
                })}
            </div>
            <div>
                {props.countItemsToDisplay > 0 && <button className={style.btn}
                        onClick={props.handleClick}
                        disabled={props.isBtnDisabled}>Load more</button>}
            </div>
            {props.isFetchingMoreBooks && <Preloader />}
        </div>
    )
};

export default BooksBlock;