//Create scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100000
);

scene.background = new THREE.Color("white");

function makeLeg(l,w,h, color, x,y,z){
    
}

function makeTable(l,w,h){
    const topGoemetry = new THREE.BoxGeometry(l,w, h/5);
    const topMaterial = new THREE.MeshBasicMaterial("black");
    const tableTop = new THREE.Mesh(topGoemetry, topMaterial);
    scene.add(tableTop);

    const legGeometry = new THREE.BoxGeometry(w/3, w/3, h - h/5);
    const legMaterial = new THREe.MeshBasicMaterial({color: "brown"});
    const leg = new THREE.Mesh(legMaterial, legGeometry);
    scene.add(leg);


}

// Adjust camera position
camera.position.set(10,10,10        );
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.antialias = true; // Smooth out the edges
document.body.appendChild(renderer.domElement);

// orbit controls:
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Suraface plane
const surfaceGeometry = new THREE.PlaneGeometry(50,50);
const surfaceMaterial = new THREE.MeshBasicMaterial({color: "red", side: THREE.DoubleSide});
const plane = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
plane.rotation.x = Math.PI/2;
scene.add(plane);

//Ambient Lignt:
const ambL = new THREE.AmbientLight("white", 1);
scene.add(ambL);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

// Call the animation function
animate();