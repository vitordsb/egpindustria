<script>
import { RouterLink } from 'vue-router';
import LanguageSwitcher from '@/locales/LanguageSwitcher.vue';

export default {
  name: 'HomeView',
  components: {
    RouterLink,
    LanguageSwitcher
  },
  data() {
    return {
      track: null,
      currentIndex: 0,
      intervalTime: 1500,
      totalSlides: 4,
    };
  },
  methods: {
    updateCarousel() {
      const offset = -this.currentIndex * 100;
      if (this.track) {
        this.track.style.transform = `translateX(${offset}%)`;
      }
    },
    goToNextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      this.updateCarousel();
    },
    // Método para trocar o idioma
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Trocar o idioma usando this.$i18n
      localStorage.setItem('language', lang); // Persistir o idioma selecionado
    },
  },
  mounted() {
    this.track = this.$refs.track;
    setInterval(this.goToNextSlide, this.intervalTime);
  },
};
</script>

<template>
  <section class="banner">
    <div class="campos">
      <div class="carousel">
        <div class="carousel-track" ref="track">
          <div class="carousel-slide">
            <img src="/public/images/products/12Vimagem.png">
          </div>
          <div class="carousel-slide">
            <img src="/public/images/products/controles.png">
          </div>
          <div class="carousel-slide">
            <img src="/public/images/products/SirenePiezzo.png">
          </div>
          <div class="carousel-slide">
            <img src="/public/images/products/hastes.png">
          </div>
        </div>
      </div>
    </div>
    
    <div class="infos">
      <div class="letras">
        <div class="logo">
          <img src="/public/images/IconeEGP.png" alt="">
          <h1>GRUPO EGP</h1>
        </div>
        <p>{{ $t('best_manufacturer') }}</p> <!-- Exemplo de tradução -->
      </div>

      <div class="links">
        <RouterLink to="/products">
          <button class="botoes">
            <h5>{{ $t('view_products') }}</h5>
          </button>
        </RouterLink>
        <RouterLink to="/manuais">
          <button class="botoes">
            <h5>{{ $t('view_manuals') }}</h5>
          </button>
        </RouterLink>
        <RouterLink to="/sejacliente">
          <button class="botoes">
            <h5>{{ $t('become_client') }}</h5>
          </button>
        </RouterLink>
        <RouterLink to="/electrabot">
          <button class="botoes">
            <h5>{{ $t('virtual_assistant') }}</h5>
          </button>
        </RouterLink>
        <RouterLink to="/aboutus">
          <button class="botoes">
            <h5>{{ $t('about') }}</h5>
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 680px) {
    display: inline;
  }
}

.logo h1 {
  font-size: 90px;
  font-weight: bold;
  color: white;
  @media (max-width: 680px) {
    font-size: 50px;
  }
}

.logo img {
  margin-top: 5px;
  width: 90px;
  height: 80px;
}
.banner {
  background-image: url(../images/background.jpg);
  width: auto;
  height: 900px;
  background-size: auto;
  display: flex;
  align-items: center;
  border-bottom: #294459 3px solid;
  @media (max-width: 915px) {
    height: auto;
    gap: 50px;
    background-size: auto;
    text-align: center;
    width: auto;
    flex-direction: column-reverse;
  }
}

.links {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 510px;
  @media (max-width: 680px){
    flex-direction: column;
    width: auto;
    margin: auto;
  }
}
.infos {
  margin-left: 40px;
  color: white;
  @media (max-width: 680px) {
    margin-top: 20px;
    margin-left: 0px;
  }
}
.infos p {
  font-size: 35px;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.campos {
    margin-left: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 30%;
    @media (max-width: 680px) {
      margin-left: 0px;
      width: 200px;
      height: 200px;
    
  }
}
.carousel {
  position: relative;
  width: 1920px; /* Largura do carousel */
  overflow: hidden;
  @media (max-width: 680px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 350px;
    margin-bottom: 50px;
  }
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
  
.carousel-slide {
  min-width: 100%; /* Cada slide ocupa toda a largura */
  box-sizing: border-box;
  text-align: center;
  @media (max-width: 680px) {
      width: auto;
      height: auto;
      padding: 10px;
  }

}
  
.carousel-slide h1 {
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.carousel-slide img {
  width: auto;
  max-width: 100%;
  max-height: auto;
  height: auto;
  @media (max-width: 1280px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 680px) {
      width: auto;
      height: auto;
      padding: 0;
  }
}

.botoes {
  margin-top: 5px;
  align-items: center;
  border: none;
  gap: 10px;
  border-radius: 5px;
  width: 220px;
  height: 45px;
  cursor: pointer;
  transition: calc(.4s);
  color: white;
  background-color: #DB0E69;
}
.botoes h5 {
  font-size: 20px;
}
  

.botoes:hover {
  background-color: #DB0E69;
  transform: scale(1.05);
}



</style>
