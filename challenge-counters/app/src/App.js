import { useReducer } from "react";
import "./App.css";
import FoodButton from "./components/FoodButton";
import { ACTIONS, initState, menuReducer } from "./reducer/reducer";

function App() {
  const [menu, dispatchMenu] = useReducer(menuReducer, initState);
  console.log(menu);

  function addOneItem(key) {
    console.log(key);
    dispatchMenu({ type: ACTIONS.ADD, key });
  }

  function resetMenu() {
    dispatchMenu({ type: ACTIONS.RESET });
  }

  return (
    <div className="App">
      <header className="App-header">
        {menu &&
          Object.entries(menu).map(([key]) => (
            <FoodButton
              key={key}
              text={key}
              result={menu[key]}
              onClick={() => addOneItem(key)}
            />
          ))}
        <FoodButton text="reset" onClick={resetMenu} />
      </header>
    </div>
  );
}

export default App;
