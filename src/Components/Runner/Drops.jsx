// function init() {
//   const container = document.querySelector("#container");

//   camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 50000);
//   camera.position.set(0, 700, 7000);

//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0x000104);
//   scene.fog = new THREE.FogExp2(0x000104, 0.0000675);

//   camera.lookAt(scene.position);

//   const loader = new OBJLoader();

//   loader.load("models/obj/male02/male02.obj", function (object) {
//     const positions = combineBuffer(object, "position");

//     createMesh(positions, scene, 4.05, -500, -350, 600, 0xff7744);
//     createMesh(positions, scene, 4.05, 500, -350, 0, 0xff5522);
//     createMesh(positions, scene, 4.05, -250, -350, 1500, 0xff9922);
//     createMesh(positions, scene, 4.05, -250, -350, -1500, 0xff99ff);
//   });

//   loader.load("models/obj/female02/female02.obj", function (object) {
//     const positions = combineBuffer(object, "position");

//     createMesh(positions, scene, 4.05, -1000, -350, 0, 0xffdd44);
//     createMesh(positions, scene, 4.05, 0, -350, 0, 0xffffff);
//     createMesh(positions, scene, 4.05, 1000, -350, 400, 0xff4422);
//     createMesh(positions, scene, 4.05, 250, -350, 1500, 0xff9955);
//     createMesh(positions, scene, 4.05, 250, -350, 2500, 0xff77dd);
//   });

//   renderer = new THREE.WebGLRenderer();
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.autoClear = false;
//   container.appendChild(renderer.domElement);

//   parent = new THREE.Object3D();
//   scene.add(parent);

//   const grid = new THREE.Points(new THREE.PlaneGeometry(15000, 15000, 64, 64), new THREE.PointsMaterial({ color: 0xff0000, size: 10 }));
//   grid.position.y = -400;
//   grid.rotation.x = -Math.PI / 2;
//   parent.add(grid);

//   // postprocessing

//   const renderModel = new RenderPass(scene, camera);
//   const effectBloom = new BloomPass(0.75);
//   const effectFilm = new FilmPass(0.5, 0.5, 1448, false);

//   effectFocus = new ShaderPass(FocusShader);

//   effectFocus.uniforms["screenWidth"].value = window.innerWidth * window.devicePixelRatio;
//   effectFocus.uniforms["screenHeight"].value = window.innerHeight * window.devicePixelRatio;

//   composer = new EffectComposer(renderer);

//   composer.addPass(renderModel);
//   composer.addPass(effectBloom);
//   composer.addPass(effectFilm);
//   composer.addPass(effectFocus);

//   //stats
//   stats = new Stats();
//   container.appendChild(stats.dom);

//   window.addEventListener("resize", onWindowResize);
// }

// function createMesh(positions, scene, scale, x, y, z, color) {
//   const geometry = new THREE.BufferGeometry();
//   geometry.setAttribute("position", positions.clone());
//   geometry.setAttribute("initialPosition", positions.clone());

//   geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);

//   const clones = [
//     [6000, 0, -4000],
//     [5000, 0, 0],
//     [1000, 0, 5000],
//     [1000, 0, -5000],
//     [4000, 0, 2000],
//     [-4000, 0, 1000],
//     [-5000, 0, -5000],

//     [0, 0, 0],
//   ];

//   for (let i = 0; i < clones.length; i++) {
//     const c = i < clones.length - 1 ? 0x252525 : color;

//     mesh = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 30, color: c }));
//     mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;

//     mesh.position.x = x + clones[i][0];
//     mesh.position.y = y + clones[i][1];
//     mesh.position.z = z + clones[i][2];

//     parent.add(mesh);

//     clonemeshes.push({ mesh: mesh, speed: 0.5 + Math.random() });
//   }

//   meshes.push({
//     mesh: mesh,
//     verticesDown: 0,
//     verticesUp: 0,
//     direction: 0,
//     speed: 15,
//     delay: Math.floor(200 + 200 * Math.random()),
//     start: Math.floor(100 + 200 * Math.random()),
//   });
// }

// function animate() {
//   requestAnimationFrame(animate);
//   render();
//   stats.update();
// }
