import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstMain from "./Components/FirstMain";
import SceneContainer from "./Components/FloatingIsland/SceneContainer";
import { Canvas } from "@react-three/fiber";
import PostprocessingPro1 from "./Components/postprocessing/PostprocessingPro1";
import PostprocessingMain from "./Components/postprocessing/PostprocessingMain";
import ParticleMain from "./Components/Particles/ParticleMain";
import TridentMain from "./Components/TridentTest/TridentMain";
import TridentCanvas from "./Components/TridentTest/TridentCanvas";
import Runmain from "./Components/Runner/Runmain";
import DPmain from "./Components/DynamicPoint/DPmain";

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
        {/** 파티클 */}
        <Route path="/part" element={<ParticleMain />} />
        {/* 테스트 */}
        <Route path="/trident" element={<TridentMain />} />
        {/* 테스트2 */}
        <Route path="/trident2" element={<TridentCanvas />} />
        {/* 러너 */}
        <Route path="/run" element={<Runmain />} />
        {/* DP 테스트 */}
        <Route path="/point" element={<DPmain />} />
      </Routes>
    </div>
  );
}

export default App;
