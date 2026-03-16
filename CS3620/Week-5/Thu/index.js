//3 parts to begin 
//1) sceme - contains all objects, lights, camera, etc.

const scene = new THREE.Scene();

//2) how we view the scene (FOV, aspect ratio, near, far)
const camera = new THREE.PerspectiveCamera(50, 500/400, 0.1, 1000);

//3) camera position
camera.position.z = 5;

// width = 500, height = 400

//4) Camera renderer  -- draw onto the scene

const renderer = new THREE.WebGLRenderer

renderer.setSize(500,400);

// add our renderer to the page
document.body.appendChild(renderer.domElement);

// create an object:
// geometry:

var size = 2;

function createTriangle(size){
    //vertices --  flat list of # (x, y, z, ...)
    const triangleGeometry = new THREE.bufferGeometry();
    
    const vertices = new Float32Array([
        0, 0, 0, // first vertex
        size, 0, 0, // second vertex
        0, size, 0 // third vertex
    ])

    triangleGeometry.setAttributes("position: n", new THREE.BufferAttributes(vertices, 3));
}



function animate(){
    //request browser to call animate again on next refresh
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();