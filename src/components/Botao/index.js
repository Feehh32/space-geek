import React from 'react';
import styles from './Botao.module.css'
import { Link } from 'react-router-dom';

function Botao({ text, className, url }) {
    return (
        <Link to={url}  className={styles[className]}>{text}</Link>
    )
}

export default Botao;