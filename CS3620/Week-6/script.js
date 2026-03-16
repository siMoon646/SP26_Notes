
const scene = new THREE.Scene();

//perspective camera
const camera = new THREE.PerspectiveCamera(50, 500/400, 0.1, 1000);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(500, 400);

document.body.appendChild(renderer.domElement);

// Adding object(s) to the scene:
// object = mesh = (geometry + material)

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshPhongMaterial({color: "green", shininess: .8});
const cube = new THREE.Mesh(geometry, material);

// scene.add(cube);

const geometry2 = new THREE.SphereGeometry()

// const ambientLight = new THREE.AmbientLight("white", 1);
// scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight((
    "skyblue",
    "oranged",
    1
));
scene.add(hemisphereLight);

const directionalLight = new THREE.DirectionalLight("white",1);
directionalLight.position.set(0,0,5);
scene.add(directionalLight);

// point light:
const pointLight = new THREE.PointLight("white", 0.3, 100);
pointLight.position.set(-4, 3, 3);
scene.add(pointLight);

// spotlight:
const spotLight = new THREE.SpotLight("blue", 1);
spotLight.position.set(5,5,5);
spotLight.target.position.set(0,0,0);
scene.add(spotLight);
scene.add(spotLight.target);

const wireFrame = new THREE.WireframeGeometry(cube.geometry); // creating the wireFrame
const line = new THREE.LineSegments(wireFrame); // drawing the wireFrame

line.material.depthTest = false;
line.material.opacity = 1;

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();

// create a gui
const gui = new dat.GUI();
const folder = gui.addFolder("Properties");
const param = {wireframe: false};
folder.add(param, "wireframe").name("wireframe").onChange((value) => {
    if(value = true){
        cube.material.wireframe = true;
        cube.material.color.set("blue");
    } else {
        cube.material.wireframe = false;
        cube.material.color.set("green");
    }
})
