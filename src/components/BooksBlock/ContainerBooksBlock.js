import React from "react";
import { connect } from "react-redux/es/exports";
import Preloader from "../common/Preloader";
import BooksBlock from "./BooksBlock"
import { getMoreBooks } from "../../redux/reducer";

const ContainerBooksBlock = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        let index = props.startIndex + 30;
        props.getMoreBooks(index);
    };
    if(props.isFetching ) return <Preloader />
    return (
        <BooksBlock handleClick={handleClick}
            books={props.books}
            isFetching={props.isFetching}
            isFetchingMoreBooks={props.isFetchingMoreBooks}
            totalItems={props.totalItems}
            startIndex={props.startIndex}
            isBtnDisabled={props.isBtnDisabled}
            countItemsToDisplay={props.countItemsToDisplay} />
    )
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        totalItems: state.totalItems,
        isFetching: state.isFetching,
        isFetchingMoreBooks: state.isFetchingMoreBooks,
        input: state.input,
        category: state.category,
        sortingValue: state.sortingValue,
        startIndex: state.startIndex,
        isBtnDisabled: state.isBtnDisabled,
        countItemsToDisplay: state.countItemsToDisplay
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMoreBooks: (startIndex) => dispatch(getMoreBooks(startIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerBooksBlock);