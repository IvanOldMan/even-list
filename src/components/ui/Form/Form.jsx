import {useCallback, useContext, memo } from 'react';
import { ActionsContext } from '../../context/ContextProvider.jsx';
import Button from "../Button.jsx";
import Input from "../Input.jsx";
import './Form.css'

const Form = ({ style }) => {
  const { setFilteredState, setDefaultState } = useContext(ActionsContext);

  const handleEven = useCallback(() => {
    setFilteredState((item) => item % 2 === 0)
  }, []);

  const handleOdd = useCallback((event) => {
    setFilteredState((item) => item % 2 !== 0)
  }, []);

  const handleClear = useCallback((event) => {
    event.target.form.reset();
    setDefaultState();
  }, [])

  const Cl = style === 'desktop' ? 'desktop-form' : null;

  return (
    <div>
      <form className={Cl}>
        <Button
          name="EVEN"
          onClick={handleEven}
        />
        <Button
          name="ODD"
          onClick={handleOdd}
        />
        <Button
          name="CLEAR"
          onClick={handleClear}
        />
        <Input/>
      </form>
    </div>

  );
};

export default memo(Form);