<template>
    <div class="AboutViewPage">
        <h1> AboutViewPage</h1>
        <button @click="getUserInfo">getUserInfo</button>
        <div class="childnavbox">
            <!-- <router-link to="/about/info" class="box" active-class="ActiveStyle">info</router-link>
            <router-link to="/about/news" class="box" active-class="ActiveStyle">news</router-link>
            <router-link to="/about/work" class="box" active-class="ActiveStyle">work</router-link> -->
            <router-link replace :to="{ path: '/about/info' }" class="box" active-class="ActiveStyle">info</router-link>
            <router-link replace :to="{ name: 'news' }" class="box" active-class="ActiveStyle">news</router-link>
            <router-link replace to="/about/work" class="box" active-class="ActiveStyle">work</router-link>
        </div>
        <div>
            <!--  <router-view></router-view> -->
            <RouterView v-slot="{ Component }">
                <component :is="Component" view-prop="value" />
            </RouterView>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, watchEffect, watch, provide, useAttrs } from 'vue'
import axios from 'axios';
let getUserInfo=()=> {
      axios.get('/api/user')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
</script>

<style lang="scss" scoped>
.AboutViewPage {
    .childnavbox {
        margin-top: 20px;
    }
}

.box {
    padding: 5px 15px;
    margin-left: 10px;
    color: #333;

    &:hover {}
}

.ActiveStyle {
    background: #06633f;
    color: #fff;

}
</style>
