<template>
    <div id="container">
    </div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { onMounted } from 'vue';
import * as dat from 'dat.gui'


const controlData = {
    rotationSpeed: 0.03,
    color: '#66ccff',
    wireframe: false,
    // enableDamping: true,
    // dampingFactor: 0.1,
    // autoRotate: true,
    // autoRotateSpeed: 5.0
}

const gui = new dat.GUI()
const f = gui.addFolder('配置')

f.add(controlData, 'rotationSpeed', 0.01, 0.1, 0.01)
f.addColor(controlData, 'color')
f.add(controlData, 'wireframe')
// f.add(controlData, 'enableDamping')
// f.add(controlData, 'dampingFactor', 0.1, 1, 0.1)
// f.add(controlData, 'autoRotate')
// f.add(controlData, 'autoRotateSpeed', 1.0, 10.0, 1.0)
f.domElement.id = "gui"
f.open()

onMounted(() => {
    //创建场景
    const scene = new THREE.Scene();
    //实例化摄像机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //实例化渲染器
    const renderer = new THREE.WebGLRenderer();

    //设置渲染器大小
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("container").appendChild(f.domElement)
    document.getElementById("container").appendChild(renderer.domElement)


    //创建立方体对象
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //创建材质
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //创建方块对象
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y += 2;

    //将对象加入场景
    scene.add(cube)
    camera.position.z = 5
    camera.position.y = 2
    //创建地面网格
    const gridHelper = new THREE.GridHelper(10, 10)
    // scene.add(gridHelper)

    // scene.background = new THREE.Color('#FFFFFF')
    scene.background = new THREE.CubeTextureLoader().setPath('/').load(['02.jpg', '02.jpg', '02.jpg', '02.jpg', '02.jpg', '02.jpg'])


    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.autoRotate = true
    controls.autoRotateSpeed = 5.0
    controls.update()

    //场景渲染方法
    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += controlData.rotationSpeed;
        cube.rotation.y += controlData.rotationSpeed;
        cube.material.color = new THREE.Color(controlData.color);
        cube.material.wireframe = controlData.wireframe;
        controls.update()

        renderer.render(scene, camera);
    }

    animate()
})



</script>

<style lang="scss">
#gui {
    width: 300px;
    position: absolute;
    right: 0;
}
</style>