import React, {createContext, useCallback, useMemo} from 'react';

export const DataContext = createContext(null);
export const ActionsContext = createContext(null);

const ContextProvider = ({ children, initList }) => {
  const initialState = {list: initList, isActionList: false}
  const [state, setState] = React.useState(initialState);

  const setFilteredState = useCallback((cb) => {
    setState(() => ({
      list: initList.filter(cb),
      isActionList: true,
    }));
  }, [state]);

  const setDefaultState = useCallback(() => {
    setState(initialState);
  }, [state]);

  const data = useMemo(() => state, [state]);
  const actions = useMemo(() => ({ setFilteredState, setDefaultState }), []);

  return (
    <DataContext.Provider value={data}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </DataContext.Provider>
  );
};

export default ContextProvider;