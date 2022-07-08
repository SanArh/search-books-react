import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getBook } from "../../redux/reducer";
import Preloader from "../common/Preloader";
import BookPage from "./BookPage";

const ContainerBookPage = (props) => {
    const { bookId } = useParams();
    useEffect(() => {
        props.getBook(bookId);
    }, []);
    if (props.isFetching) {
        return (
            <Preloader />
        )
    };
    return (
        <div>
            {props.book && <BookPage bookInfo={props.book.volumeInfo} />}
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        book: state.book,
        isFetching: state.isFetching
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getBook: (id) => dispatch(getBook(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ContainerBookPage);