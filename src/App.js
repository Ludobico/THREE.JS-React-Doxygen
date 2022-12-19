import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstMain from "./Components/FirstMain";

function App() {
  return (
    <div className="App">
      <Routes>
        {/** 처음 메인 화면 */}
        <Route path="/" element={<FirstMain />} />
      </Routes>
    </div>
  );
}

export default App;
