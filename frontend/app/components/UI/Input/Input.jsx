import React from 'react';
import cn from 'classnames'
import styles from './Input.module.scss'
import { forwardRef } from 'react';

const Field = forwardRef( ({className,placeholder,type ='text',error,...rest},ref) => {
    return (
        <div>
        <input ref={ref} type={type} name='name' className={cn([styles.input],[className])} placeholder={placeholder} {...rest}/>
        {error && <div className={styles.error}>{error.message}</div> }
        </div>
        
    );
});

export default Field;