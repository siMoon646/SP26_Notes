const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 10000);

// enable shadows
renderer.shadowMap.enabled = true;

// shadow map type:
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Enable percentage-closer filtering for anti-aliasing

const light = new THREE.DirectionalLight("white", 1);
light.position.set(10,10,0);
light.castShadow = true; // enable shadows from this light

scene.add(light);

scene.add(new THREE.DirectionalLightHelper(light));

// Shadows: some object casting it + some surface seeing it

// object 1: surface
const planeGeometry = new THREE.planeGeometry(50,50);

// no shininess, requires light to see. Similar to MeshBasicMaterial.
const planeTexture = new THREE.TextureLoader().load('https://media.freestocktextures.com/cache/f2/1f/f21f976cf799e1489476c91da712289a.jpg');
const planeMaterial = new THREE.MeshstandardMaterial({map: planeTexture, side: THREE.DoubleSide}); 
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
scene.add(plane);

// object 2: cube 
const cubeGeometry = new THREE.BoxGeometry(5,5,5);
const cubeMaterial = new THREE.MeshstandardMaterial({color: "blue"});
const cube  = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.castShadow = true;

scene.add(cube);