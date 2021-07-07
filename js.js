let width = window.innerWidth;
let height = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;
scene.background = new THREE.Color('white');
/* Geometri Material */
const geo = new THREE.CylinderGeometry(1, 1, 2, 6);
// Map Material => Texture
const grassTexture = new THREE.TextureLoader().load('https://i.ibb.co/nrBXfTT/aku.jpg');
const material = new THREE.MeshBasicMaterial({
  map: grassTexture,
});
let mesh = new THREE.Mesh(geo, material);
scene.add(mesh);
/* Akhir Geometri Material */
window.addEventListener('resize', function () {
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
function update() {
  mesh.rotation.y += 0.01;
  mesh.rotation.x += 0.01;
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}
update();
