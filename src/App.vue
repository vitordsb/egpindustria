<script >
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { Transition } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './locales/LanguageSwitcher.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    LanguageSwitcher,
    Transition,
  },

  setup() {
    const { t, locale } = useI18n();
    const changeLanguage = (lang) => {
      locale.value = lang;
    }
    return {
      t,
      changeLanguage
    }
  }
}

</script>

<template>
      <Header/>
        <Transition name="router" mode="out-in">
          <router-view v-slot="{Component}">
            <component :is="Component" :key="$router.fullPath">
              {{Component}}
            </component>
          </router-view>
        </Transition>
      <Footer/>
</template>

<style> 
.router-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.router-enter-active {
  transition: all 0.3s ease-out;
}
.router-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
.router-leave-active {
  transition: all 0.3s ease-out;
}
</style>
