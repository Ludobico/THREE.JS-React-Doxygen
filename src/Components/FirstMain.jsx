import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./FirstMain.css";

const FirstMain = () => {
  return (
    <div className="container">
      <div className="content">
        <header>
          <div className="nav">
            <ul className="nav_list">
              <li>
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About me</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>3D Background</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="description">
          <h1>THREE.JS</h1>
          <h2>
            This is <br />
            3D Background <br />
            Project
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FirstMain;
