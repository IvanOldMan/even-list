import React, {useContext} from 'react';
import ListItem from "../ListItem.jsx";
import { DataContext } from "../context/ContextProvider.jsx";
import './List.css'

const List = () => {
  const { list, isActionList } = useContext(DataContext);

  return (
    <ul >
      {list.map((item) => (
        <ListItem
          key={item}
          item={item}
          isActive={isActionList}
        />
      ))}
    </ul>
  );
};

export default List;