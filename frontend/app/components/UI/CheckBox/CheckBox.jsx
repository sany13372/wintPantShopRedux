import React from 'react';


const CheckBox = ({type,name,title,id,foress,value,check,click,change}) => {

    return (
<div className="decoration-left decoration-checkbox2 mb-6 titles" onClick={click}>
<label  htmlFor={foress}  className="decoration-checkbox__label">{title}</label>  
    <input id={id}  type={type} onChange={change} value={value} name={name} className="decoration-checkbox__input" checked={check} />
</div>
    );
};

export default CheckBox;