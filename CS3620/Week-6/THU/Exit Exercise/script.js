import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.scene();
scene.background = "white";

const camera = new THREE.PerspectiveCamera(50, 1920/1080, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WegGLRenderer({antialias: true});
renderer.setSize(1920, 1080);

document.body.appendChild(renderer.domElement);

// Plane:
const planeGeometry = new THREE.PlaneGeometry(100, 100);
const planeTexture = new THREE.TextureLoader().load("https://media.freestocktextures.com/cache/f2/1f/f21f976cf799e1489476c91da712289a.jpg");
const planeMaterial = new THREE.MeshStandardMaterial({map: planeTexture, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
scene.add(plane);

// cube:
const cubeGeometry = new THREE.BoxGeometry(10,10,10);
const cubeTexture = new THREE.TextureLoader().load("https://opengameart.org/sites/default/files/styles/medium/public/painted_brick_5_0.png");
const cubeMaterial = new THREE.MeshStandardMaterial({map: cubeTexture});
const cube = new  THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// sphere:
const sphereGeometry = new THREE.SphereGeometry(25, 32, 32);
const sphereTexture = new THREE.TextureLoader().load("");
const sphereMaterial = new THREE.MeshStandardMaterial({map: sphereTexture});
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);
