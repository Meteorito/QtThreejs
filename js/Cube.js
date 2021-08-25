//.import  "../3rdparty/three.js" as TH
Qt.include("qrc:/3rdparty/three.js")
//^^^^^VSCODE USING
// import "../3rdparty/three"
//^^^^^!VSCODE

// //相机，场景，渲染器
// var camera,scene,renderer;
// var geometry,caseMesh,caseMaterial;
// var caseColor = new THREE.Color("#000000");
// var zeroVector = new THREE.Vector3(0,0,0);
// //相机光源
// var cameraLight;

// //初始化GL
// function initializeGL(canvas,textureSource){
//     //创建场景
//     scene = new THREE.Scene();
//     //创建相机
//     camera = new THREE.PerspectiveCamera(75,canvas.width/canvas.height,0.001,1000);
//     //设置光源，环境光
//     var light = new THREE.AmbientLight(0x666666);
//     scene.add(light)
//     //设置相机平行光
//     cameraLight = new THREE.DirectionalLight(0xffffff,1);
//     cameraLight.position.y = 1.5;
//     scene.add(cameraLight);

//     //创建渲染器
//     renderer = new THREE.Canvas3DRenderer(
//         {canvas: canvas, antialias: true, devicePixelRatio: canvas.devicePixelRatio}
//     );
//     renderer.setSize(canvas.width, canvas.height);

//     geometry = new THREE.BoxGeometry(20,25,30);
//     caseMaterial = new THREE.MeshLambertMaterial({
//         color: caseColor
//     });
//     caseMesh = new THREE.Mesh(geometry,caseMaterial)
// }
// function resizeGL(canvas){
//     camera.aspect = canvas.width / canvas.height;
//     camera.updateProjectionMatrix();

//     renderer.setPixelRatio(canvas.devicePixelRatio);
//     renderer.setSize(canvas.width, canvas.height);
// }

// function degToRad(dgress){
//     return dgress * Math.PI/180;
// }

// function paintGL(canvas){
//     let cameraRad =  degToRad(canvas.cameraAngle);
//     let lightRad  = cameraRad - 0.8;
//     caseMesh.rotation.x = degToRad(canvas.xRotAnim);
//     caseMesh.rotation.y = degToRad(canvas.yRotAnim);
//     caseMesh.rotation.z = cameraRad + degToRad(canvas.zRotAnim);
//     camera.position.x = canvas.distance * Math.sin(cameraRad);
//     camera.position.z = canvas.distance * Math.cos(cameraRad);
//     cameraLight.position.x = (canvas.distance + 2) * Math.sin(lightRad);
//     cameraLight.position.z = (canvas.distance + 2) * Math.cos(lightRad);
//     camera.lookAt(zeroVector);  
//     renderer.render(scene,camera)   
// }


var scene, camera, renderer, mesh
function initializeGL(canvas,textureSrc) {
    scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
    var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    //1.QQuick Item 材质
    var itemTexture = new THREE.QtQuickItemTexture(textureSrc);
    var itemMaterial = new THREE.MeshPhongMaterial({map: itemTexture});
    mesh = new THREE.Mesh(geometry,itemMaterial);
    scene.add(mesh);
    //2.默认材质
    // var material = new THREE.MeshLambertMaterial({
    //     color: 0x0000ff
    // }); //材质对象Material
    // mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    // scene.add(mesh); //网格模型添加到场景中


    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    var width = canvas.width; //窗口宽度
    var height = canvas.height; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(100, 100, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    var axisHelper = new THREE.AxisHelper(250);
    scene.add(axisHelper);
    var gridHelper=new THREE.GridHelper(100,100,0xf0f0f0,0xffffff)
    scene.add(gridHelper);
    /**
     * 创建渲染器对象
     */
    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize(width, height);//设置渲染区域尺寸
    //创建渲染器
    renderer = new THREE.Canvas3DRenderer(
        { canvas: canvas, antialias: true, devicePixelRatio: canvas.devicePixelRatio }
    );
    renderer.setSize(width, height);

    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    //执行渲染操作   指定场景、相机作为参数
}

function paintGL(canvas) {
    renderer.render(scene, camera);
    mesh.rotateY(0.001 * canvas.yRotAnim);

    mesh.rotateX(0.001 * canvas.xRotAnim);
}
function degToRad(dgress) {
    return dgress * Math.PI / 180;
}



