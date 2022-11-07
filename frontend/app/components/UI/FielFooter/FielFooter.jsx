import cn from 'classnames'
import { forwardRef } from 'react';
import styles from './FielFooter.module.scss'

const FielFooter = forwardRef( ({className,placeholder,type ='text',error,...rest},ref) => {
    return (
        <div>
        <input ref={ref} type={type}  name='name' className={cn([styles.input],[className])} placeholder={placeholder} {...rest}/>
        {error && <div className={styles.error}>{error.message}</div> }
        </div>
        
    );
});

export default FielFooter;