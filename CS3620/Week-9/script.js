// 3 Essentials:
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1920 / 1080, 1, 10000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

scene.background = new THREE.Color("cyan");

// function for directional arrows:
function addDirectionArrow(object, length = 150, color = "red") { // makes red arrows point in the direction that an object is facing.

    const dir = new THREE.Vector3(0, 0, -1); // https://threejs.org/docs/?q=vector3#Vector3
    const origin = new THREE.Vector3(0, 0, 0);

    const arrow = new THREE.ArrowHelper(dir, origin, length, color);
    object.add(arrow); // add as child instead of to scene

    return arrow;
}

// makes the axes visible. 
const axes = new THREE.AxesHelper(1000);
scene.add(axes);

// move the camera away from origin and make it look at origin
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);

renderer.setSize(window.innerWidth, window.innerHeight);
// Handles shadow calculations.
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// Adds the renderer to the document
document.body.appendChild(renderer.domElement);

// orbit controls: 
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Ambient light: 
const ambLight = new THREE.AmbientLight("white", 0.32);
scene.add(ambLight);

// Spotlight: 
const spotLight = new THREE.SpotLight("orange", 1);
spotLight.position.set(90, 50, 90);
spotLight.lookAt(0, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);

// room:
const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshStandardMaterial({ color: "beige", side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
// make the floor face up:
// addDirectionArrow(floor);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

// making walls 
const wallGeometry = new THREE.BoxGeometry(100, 100, 1);
const wallMaterial = new THREE.MeshStandardMaterial({ color: "beige" });
const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
const rightWall = leftWall.clone(); // clone method inheritead from Object3D class. https://threejs.org/docs/?q=object3d#Object3D
const backWall = leftWall.clone();
// making the left wall face right (positive x);
// addDirectionArrow(leftWall);
leftWall.rotation.y = -Math.PI / 2;
// making right wall face left (negative x);
// addDirectionArrow(rightWall);
rightWall.rotation.y = Math.PI / 2;
// making back wall face forward (positive z);
// addDirectionArrow(backWall);
backWall.rotation.y = Math.PI;
scene.add(leftWall);
scene.add(rightWall);
scene.add(backWall);
// function for positioning the room's elements:

// making ceiling:
const ceiling = floor.clone();
// makeing ceiling face down:
// addDirectionArrow(ceiling);
ceiling.rotation.y = Math.PI;
scene.add(ceiling);

// function for positioning room elements:
function assembleRoom() {
    const floorBox = new THREE.Box3().setFromObject(floor); //min/max x, y, z of floor https://threejs.org/docs/?q=box3#Box3

    const width = floorBox.max.x - floorBox.min.x;
    const depth = floorBox.max.z - floorBox.min.z;
    const height = 100; //initial wall height

    backWall.scale.set(width / 100, 1, 1); // wall's width (x) was init to 100, div by 100 makes the "default scale of width" = 1, "no scaling".

    // scaling each piece of the room relative to the floor
    leftWall.scale.set(depth / 100, 1, 1); // scale method inherited from object3d class. scale(x,y,z)
    rightWall.scale.set(depth / 100, 1, 1);
    ceiling.scale.set(width / 100, depth / 100, 1);

    // positioning room pieces relative to floor 
    leftWall.position.set(floorBox.min.x, height / 2, 0);
    rightWall.position.set(floorBox.max.x, height / 2, 0);
    backWall.position.set(0, height / 2, floorBox.min.z);

    //position ceiling
    //bounding box for back wall
    const wallBox = new THREE.Box3().setFromObject(backWall);

    //highest point on back wall
    const wallTop = wallBox.max.y;

    const offset = wallTop - floor.position.y; // finding distance between floor's y-level, and top of wall's y-level.
    ceiling.position.y += offset;
}
assembleRoom();

const modelLoader = new THREE.GLTFLoader(); // https://threejs.org/docs/?q=gltfload#GLTFLoader
let tableModel = null;
let sandwichModel = null;

const modelGroup = new THREE.Group(); // hierarchical model
scene.add(modelGroup);

// function for positioning objects on top of eachother.
function placeOnTop(object, surface) {
    if (!object || !surface) return; // parameter contains something that is not an object, or something that is not a surface.

    // bounding boxes for object and surface
    const objectBox = new THREE.Box3().setFromObject(object);
    const surfaceBox = new THREE.Box3().setFromObject(surface);

    // top of surface - bottom of obj = how high to lift obj to position atop surface
    const offset = surfaceBox.max.y - objectBox.min.y;

    object.position.y += offset;
}

function buildScene() {
    if (!tableModel || !sandwichModel) return;

    //add models to group
    modelGroup.add(tableModel);
    modelGroup.add(sandwichModel);

    //stack using bounding boxes (placeOnTop);
    placeOnTop(tableModel, floor);
    placeOnTop(sandwichModel, tableModel);
}

// loading table model
modelLoader.load('https://raw.githubusercontent.com/amaraauguste/amaraauguste.github.io/master/courses/CISC3620/models/Table%20Round%20Small.glb', function (gltf) {
    tableModel = gltf.scene;

    //scale table 
    tableModel.scale.set(20, 20, 20);

    // traverse entire model mesh(s) to set shadow + change color
    tableModel.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material = new THREE.MeshStandardMaterial({ color: "cyan" })
        }
    });
    buildScene();
});

//load sandwich
modelLoader.load('https://raw.githubusercontent.com/siMoon646/CISC3620-Textures/refs/heads/main/Sandwich.glb', function(gltf) {
  sandwichModel = gltf.scene;
  
  //scale down flower model
  sandwichModel.scale.set(20, 20, 20);
  
  sandwichModel.traverse((child) => {
    if(child.isMesh){
      child.castShadow = true;
      child.receiveShadow = true;
      //child.material = new THREE.MeshStandardMaterial({ color: "green"})
    }
  });
  buildScene();
});

backWall.receiveShadow = true;
leftWall.receiveShadow = true;
floor.receiveShadow = true;

// animate function:
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    modelGroup.rotation.y+=0.01
}
animate();
