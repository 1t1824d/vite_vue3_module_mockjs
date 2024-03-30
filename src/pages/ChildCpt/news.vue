<template>
  <div class="newsbox">
    <h1>AboutViewPage-news子路由---query传参</h1>
    <div>
      <div v-for="item in newsList" :key="item.id">
        <!--   <router-link :to="`/about/news/newsdetail?id=${item.id}&title=${item.title}&content=${item.content}`"
          class="box"> ● {{ item.title }}</router-link> -->
        <router-link :to="{
        path: `/about/news/newsdetail`,
        query: {
          id: item.id,
          title: item.title,
          content: item.content
        }
      }" class="box"> ● {{ item.title }}</router-link>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, watchEffect, watch, provide, useAttrs, reactive } from 'vue'
let newsList = reactive([
  {
    id: "qwe",
    title: "总书记深深牵挂雪域高原上的人们",
    content: "总书记深深牵挂雪域高原上的人们"
  },
  {
    id: "adsd",
    title: "金价再创历史新高",
    content: "金价再创历史新高"
  },
  {
    id: "asae",
    title: "雷军：SU7价格临时调低",
    content: "雷军：SU7价格临时调低"
  },
  {
    id: "bvbv",
    title: "抓住“热辣滚烫”的“春日经济”",
    content: "抓住“热辣滚烫”的“春日经济”"
  },
  {
    id: "dvcv",
    title: "女骑手半个月偷吃40多份外卖",
    content: "女骑手半个月偷吃40多份外卖"
  }
])
</script>

<style lang="scss" scoped>
.newsbox {
  width: 100%;
  height: 30vh;
  border: 1px solid #333;
  margin-top: 30px;

  h1 {
    color: orange;
    font-size: 22px;
  }
}

.box {
  padding: 5px 15px;
  margin-left: 10px;
  color: #3230a3;

  &:hover {}
}

.ActiveStyle {
  background: #06633f;
  color: #fff;

}
</style>