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
                
                <div class="carousel-container">
                    <SyCarousel :imgList="imgList"></SyCarousel>
                </div>
                
                <SyTitle :titles="titleList[0]" class="wow fadeInUp"></SyTitle>
                <SyTitle :titles="titleList[1]" class="wow fadeInUp"></SyTitle>
                <SyTitle :titles="titleList[2]" class="wow fadeInUp"></SyTitle>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue';
import FlowText from "@/components/FlowText.vue";
import SyCarousel from "@/components/SyCarousel.vue";
import SyTitle from '@/components/SyTitle.vue';
import imgs from "@/assets/json/img.json";
import titles from "@/assets/json/titles.json";
import WOW from "wow.js";

onMounted(() => {
    var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: false, // act on asynchronously loaded content (default is true)
        callback: function () {
            console.log("遇到困难不要怕")
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
})





const { ctx: that } = getCurrentInstance() as any
let isMenuOpen: boolean = true;

const handleMenu = () => {
    isMenuOpen = !isMenuOpen
    that.$forceUpdate()
}

const imgList = imgs
const titleList = titles
//   console.log(titleList.value[0].title)
</script>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;

    .aside,
    .aside-close {
        height: 100%;
        background-color: #454d56;

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
        overflow-y: scroll;
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

        .main-container {
            width: 100%;
            max-width: 100vw;
            position: relative;
            height: 100%;

            .carousel-container {
                width: 100%;
                max-width: 100vw;
                height: 100vh;
                overflow: hidden;
                position: relative;
                // margin-bottom: 100px;
            }

            .content-container {
                width: 100%;
                max-width: 100vw;
            }
        }
    }
}
</style>