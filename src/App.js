import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstMain from "./Components/FirstMain";
import SceneContainer from "./Components/FloatingIsland/SceneContainer";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <Routes>
        {/** 처음 메인 화면 */}
        <Route path="/" element={<FirstMain />} />
        {/** FloatingIsland */}
        <Route path="/flot" element={<SceneContainer />} />
      </Routes>
    </div>
  );
}

export default App;
