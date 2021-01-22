import React from "react";
import {Link} from 'react-router-dom';
import styles from "../../css/Utilities/Button.module.css";

const Button = ({ input, url }) => {
    return (
        <Link to={url}>
            <button className={styles.button}>{input}</button>
        </Link>
    );
};

export default Button;