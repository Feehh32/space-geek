import { Link } from 'react-router-dom';
import styles from './ListaRodapeItem.module.css';

import React from 'react'

function ListaRodapeItem({texto, url}) {
  return <li><Link to={url} className={styles.listaItem}>{texto}</Link></li>
          
}

export default ListaRodapeItem;