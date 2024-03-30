<template>
  <div class="newsdetail">
    <h1>newsdetail</h1>
    <!--     <div>id:{{ query.id }}</div>
    <div>title:{{ query.title }}</div>
    <div>content:{{ query.content }}</div> -->
    <div>id:{{ id }}</div>
    <div>title:{{ title }}</div>
    <div>content:{{ content }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, watchEffect, watch, provide, useAttrs, toRefs } from 'vue'
// import { useRoute } from 'vue-router';
// let route=useRoute()
// console.log(`route`, route);
// let {query}=toRefs(route)
/* 
**路由的query传参
 */
defineProps(["id", "title", "content"])

</script>

<style lang="scss" scoped>
.newsdetail {
  width: 80%;
  height: 16vh;
  border: 3px dashed rgb(33, 20, 88);
  margin: 20px;

  h1 {
    color: rgb(55, 0, 255);

  }
}
</style>
