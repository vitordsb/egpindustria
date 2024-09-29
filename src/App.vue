<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header/>
    <transition name="route" mode="out-in">
      <router-view v-slot="{Component}">
        <component :is="Component" :key="$route.fullPath"/>
      </router-view>
    </transition>
  <Footer/>
</template>

<style>
/* Animação de entrada */
.route-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
/* Animação de saída */
.route-leave-to {
  opacity: 0; /* Fading out ao sair */
  transform: translateX(-10px);
}
.route-leave-active {
  transition: all 0.5s ease-out;
}
</style>
