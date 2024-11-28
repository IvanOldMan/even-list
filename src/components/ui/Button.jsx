import React, { memo } from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button
      name={name}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default memo(Button);