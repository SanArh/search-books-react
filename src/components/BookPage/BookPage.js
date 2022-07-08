import React from "react";
import style from './BookPage.module.css';
import cover from '../../assets/noCover.jpeg';
import SeparateAuthors from "../helpers/SeparateAuthors";

const BookPage = ({ bookInfo }) => {
    return (
        <div className={style.book_page}>
            <div className={style.img_wrapper}>
                <img src={bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : cover}
                    alt='cover' className={style.img} />
            </div>
            <div className={style.info}>
                <div className={style.categories}>
                    {bookInfo.categories ? bookInfo.categories : null}
                </div>
                <div className={style.title}>
                    {bookInfo.title}
                </div>
                {bookInfo.authors && <SeparateAuthors
                    className={style.authors}
                    authors={bookInfo.authors} />}
                {bookInfo.description
                    ? <div className={style.description}
                        dangerouslySetInnerHTML={{ __html: bookInfo.description }} />
                    : <div className={style.description}>No description</div>}

            </div>
        </div>
    )
};

export default BookPage;