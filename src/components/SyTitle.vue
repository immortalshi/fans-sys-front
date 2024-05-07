<template>
    <div class="com-container">
        <h2 class="title">{{titles.title}}</h2>
        <p class="sub-title" :title="titles.hide">{{titles.subTitle}}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    titles: {
        type: Object,
        required: true,
    },
})

// console.log(props.titles)

</script>

<style lang="scss" scoped>
    .com-container {
        text-align: center;
        position: relative;
        width: 60%;
        margin: 0 20%;
    }

    .title {
        line-height: 12px;
    }

    .sub-title {
        color: #999999;
    }
</style>
