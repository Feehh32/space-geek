import styles from './BarraPesquisa.module.css';
import { FaSearch } from 'react-icons/fa';
import React from 'react'

function BarraPesquisa({ placeholder }) {
    return (
        <div className={styles.container}>
            <input type="text" className={styles.search} placeholder={placeholder} />
            <FaSearch className={styles.icon} />
        </div>
    )
}

export default BarraPesquisa;