import styles from './BarraPesquisa.module.css';
import { FaSearch } from 'react-icons/fa';
import React from 'react'
import { Link } from 'react-router-dom';

function BarraPesquisa({ placeholder, onChange, value, onClick, onKeyDown, style}) {
    return (
        <div className={styles.container}>
            <input
                type="search"
                className={styles.search}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                onKeyDown={onKeyDown}
            />
            <Link to="produtos_buscados">
                <FaSearch className={styles.icon} onClick={onClick} style={style} />
            </Link>
        </div>
    )
}

export default BarraPesquisa; 