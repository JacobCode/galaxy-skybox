let scene, camera, renderer;

const init = () => {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);

	// Set initial camera position (x, y, z)
	camera.position.set(-461.02511652945725, -737.6420800133758, -1040.323989785167);
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	let controls = new THREE.OrbitControls(camera);
	controls.minDistance = 500;
	controls.maxDistance = 2000;
	controls.addEventListener('change', () => {
		console.log(camera.position);
		renderer;
	});

	let materialArray = [];
	const texture_ft = new THREE.TextureLoader().load('corona_ft.png');
	const texture_bk = new THREE.TextureLoader().load('corona_bk.png');
	const texture_up = new THREE.TextureLoader().load('corona_up.png');
	const texture_dn = new THREE.TextureLoader().load('corona_dn.png');
	const texture_rt = new THREE.TextureLoader().load('corona_rt.png');
	const texture_lf = new THREE.TextureLoader().load('corona_lf.png');

	materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
	materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
	materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
	materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
	materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
	materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

	for (let i = 0; i < 6; i++) {
		materialArray[i].side = THREE.BackSide;
		let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
		let skybox = new THREE.Mesh(skyboxGeo, materialArray);
		scene.add(skybox);
		animate();
	}
}
const animate = () => {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

init();