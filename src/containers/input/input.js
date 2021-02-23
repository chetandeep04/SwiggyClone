import React from 'react';
import styles from './style.module.css';
export default function Input(props)
{
    return <input
    className={styles.input} 
    placeholder={props.placeholder}/>
}
Input.defaultProps={
    placeholder:"Enter Some Text"
}