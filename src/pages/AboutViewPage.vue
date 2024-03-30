<template>
    <div class="AboutViewPage">
        <h1> AboutViewPage</h1>
        <button @click="getUserInfo">getUserInfo11</button>
    </div>
</template>

<script setup>
import axios from 'axios';
let getUserInfo = () => {
    axios.get('/api/user')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
}
</script>

<style lang="scss" scoped></style>
