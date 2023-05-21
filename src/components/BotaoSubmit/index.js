import styles from './BotaoSubmit.module.css';

import React from 'react'

function BotaoSubmit({type = "submit", content, style, onClick}) {
  return (
    <button type={type}className={styles.botaoSubmit} style={style} onClick={onClick}>{content}</button>
  )
}

export default BotaoSubmit;