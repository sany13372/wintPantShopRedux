import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames'
const Button = ({text,className,click}) => {
    return (
        <button  onClick={click}  className={cn([styles.button],[`text-white bg-black hover:bg-gray-300 hover:text-black ${className}`])}>
            {text}
        </button>
    );
};

export default Button;