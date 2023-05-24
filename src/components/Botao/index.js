import React from 'react';
import styles from './Botao.module.css'
import { Link } from 'react-router-dom';

function Botao({ text, className, url, onClick }) {
    return (
        <Link to={url} onClick={onClick} className={styles[className]}>{text}</Link>
    )
}

export default Botao;