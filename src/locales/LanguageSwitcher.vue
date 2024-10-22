<template>
    
  <div class="language">
      <button @click="changeLanguage('pt')">PT-BR</button>
      <button @click="changeLanguage('es')">ES-ES</button>
  </div>

</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();

    const changeLanguage = (lang) => {
      locale.value = lang; // Trocar o idioma
      localStorage.setItem('language', lang); // Persistir no localStorage
    };

    return {
      changeLanguage,
    };
  },
};
</script>

<style scoped>
.language {
  position: absolute;
  top: 100px;
  z-index: 999;
  right: 80px;
  @media (max-width: 680px) {
    position: inherit;
    display: flex;  
    justify-content: center;
  }
}
.language button {
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: none;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  transition: calc(.4s);
  border-radius: 5px;
  margin-right: 10px;
}
.language button:hover{
  background-color: #7c8287;
  color: white;
  transform: scale(1.05);
}
</style>
