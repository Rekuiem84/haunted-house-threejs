import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { Sky, Timer } from "three/examples/jsm/Addons.js";

/**
 * Base
 */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

// Floor
const floorAlphaTexture = textureLoader.load("./floor/alpha.webp");
const floorColorTexture = textureLoader.load(
	"./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.webp"
);
const floorARMTexture = textureLoader.load(
	"./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.webp"
);
const floorNormalTexture = textureLoader.load(
	"./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.webp"
);
const floorDispTexture = textureLoader.load(
	"./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.webp"
);
floorColorTexture.repeat.set(8, 8);
floorColorTexture.colorSpace = THREE.SRGBColorSpace;
floorColorTexture.wrapS = THREE.RepeatWrapping;
floorColorTexture.wrapT = THREE.RepeatWrapping;
floorARMTexture.repeat.set(8, 8);
floorARMTexture.wrapS = THREE.RepeatWrapping;
floorARMTexture.wrapT = THREE.RepeatWrapping;
floorNormalTexture.repeat.set(8, 8);
floorNormalTexture.wrapS = THREE.RepeatWrapping;
floorNormalTexture.wrapT = THREE.RepeatWrapping;
floorDispTexture.repeat.set(8, 8);
floorDispTexture.wrapS = THREE.RepeatWrapping;
floorDispTexture.wrapT = THREE.RepeatWrapping;

// Walls
const wallColorTexture = textureLoader.load(
	"./wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.webp"
);
const wallARMTexture = textureLoader.load(
	"./wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.webp"
);
const wallNormalTexture = textureLoader.load(
	"./wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.webp"
);
wallColorTexture.colorSpace = THREE.SRGBColorSpace;

// Roof
const roofColorTexture = textureLoader.load(
	"./roof/roof_slates_02_1k/roof_slates_02_diff_1k.webp"
);
const roofARMTexture = textureLoader.load(
	"./roof/roof_slates_02_1k/roof_slates_02_arm_1k.webp"
);
const roofNormalTexture = textureLoader.load(
	"./roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.webp"
);
roofColorTexture.colorSpace = THREE.SRGBColorSpace;

roofColorTexture.repeat.set(3, 1);
roofARMTexture.repeat.set(3, 1);
roofNormalTexture.repeat.set(3, 1);

roofColorTexture.wrapS = THREE.RepeatWrapping;
roofARMTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapS = THREE.RepeatWrapping;

// Bush
const bushColorTexture = textureLoader.load(
	"./bush/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.webp"
);
const bushARMTexture = textureLoader.load(
	"./bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.webp"
);
const bushNormalTexture = textureLoader.load(
	"./bush/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.webp"
);
bushColorTexture.colorSpace = THREE.SRGBColorSpace;

bushColorTexture.repeat.set(2, 1);
bushARMTexture.repeat.set(2, 1);
bushNormalTexture.repeat.set(2, 1);

bushColorTexture.wrapS = THREE.RepeatWrapping;
bushARMTexture.wrapS = THREE.RepeatWrapping;
bushNormalTexture.wrapS = THREE.RepeatWrapping;

// Graves
const graveColorTexture = textureLoader.load(
	"./grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.webp"
);
const graveARMTexture = textureLoader.load(
	"./grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.webp"
);
const graveNormalTexture = textureLoader.load(
	"./grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.webp"
);
graveColorTexture.colorSpace = THREE.SRGBColorSpace;

graveColorTexture.repeat.set(0.3, 0.4);
graveARMTexture.repeat.set(0.3, 0.4);
graveNormalTexture.repeat.set(0.3, 0.4);

// Door
const doorColorTexture = textureLoader.load("./door/color.webp");
const doorAlphaTexture = textureLoader.load("./door/alpha.webp");
const doorAmbientOcclusionTexture = textureLoader.load(
	"./door/ambientOcclusion.webp"
);
const doorHeightTexture = textureLoader.load("./door/height.webp");
const doorMetalnessTexture = textureLoader.load("./door/metalness.webp");
const doorNormalTexture = textureLoader.load("./door/normal.webp");
const doorRoughnessTexture = textureLoader.load("./door/roughness.webp");

doorColorTexture.colorSpace = THREE.SRGBColorSpace;

/**
 * House
 */
const house = new THREE.Group();

