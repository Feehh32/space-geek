import React from 'react'
import styles from './InputGeral.module.css';

function InputGeral({type, id, value, onChange, placeholder, labelContent, htmlFor, heigth}) {
    return (
        <div className={styles.inputContainer}>
            <input
                type={type}
                className={styles.InputGeral}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{height:`${heigth}px`}}
            />
            <label htmlFor={htmlFor} className={styles.labelName} >{labelContent}</label>
        </div>
    )
}

export default InputGeral;