import React from "react";
import style from './BtnToTop.module.css';

const BtnToTop = ({ scroll }) => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            {scroll > 300 && <button onClick={handleClick} className={style.btn}>наверх</button>}
        </>
    )
};

export default BtnToTop;