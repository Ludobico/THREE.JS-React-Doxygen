import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstMain from "./Components/FirstMain";
import SceneContainer from "./Components/FloatingIsland/SceneContainer";
import { Canvas } from "@react-three/fiber";
import PostprocessingPro1 from "./Components/postprocessing/PostprocessingPro1";
import PostprocessingMain from "./Components/postprocessing/PostprocessingMain";

function App() {
  return (
    <div className="App">
      <Routes>
        {/** 처음 메인 화면 */}
        <Route path="/" element={<FirstMain />} />
        {/** FloatingIsland */}
        <Route path="/flot" element={<SceneContainer />} />
        {/** 포스트 프로세싱 */}
        <Route path="/post" element={<PostprocessingMain />} />
      </Routes>
    </div>
  );
}

export default App;
