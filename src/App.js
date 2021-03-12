import { useState } from "react";
import CustomDateRange from "./components/CustomDateRange";

import "./App.css";

function App() {
  const [dateRange, setDateReage] = useState({
    startDate: null,
    endDate: null,
  });
  return (
    <div className="App">
      <CustomDateRange
        wrapperClass={""}
        wrapperStyles={{ margin: "100px auto 0" }}
        dateRange={dateRange}
        onChange={(newValue) => setDateReage({ ...newValue })}
      />
    </div>
  );
}

export default App;
