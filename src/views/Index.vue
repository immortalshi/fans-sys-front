<template>
    <div class="container">
        <!-- 左侧功能模块导航 -->
        <div :class="isMenuOpen ? 'aside' : 'aside-close'">
            <FlowText class="flow-text"></FlowText>
        </div>
        <!-- 右侧页面窗口 -->
        <div class="page-container">
            <!-- 头部导航 -->
            <div class="header-container">
                <div class="edit">
                    <SvgIcon :iconName="isMenuOpen ? 'icon-shouqi1' : 'icon-zhankai'" :size='"32px"' :color="'#ffffff'"
                        @click="handleMenu"></SvgIcon>
                </div>
                <div class="nav">
                    <div class="nav-item" v-for="(item, i) in menus" :key="i" @click="nav(item.url)" :title="item.name">
                        {{ item.name }}
                    </div>
                </div>
                <div class="user"></div>
            </div>

            <div class="main-container">
                <!-- 走马灯 -->
                <div class="carousel-container">
                    <SyCarousel :imgList="imgList"></SyCarousel>
                </div>
                <!--主体-->
                <div class="content-container">
                    <!--业务范围-->
                    <div class="business">
                        <SyTitle :titles="titleList[0]" class="wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay="0.3s">
                        </SyTitle>
                        <div class="bus-container">
                            <div class="bus-item wow fadeInUp" :data-wow-delay="(0.5 + i * 0.3) + 's'"
                                v-for="(item, i) in imgList.slice(0, 6)" :key="i">
                                <SyBusrCard :busInfo="item"></SyBusrCard>
                            </div>
                        </div>
                    </div>
                    <!--合伙人团队-->
                    <div class="team wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.5s">
                        <SyTitle :titles="titleList[1]"></SyTitle>
                        <div class="player-container">
                            <SyUserCard :playerList="playerList"></SyUserCard>
                        </div>
                    </div>
                    <!--客户反馈-->
                    <div class="feedback wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.5s">
                        <SyTitle :titles="titleList[2]"></SyTitle>
                    </div>
                    <!--孵化计划-->
                    <div class="egg wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.5s">
                        <SyTitle :titles="titleList[3]"></SyTitle>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';
import FlowText from "@/components/FlowText.vue";
import SyCarousel from "@/components/SyCarousel.vue";
import SyTitle from '@/components/SyTitle.vue';
import SyUserCard from "@/components/SyUserCard.vue";
import SyBusrCard from '@/components/SyBusCard.vue';
import imgs from "@/assets/json/img.json";
import players from "@/assets/json/player.json";
import menus from "@/assets/json/menuUrls.json";
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
            console.log("你说我长的帅嘛？")
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: '.page-container', // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
})





const { ctx: that } = getCurrentInstance() as any
let isMenuOpen: boolean = false;

const handleMenu = () => {
    isMenuOpen = !isMenuOpen
    that.$forceUpdate()
}

const nav = (url: String) => {
    console.log(url)
}

const imgList: Array<Object> = imgs
const titleList: Array<Object> = titles
const playerList: Array<Object> = players
//   console.log(titleList.value[0].title)
</script>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
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
            max-width: 100vw;
            width: 100%;
            height: 70px;
            background-color: rgba(51, 51, 51, .8);
            position: fixed;
            display: flex;
            z-index: 999;
            align-items: center;

            .edit {
                width: 33%;
                display: flex;
                justify-content: flex-start;
                padding: 0 20px;
            }

            .nav {
                flex: 1;
                // max-width: 50vw;
                height: 100%;
                // position: absolute;
                // top: 50%;
                // left: 50%;
                // transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                justify-content: space-between;
                /*background: #F1E9D2;*/

                .nav-item {
                    width: 120px;
                    // padding: 0 20px;
                    height: 35px;
                    border-radius: 18px;
                    background: #27E1C1;
                    transition: all 0.5s;
                    font-size: 16px;
                    color: #FFFFFF;
                    /*color: #DBDBDB;*/
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0px 10px;
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: normal;

                    &:hover {
                        margin: 0px 10px;
                        width: 120px;
                        height: 35px;
                        border-radius: 35px 0 35px 0;
                        background: #27E1C1;
                        font-size: 16px;
                        color: #FFFFFF;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transform: translateY(-5px);
                        text-shadow: 3px 3px 4px #999999;
                        cursor: pointer;
                    }
                }
            }

            .user {
                width: 33%;
                // flex: 1
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
                margin-bottom: 100px;
            }

            .content-container {
                width: 100%;
                max-width: 100vw;
            }

        }
    }
}


.business {
    .bus-container {
        width: 80vw;
        /*width: calc(1920px * 0.6);*/
        margin: 0 auto;

        .bus-item {
            display: inline-block;
            align-items: center;
            justify-content: center;

            .bus-item-title {}

            .bus-item-body {
                text-indent: 20px;
                color: #7F7F7F;
                font-size: 16px;
            }
        }
    }
}

.player-container {
    width: 100%;
    max-width: 100vw;
    text-align: center;
}
</style>