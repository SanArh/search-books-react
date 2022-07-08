import React, { useEffect } from "react";
import Form from "./Form";
import { getBooks } from "../../redux/reducer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const ContainerForm = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        window.addEventListener('beforeunload', navigate('/'));
        return () => {
            window.removeEventListener('beforeunload', navigate('/'))
        }
    }, [])
    return (
        <>
            <Form input={props.input}
                category={props.category}
                sortingValue={props.sortingValue}
                getBooks={props.getBooks} />
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        input: state.input,
        category: state.category,
        sortingValue: state.sortingValue,
        isFetching: state.isFetching,
        startIndex: state.startIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (searchingText, category, orderBy, startIndex) => dispatch(getBooks(searchingText, category, orderBy, startIndex))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerForm);