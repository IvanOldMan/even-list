import {useCallback, useContext, useState, memo } from 'react';
import { ActionsContext } from '../context/ContextProvider.jsx';

const Input = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { setFilteredState } = useContext(ActionsContext);

  const handleChange = useCallback((event) => {
    setIsDisabled(true);
    const value = event.target.value;
    const timer = setTimeout(() => {
      setFilteredState((item) => item.toString().includes(value));
      setIsDisabled(false);
      clearTimeout(timer);
    }, 3_000);
  }, []);

  return (
    <input
      name="input"
      type="number"
      onChange={handleChange}
      disabled={isDisabled}
    />
  );
};

export default memo(Input);