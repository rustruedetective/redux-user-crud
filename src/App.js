import "./App.css";
import ReduxStore from "./data/ReduxStore";
import Manager from "./components/Manager";

function App() {
  return (
    <div className="App">
      <ReduxStore>
        <Manager />
      </ReduxStore>
    </div>
  );
}

export default App;
