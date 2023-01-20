import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstMain from "./Components/FirstMain";
import SceneContainer from "./Components/FloatingIsland/SceneContainer";
import { Canvas } from "@react-three/fiber";
import React_three_fiber_tuto from "./Components/React_three_fiber_tuto";
import ShaderMain from "./Components/orbit_shader/ShaderMain";

function App() {
  return (
    <div className="App">
      <Routes>
        {/** 처음 메인 화면 */}
        <Route path="/" element={<FirstMain />} />
        {/** FloatingIsland */}
        <Route path="/flot" element={<SceneContainer />} />
        {/** fiber튜토리얼 */}
        <Route path="/tuto" element={<React_three_fiber_tuto />} />
        {/** 스크롤 및 쉐이더 */}
        <Route path="/shader" element={<ShaderMain />} />
      </Routes>
    </div>
  );
}

export default App;
