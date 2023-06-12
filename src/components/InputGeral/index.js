import styles from './InputGeral.module.css';
import { forwardRef } from 'react';

function InputGeral({ type, id, placeholder, labelContent, htmlFor, heigth, name, value, onChange}, ref) {
    return (
        <div className={styles.inputContainer}>
            <input
                ref={ref}
                type={type}
                className={styles.InputGeral}
                id={id}
                placeholder={placeholder}
                style={{ height: `${heigth}px` }}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={htmlFor} className={styles.labelName}  >{labelContent}</label>
        </div>
    )
}

export default forwardRef(InputGeral);