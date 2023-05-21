import styles from './Textarea.module.css';
import React from 'react'

function Textarea({value, id, placeholder, onChange}) {
    return (
        <textarea
            id={id}
            value={value}
            className={styles.textarea}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Textarea;

