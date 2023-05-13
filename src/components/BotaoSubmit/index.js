import styles from './BotaoSubmit.module.css';

import React from 'react'

function BotaoSubmit({type = "submit", content}) {
  return (
    <button type={type}className={styles.botaoSubmit} >{content}</button>
  )
}

export default BotaoSubmit;