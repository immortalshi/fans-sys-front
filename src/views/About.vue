<template>
    <div>
    </div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';

//创建场景
const scene = new THREE.Scene();
//实例化摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//实例化渲染器
const renderer = new THREE.WebGLRenderer();

//设置渲染器大小
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

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
const gridHelper = new THREE.GridHelper(10,10)
scene.add(gridHelper)
//场景渲染方法
const animate = () => {
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
}

animate()

</script>

<style scoped></style>