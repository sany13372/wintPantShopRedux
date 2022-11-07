import React from 'react';

const NavToggle = ({ nav }) => {
   return (
      <div className={nav ? 'menu__icon _active' : 'menu__icon'}>
         <span>
         </span>
      </div>
   )
};

export default NavToggle;