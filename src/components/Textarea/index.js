import { forwardRef } from 'react';
import styles from './Textarea.module.css';

function Textarea({ id, placeholder, onChange, value, name }, ref) {
    return (
        <textarea
            ref={ref}
            id={id}
            className={styles.textarea}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
        />
    )
}

export default forwardRef(Textarea);

