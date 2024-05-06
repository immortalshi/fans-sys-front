<template>
    <div class="container">
        <div :class="isMenuOpen ? 'aside' : 'aside-close'" @click="handleMenu">{{ isMenuOpen }}</div>
        <div class="page-container">
            <div class="header-container"></div>
            <div class="main-container">2</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const { ctx: that } = getCurrentInstance() as any
let isMenuOpen: boolean = true;

const handleMenu = () => {
    isMenuOpen = !isMenuOpen
    that.$forceUpdate()
}
</script>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;

    .aside {
        width: 200px !important;
        height: 100%;
        max-width: 200px;
        transition: all .3s ease-in;
    }

    .aside-close {
        width: 56px !important;
        height: 100%;
        transition: all .3s ease-in;
    }

    .page-container {
        height: 100%;
        background-color: azure;
        flex: 1;
    }

    .main {
        flex: 1;
        height: 100%;
    }
}
</style>