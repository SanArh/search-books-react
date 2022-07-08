import React, { useState } from "react";
import style from './Form.module.css';
import SearchImage from '../../assets/img_search.png';
import { useNavigate } from "react-router";

const Form = (props) => {
    let navigate = useNavigate();

    const [input, setInput] = useState(props.input);
    const [category, setCategory] = useState(props.category);
    const [sortingValue, setSortingValue] = useState(props.sortingValue);

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };
    const onChangeSelectCategory = (e) => {
        setCategory(e.target.value);
    };
    const onChangeSelectSort = (e) => {
        setSortingValue(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (input) {
            props.getBooks(input, category, sortingValue);
            navigate('/books')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <div className={style.inputWrapper}>
                    <input className={style.input} type='search' value={input}
                        onChange={onChangeInput} />
                    <button className={style.form_btn}>
                        <img className={style.searchIcon} src={SearchImage} alt='search' />
                    </button>
                </div>
                <div className={style.selectors_wrapper}>
                    <div>
                        <span className={style.title}>Categories</span>
                        <select className={style.select} value={category}
                            onChange={onChangeSelectCategory}>
                            <option value='all'>all</option>
                            <option value='art'>art</option>
                            <option value='biography'>biography</option>
                            <option value='computers'>computers</option>
                            <option value='history'>history</option>
                            <option value='medical'>medical</option>
                            <option value='poetry'>poetry</option>
                        </select>
                    </div>
                    <div>
                        <span className={style.title}>Sorting by</span>
                        <select className={style.select} value={sortingValue}
                            onChange={onChangeSelectSort}>
                            <option value='relevance'>relevance </option>
                            <option value='newest'>newest</option>
                        </select>
                    </div>
                </div>
                {/* <div className={style.selectors_wrapper}>
                    <div>
                        <span className={style.title}>Categories</span>
                        <select className={style.select} value={props.category} 
                        onChange={props.onChangeSelectCategory}>
                            <option value='all'>all</option>
                            <option value='art'>art</option>
                            <option value='biography'>biography</option>
                            <option value='computers'>computers</option>
                            <option value='history'>history</option>
                            <option value='medical'>medical</option>
                            <option value='poetry'>poetry</option>
                        </select>
                    </div>
                    <div>
                        <span className={style.title}>Sorting by</span>
                        <select className={style.select} value={props.sortingValue} 
                        onChange={props.onChangeSelectSort}>
                            <option value='relevance'>relevance </option>
                            <option value='newest'>newest</option>
                        </select>
                    </div>
                </div> */}
            </form>
        </div>
    )
};

export default Form;