<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router' 
import Footer from '@/components/Footer.vue';
import aboutusView from './aboutusView.vue';

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
                        <img src="/public/images/products/controles.png">
                    </div>
                    <div class="carousel-slide">
                        <img src="/public/images/products/SirenePiezzo.png">
                    </div>
                    <div class="carousel-slide">
                        <img src="/public/images/products/hastes.png">
                    </div>
                </div>
            </div><!--Final Carrousel-->
        </div><!--Final campos-->
            <div class="infos">
              <div class="letras">
                <div class="logo">
                  <img src="../../public/images/IconeEGP.png" alt="">
                  <h1>GRUPO EGP</h1>
                </div>
                <p>Veja nossas novidades!</p>
              </div>
                 <div class="links">
                   <RouterLink to="/products">
                     <button class="botoes">
                       <h5>Ver produtos</h5> 
                     </button>
                   </RouterLink>
              
                   <RouterLink to="/manuais">
                     <button class="botoes"> 
                       <h5>Ver manuais</h5>
                     </button>
                   </RouterLink>
                   
                   <RouterLink to="/sejacliente">
                     <button class="botoes"> 
                       <h5>Seja nosso cliente</h5>
                    </button>
                  </RouterLink>

                  <RouterLink to="/sejafornecedor">
                    <button class="botoes"> 
                      <h5>Seja nosso fornecedor</h5>
                    </button>
                  </RouterLink>
                  
                  <RouterLink to="/electrabot">
                   <button class="botoes">
                     <h5>Atendimento Virtual</h5>
                   </button>
                 </RouterLink>
                 </div>
            </div>

            <div class="language">
                <button>PT-BR</button>
                <button>ES</button>
                <button>ENG</button>
            </div>
          </section><!--final banner-->
          <aboutusView/>


</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

}

.logo h1 {
  font-size: 110px;
  font-weight: bold;
}

.logo img {
  margin-top: 5px;
  width: 100px;
  height: 90px;
}
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

.links {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 510px;
}
.infos {
  margin-left: 40px;
  color: white;
}
.infos p {
  font-size: 65px;
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
  
.carousel-slide h1 {
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
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

.botoes {
  margin-top: 5px;
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
  font-size: 20px;
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
  transform: scale(1.05);
}
</style>
