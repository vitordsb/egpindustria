<script setup>
import { RouterLink } from 'vue-router';
import VoltarIcon from '/src/components/icons/VoltarIcon.vue';
</script>
<template>
    <button class="butao">
        <RouterLink to="/">
            <VoltarIcon/>
        </RouterLink>
    </button>
</template>
<style scoped>
.butao {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #DB0E69;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: calc(.4s);
    @media (max-width: 680px) {
        width: 40px;
        height: 40px;
        z-index: 1;
        height: auto;
        flex-direction: column-reverse;
    }
}
.butao i {
    font-size: 30px;
    color: white;
}
.butao:hover {
    background-color: #A80754;
    transform: scale(1.05);
}
</style>