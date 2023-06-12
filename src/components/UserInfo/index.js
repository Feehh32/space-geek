import React, { useContext } from 'react'
import styles from './UserInfo.module.css'
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'
import { AuthContext } from 'contextos/AuthContext'
import { useNavigate } from 'react-router-dom'

function UserInfo({ emailUser }) {
    const { fazerLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    }

    const logOut = () => {
        fazerLogout();
        navigate('/login');
    }

    return (
        <div className={styles.container}>
            <div>
                <i><FaUserCircle className={styles.iconUser} onClick={openMenu} /></i>
                <p>{emailUser}</p>
            </div>
            <ul style={open ? { height: '65px' } : { height: '0' }} className={styles.containerMenu}>
                <li className={styles.menuItem}>Editar perfil</li>
                <li className={styles.menuItem} onClick={logOut}>Sair</li>
            </ul>
        </div>
    )
}

export default UserInfo;