<template>
    <div class="WorkBox">
        <h1>AboutViewPage-Work子路由</h1>
        <button id="show-modal" @click="showModal = true">Show Modal</button>

        <Teleport to="body">
            <!-- 使用这个 modal 组件，传入 prop -->
            <modal :show="showModal" @close="showModal = false">
                <template #header>
                    <h3>custom header</h3>
                </template>
            </modal>
        </Teleport>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, watchEffect, watch, provide, useAttrs } from 'vue'
import Modal from './cpt/Modal.vue'
const showModal = ref(false)
onMounted(() => {
    console.log(`Work组件挂载了`,);
})
onUnmounted(() => {
    console.log(`Work组件卸载了`,);
})
</script>

<style lang="scss" scoped>
.WorkBox {
    width: 100%;
   height: 30vh;
    border: 1px solid #333;
    margin-top: 30px;
    h1{
        color: orange;
        font-size: 22px;
    }
}
</style>