// Floor
const floor = new THREE.Mesh(
	new THREE.PlaneGeometry(20, 20, 100, 100),
	new THREE.MeshStandardMaterial({
		alphaMap: floorAlphaTexture,
		transparent: true,
		map: floorColorTexture,
		aoMap: floorARMTexture,
		roughnessMap: floorARMTexture,
		metalnessMap: floorARMTexture,
		normalMap: floorNormalTexture,
		displacementMap: floorDispTexture,
		displacementScale: 0.5,
		displacementBias: -0.25,
	})
);

floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

// Walls
const walls = new THREE.Mesh(
	new THREE.BoxGeometry(4, 2.5, 4),
	new THREE.MeshStandardMaterial({
		map: wallColorTexture,
		aoMap: wallARMTexture,
		roughnessMap: wallARMTexture,
		metalnessMap: wallARMTexture,
		normalMap: wallNormalTexture,
	})
);
walls.position.y = 1.25;
house.add(walls);

// Roof
const roof = new THREE.Mesh(
	new THREE.ConeGeometry(3.75, 1.5, 4),
	new THREE.MeshStandardMaterial({
		map: roofColorTexture,
		aoMap: roofARMTexture,
		roughnessMap: roofARMTexture,
		metalnessMap: roofARMTexture,
		normalMap: roofNormalTexture,
	})
);
roof.position.y = 3.25; // Hauteur de la maison + hauteur du toit / 2
roof.rotateY(Math.PI * 0.25); // Rotation pour que le toit soit aligné
house.add(roof);

// Door
const door = new THREE.Mesh(
	new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
	new THREE.MeshStandardMaterial({
		map: doorColorTexture,
		alphaMap: doorAlphaTexture,
		transparent: true,
		aoMap: doorAmbientOcclusionTexture,
		displacementMap: doorHeightTexture,
		normalMap: doorNormalTexture,
		metalnessMap: doorMetalnessTexture,
		roughnessMap: doorRoughnessTexture,
		displacementScale: 0.15,
		displacementBias: -0.04,
	})
);
door.position.y = 1;
door.position.z = 2 + 0.01; // Éviter le z-fighting avec le mur
house.add(door);

// Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({
	color: "#ccffcc",
	map: bushColorTexture,
	aoMap: bushARMTexture,
	roughnessMap: bushARMTexture,
	metalnessMap: bushARMTexture,
	normalMap: bushNormalTexture,
});

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.position.set(0.8, 0.2, 2.2);
bush1.scale.setScalar(0.5);
bush1.rotation.x = -0.75;

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.position.set(1.4, 0.1, 2.1);
bush2.scale.setScalar(0.25);
bush2.rotation.x = -0.75;

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.position.set(-0.8, 0.1, 2.2);
bush3.scale.setScalar(0.4);
bush3.rotation.x = -0.75;

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.position.set(-1, 0.05, 2.6);
bush4.scale.setScalar(0.15);
bush4.rotation.x = -0.75;

house.add(bush1, bush2, bush3, bush4);

scene.add(house);

// Graves
const gravesGroup = new THREE.Group();

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
	map: graveColorTexture,
	aoMap: graveARMTexture,
	roughnessMap: graveARMTexture,
	metalnessMap: graveARMTexture,
	normalMap: graveNormalTexture,
});
scene.add(gravesGroup);

for (let i = 0; i < 40; i++) {
	const grave = new THREE.Mesh(graveGeometry, graveMaterial);

	const angle = Math.random() * Math.PI * 2;
	const radius = 3 + Math.random() * 4;
	const x = Math.sin(angle);
	const z = Math.cos(angle);
	grave.position.x = x * radius;
	grave.position.z = z * radius;
	grave.position.y = 0.4 - Math.random() * 0.15;

	grave.rotation.x = (Math.random() - 0.2) * 0.4;
	grave.rotation.y = (Math.random() - 0.2) * 0.4;
	grave.rotation.z = (Math.random() - 0.5) * 0.4;

	gravesGroup.add(grave);
}

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight("#86CDFF", 0.25);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight("#86CDFF", 1);
directionalLight.position.set(3, 2, -8);
scene.add(directionalLight);

// Door light
const doorLight = new THREE.PointLight("#ff7d46", 5);
doorLight.position.set(0, 2.2, 2.5);
house.add(doorLight);

/**
 * Ghosts
 */
