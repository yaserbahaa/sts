import React, { useState } from 'react';
import { MenuItems2 } from './Menuitems2';
import '../css/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked2' : 'dropdown-menu'}
      >
        {MenuItems2.map((item, index) => {
          return (
            <li key={index}>
              <Link
                target="_blank"
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown2;