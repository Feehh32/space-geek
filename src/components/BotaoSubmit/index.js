import styles from './BotaoSubmit.module.css';

import React from 'react'

function BotaoSubmit({type = "submit", content, style}) {
  return (
    <button type={type}className={styles.botaoSubmit} style={style} >{content}</button>
  )
}

export default BotaoSubmit;