const ghost1 = new THREE.PointLight("#68ee64", 5);
const ghost2 = new THREE.PointLight("#53eae6", 6);
const ghost3 = new THREE.PointLight("#eb4a6e", 6);
const ghost4 = new THREE.PointLight("#efb61f", 8);

scene.add(ghost1, ghost2, ghost3, ghost4);

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
);
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Shadows
 */
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Cast and receive shadows
directionalLight.castShadow = true;

ghost1.castShadow = true;
ghost2.castShadow = true;
ghost3.castShadow = true;
ghost4.castShadow = true;

walls.castShadow = true;
walls.receiveShadow = true;

door.receiveShadow = true;

roof.castShadow = true;

floor.receiveShadow = true;

bush1.castShadow = true;
bush2.castShadow = true;
bush3.castShadow = true;
bush4.castShadow = true;

gravesGroup.children.forEach((grave) => {
	grave.castShadow = true;
	grave.receiveShadow = true;
});

// Mapping
directionalLight.shadow.mapSize.width = 256;
directionalLight.shadow.mapSize.height = 256;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 20;
directionalLight.shadow.camera.top = 8;
directionalLight.shadow.camera.right = 8;
directionalLight.shadow.camera.bottom = -8;
directionalLight.shadow.camera.left = -8;

ghost1.shadow.mapSize.width = 256;
ghost1.shadow.mapSize.height = 256;
ghost1.shadow.camera.far = 20;

ghost2.shadow.mapSize.width = 256;
ghost2.shadow.mapSize.height = 256;
ghost2.shadow.camera.far = 20;

ghost3.shadow.mapSize.width = 256;
ghost3.shadow.mapSize.height = 256;
ghost3.shadow.camera.far = 20;

ghost4.shadow.mapSize.width = 256;
ghost4.shadow.mapSize.height = 256;
ghost4.shadow.camera.far = 20;

/**
 * Sky
 */
const sky = new Sky();
sky.material.uniforms["turbidity"].value = 10;
sky.material.uniforms["rayleigh"].value = 3;
sky.material.uniforms["mieCoefficient"].value = 0.1;
sky.material.uniforms["mieDirectionalG"].value = 0.95;
sky.material.uniforms["sunPosition"].value.set(0.3, -0.038, -0.95);
sky.scale.setScalar(100);
scene.add(sky);

/**
 * Fog
 */
scene.fog = new THREE.FogExp2("#02343f", 0.1);
/**
 * Animate
 */
const timer = new Timer();

const tick = () => {
	// Timer
	timer.update();
	const elapsedTime = timer.getElapsed();

	// Update controls
	controls.update();

	// Update ghosts
	const ghost1Angle = elapsedTime * 0.8;
	ghost1.position.x = Math.cos(ghost1Angle) * 4;
	ghost1.position.z = Math.sin(ghost1Angle) * 4;
	ghost1.position.y =
		(Math.sin(ghost1Angle) * Math.sin(ghost1Angle * 2.28) +
			Math.sin(ghost1Angle * 3.48)) *
			0.5 +
		1;

	const ghost2Angle = -elapsedTime * 0.6;
	ghost2.position.x = Math.cos(ghost2Angle) * 5.5;
	ghost2.position.z = Math.sin(ghost2Angle) * 5.5;
	ghost2.position.y =
		(Math.sin(ghost2Angle) * Math.sin(ghost2Angle * 2.28) +
			Math.sin(ghost2Angle * 3.48)) *
			0.5 +
		1;

	const ghost3Angle = elapsedTime * 0.7;
	ghost3.position.x = Math.cos(ghost3Angle) * 6.9;
	ghost3.position.z = Math.sin(ghost3Angle) * 6.9;
	ghost3.position.y =
		(Math.sin(ghost3Angle) * Math.sin(ghost3Angle * 2.28) +
			Math.sin(ghost3Angle * 3.48)) *
			0.5 +
		1;

	const ghost4Angle = -elapsedTime * 0.8;
	ghost4.position.x = Math.cos(ghost4Angle) * 8;
	ghost4.position.z = Math.sin(ghost4Angle) * 8;
	ghost4.position.y =
		(Math.sin(ghost4Angle) * Math.sin(ghost4Angle * 2.28) +
			Math.sin(ghost4Angle * 3.48)) *
			0.5 +
		1;

	// Render
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick();
