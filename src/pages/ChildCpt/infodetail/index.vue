<template>
    <div class="infodetail">
      <h1>infoDetail</h1>
     <!--  <div>id:{{ params.id }}</div>
      <div>title:{{ params.title }}</div>
      <div>content:{{ params.content }}</div> -->
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
  //  let {params}=toRefs(route)
  /* 
  **路由的props传参
   */
  defineProps(["id","title","content"])
  </script>
  
  <style lang="scss" scoped>
  .infodetail{
      width: 80%;
      height: 16vh;
      border: 3px dashed rgb(33, 20, 88);
      margin: 20px;
      h1{
          color: rgb(55, 0, 255);
     
      }
  }
  </style>
  