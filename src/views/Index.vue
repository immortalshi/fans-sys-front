<template>
    <div class="container">
        <div :class="isMenuOpen ? 'aside' : 'aside-close'">
            <FlowText class="flow-text"></FlowText>
        </div>
        <div class="page-container">
            <div class="header-container">
                <!-- 
                <div class="nav">
                    <div class="nav-item" v-for="(item, i) in navList" :key="i" @click="nav(item.url)" :title="item.name">
                        {{ item.name }}
                    </div>
                </div> -->
                <div class="edit">
                    <SvgIcon :iconName="isMenuOpen ? 'icon-shouqi1' : 'icon-zhankai'" :size='"32px"' :color="'#ffffff'"
                        @click="handleMenu"></SvgIcon>
                </div>

            </div>
            <div class="main-container">
                <SyCarousel :imgList="imgList"></SyCarousel>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import SyCarousel from "@/components/SyCarousel.vue"
import FlowText from "@/components/FlowText.vue"
import imgs from "@/assets/img.json"



const { ctx: that } = getCurrentInstance() as any
let isMenuOpen: boolean = true;

const handleMenu = () => {
    isMenuOpen = !isMenuOpen
    that.$forceUpdate()
}

const imgList = imgs
</script>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;

    .aside,.aside-close {
        height: 100%;

        .flow-text {
            background-color: #454d56;
            height: 70px;
        }
    }

    .aside {
        width: 250px !important;
        max-width: 250px;
        transition: all .3s ease-in;
    }

    .aside-close {
        width: 0px !important;
        transition: all .3s ease-in;
    }

    .page-container {
        height: 100%;
        background-color: azure;
        flex: 1;

        .header-container {
            width: 100%;
            max-width: 100vw;
            height: 70px;
            background-color: rgba(51, 51, 51, .8);
            position: fixed;
            display: flex;
            z-index: 999;
            align-items: center;
            
            .edit {
                padding: 0 20px;
            }
        }
    }
}
</style>