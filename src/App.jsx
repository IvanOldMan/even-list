import ContextProvider from "./components/context/ContextProvider.jsx";
import Form from "./components/ui/Form/Form.jsx";
import List from "./components/List/List.jsx";
import useMediaQuery from "./hooks/useMediaQuery.js";
import './App.css'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function App() {

  const mediaQuery = useMediaQuery();

  return (
    <ContextProvider initList={data}>
      <div className={mediaQuery}>
        <Form style={mediaQuery}/>
        <List />
      </div>
    </ContextProvider>
  );
}
