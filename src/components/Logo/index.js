import React from 'react';
import { Link } from 'react-router-dom';
import { GiRingedPlanet } from "react-icons/gi"
import styles from './Logo.module.css'

function Logo() {
    return (
            <Link to="/" className={styles.logo}>
                <GiRingedPlanet color="var(--azul)" className={styles.icon} />
                <p className={styles.logoName}><span>Space</span>Geek</p>
            </Link>
    )
}

export default Logo;