// Стандартная заготовка для проверки

// const width = window.innerWidth, height = window.innerHeight;

// // init

// const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
// camera.position.z = 1;

// const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
// const material = new THREE.MeshNormalMaterial();

// const mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );

// const renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setSize( width, height );
// renderer.setAnimationLoop( animation );
// document.body.appendChild( renderer.domElement );

// // animation

// function animation( time ) {

// 	mesh.rotation.x = time / 2000;
// 	mesh.rotation.y = time / 1000;

// 	renderer.render( scene, camera );

// }



// РУчная первая отрисовка
// Сцена, создание
const scene = new THREE.Scene();
// const axesHelper = new THREE.AxesHelper(3);

// Объект создание
const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial({color: 'green'});
const material = new THREE.MeshNormalMaterial({
    color: 'green',
    wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
// scene.add(axesHelper);

// камера
const sizes = {
    width: window.innerWidth/1.5,
    height: window.innerHeight/2,
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
// смещаем камеру с 0,0,0 позиции для просмотра на объект оо стороны
camera.position.z = 4;
// camera.position.y = 1;
// camera.position.x = 1;

scene.add(camera);

// Отрисовщик, создаём

// Одна из настроек отрисовщика - место где будет рендер происходить
const canvas = document.querySelector(".canvas");

// Создаём объект рендера
const renderer = new THREE.WebGLRenderer({ canvas });

// Задаём размеры для рендера
renderer.setSize(sizes.width, sizes.height);

// рендерим объект рендера
renderer.render(scene, camera);


// костыльное движение объекта при движении мышкой
// let onMouseDownPosition = { x: 300, y: 500, }
// let radious = 2;
// canvas.addEventListener("mousemove", onDocumentMouseMove);
// function onDocumentMouseMove( event ) {
//     event.preventDefault();
//     theta = - ( ( event.clientX - onMouseDownPosition.x ) * 0.5 );
//     phi = ( ( event.clientY - onMouseDownPosition.y ) * 0.5 );
//     phi = Math.min( 180, Math.max( 0, phi ) );
//     camera.position.x = radious * Math.sin( theta * Math.PI / 360 )
//                         * Math.cos( phi * Math.PI / 360 );
//     console.log(camera.position.x);
//     camera.position.y = radious * Math.sin( phi * Math.PI / 360 );
//     camera.position.z = radious * Math.cos( theta * Math.PI / 360 )
//                         * Math.cos( phi * Math.PI / 360 );

//     renderer.render(scene, camera);
// }




canvas.addEventListener("wheel", event => {
    event.preventDefault();
    if (event.deltaX > 0 && Math.abs(event.deltaY) == 0) {
        mesh.rotation.y += 0.1;
    } else if (event.deltaX < 0 && Math.abs(event.deltaY) == 0) {
        mesh.rotation.y -= 0.1;
    }

    if (event.deltaY > 0 && Math.abs(event.deltaX) == 0) {
        mesh.rotation.x += 0.1;
    } else if (event.deltaY < 0 && Math.abs(event.deltaX) == 0){
        mesh.rotation.x -= 0.1;
    }

    renderer.render(scene, camera);
}, { passive: false });










