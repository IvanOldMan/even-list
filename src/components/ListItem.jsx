import React, { useEffect, useState } from 'react';

const ListItem = ({ item, isActive }) => {
  const [active, setActive] = useState(isActive);

  useEffect(() => {
    setActive(isActive);
  }, [isActive])

  const handleOnClick = () => {
    setActive(!active);
  };

  const activeColor = item % 2 === 0 ? 'red' : 'blue'

  const color = active ? activeColor : 'transparent';

  return (
    <li
      id={item}
      onClick={handleOnClick}
      style={{
        border: "1px solid tomato",
        listStyle: "none",
        cursor: "pointer",
        backgroundColor: color,
      }}
    >
      <h1>{item}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </li>
  );
};

export default ListItem;