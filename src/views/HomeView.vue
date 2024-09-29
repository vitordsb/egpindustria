<script setup>
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router' 
import ProductsView from './ProductsView.vue';
const track = ref(null);  
const currentIndex = ref(0);
const intervalTime = 1500;
const totalSlides = 4;  
function updateCarousel() {
    const offset = -currentIndex.value * 100;
    if (track.value) {
        track.value.style.transform = `translateX(${offset}%)`;
    }
}
function goToNextSlide() {
    currentIndex.value = (currentIndex.value + 1) % totalSlides;
    updateCarousel();
}
function goToPrevSlide() {
    currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
    updateCarousel();
}
onMounted(() => {
    setInterval(goToNextSlide, intervalTime);
});
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
                        <img src="/public/images/products/12nobreak.png">
                    </div>

                    <div class="carousel-slide">
                        <img src="/public/images/products/controles.png">
                    </div>

                    <div class="carousel-slide">
                        <img src="/public/images/products/SirenePiezzo.png">
                    </div>
                </div>
            </div><!--Final Carrousel-->

        </div><!--Final campos-->
            <div class="infos">
              <h1>GRUPO EGP</h1>
                <p>Venha conheceer a EGP</p>
                  <RouterLink to="/electrabot">
                    <button class="botoes">
                      <h5>Atendimento Virtual</h5>
                    </button>
                  </RouterLink>

                  <RouterLink to="/sejacliente">
                    <button class="botoes"> 
                      <h5>Seja nosso cliente</h5>
                    </button>
                  </RouterLink>

                  <RouterLink to="/products">
                    <button class="botoes">
                      <h5>Ver produtos</h5> 
                    </button>
                  </RouterLink>
            </div>

            <div class="language">
                <button>PT-BR</button>
                <button>ES</button>
                <button>ENG</button>
            </div>
    </section><!--final banner-->

</template>

<style scoped>
.banner {
  background-image: url(../images/background.jpg);
  width: auto;
  height: 900px;
  background-size: cover;
  display: flex;
  align-items: center;
  border-bottom: #294459 3px solid;
  @media (max-width: 1280px) {
    height: 880px;
  }
}
.infos {
  margin-left: 40px;
  color: white;
}
.infos h1 {
  font-size: 110px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 1920px) {
    font-size: 80px;
  }
}
.infos p {
  font-size: 45px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.campos {
    margin-left: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 30%;
    @media (max-width: 1280px) {
      margin-left: 320px;
    }
}
.carousel {
  position: relative;
  width: 1920px; /* Largura do carousel */
  overflow: hidden;
  @media (max-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
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
}
  
.carousel-slide img {
  width: auto;
  max-width: 100%;
  max-height: 500px;
  height: auto;
  @media (max-width: 1280px) {
    width: 300px;
    height: 300px;
  }
}
.infos {
  margin-top: -10px;
}
.botoes {
  margin-top: 15px;
  display: grid;
  align-items: center;
  border: none;
  gap: 10px;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  cursor: pointer;
  transition: calc(.4s);
  color: white;
  background-color: #DB0E69;
}
.botoes h5 {
  font-size: 18px;
}
  

.botoes:hover {
  background-color: #DB0E69;
  transform: scale(1.05);
}


.language {
  position: absolute;
  top: 90px;
  right: 20px;
}
.language button {
  background-color: transparent;
  color: white;
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
  transform: scale(1.1);
}
</style>
