<template>
  <div class="about">
    <div class="titlebox">
      <h1>This is an about page</h1>
    </div>
    <component :is='AboutViewPage'></component>
  </div>
</template>
<script setup>
import AboutViewPage from '@/pages/AboutViewPage.vue'
</script>
<style>
.titlebox{
  margin-bottom: 20px;
  color: red;
  font-size: 32px;
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
