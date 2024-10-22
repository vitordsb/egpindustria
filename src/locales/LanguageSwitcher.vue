<template>
    
  <div class="language">
      <button @click="changeLanguage('pt')"> <img src="/public/brasil.png" alt="">PT-BR</button>
      <button @click="changeLanguage('es')"> <img src="/public/espanha.png" alt="">ES-ES</button>
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
    display: flex;
  position: relative;
  @media (max-width: 680px) {
    position: inherit;
  }
}
.language button {
  background-color: transparent;
  color: rgb(4, 4, 4);
  border: none;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  transition: calc(.4s);
  border-radius: 5px;
  margin-right: 10px;
}
.language button:hover{
  background-color: #dddddd;
  transform: scale(1.05);
}
.language button img {
    width: 20px;
}
</style>
