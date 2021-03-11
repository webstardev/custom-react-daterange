import logo from "./logo.svg";
import "./App.css";

import CustomDateRange from "./components/CustomDateRange";

function App() {
  return (
    <div className="App">
      <CustomDateRange styles={{ margin: "100px auto 0" }} />
    </div>
  );
}

export default App;
