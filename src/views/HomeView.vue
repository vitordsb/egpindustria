<script setup>
import { ref, onMounted } from 'vue';
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
                        <img src="/public/images/products/12V imagem.png">
                    </div>
                    
                    <div class="carousel-slide">
                        <img src="/public/images/products/12V imagem.png">
                    </div>

                    <div class="carousel-slide">
                        <img src="/public/images/products/12V imagem.png">
                    </div>

                    <div class="carousel-slide">
                        <img src="/public/images/products/12V imagem.png">
                    </div>
                </div>
            </div><!--Final Carrousel-->

        </div><!--Final campos-->
            <div class="infos">
                <h1>GRUPO EGP</h1>
                <p>Venha conheceer a EGP</p>
                <div class="botoes">
                    <a target="_blank" href="http://localhost:8080">
                        <button>Atendimento Virtual</button>
                    </a>
                <a href="#" class="sla">
                    <button> 
                        <router-link to="/cliente"></router-link>
                        <h5>Seja nosso cliente</h5> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg> 
                    </button>
                </a>
                <a href="/pages/produtos.html" class="sla">
                    <button onclick="loadPage('./pages/produtos.html')">
                        <h5>Ver produtos</h5> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="36"fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg>
                    </button>
                </a>
            </div>
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
    width: 100%;
    height: 865px;
    background-size: cover;
    display: flex;
    align-items: center;
    border-bottom: #294459 3px solid;
    @media (max-width: 1280px) {
      height: 880px;
    }
}
.infos {
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
  width: 430px;
  height: 390px;
  margin-bottom: 10px;
  @media (max-width: 1280px) {
    width: 300px;
    height: 300px;
  }
}
  
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #294459;
  color: white;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
}
  
  .carousel-button.prev {
    left: 10px;
    background-color: transparent;
    z-index: -1;
  }
  
  .carousel-button.next {
    right: 10px;
    background-color:transparent;
    z-index: -1;
  }

  .botoes {
    display: grid;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
  }
  
  .botoes button {
    background-color: #DB0E69;
    color: white;
    border: none;
    font-size: 22px;
    padding: 10px 20px;
    cursor: pointer;
    transition: calc(.4s);
    border-radius: 5px;
  }

  .botoes button:hover {
    background-color: #DB0E69;
    transform: scale(1.1);
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
a {
  text-decoration: none;
}
.sla button {
    background-color: #DB0E69;
    color: white;
    display: flex;
    align-items: center;
    font-size: 24px;
    padding: 5px 10px;
    cursor: pointer;
    transition: calc(.4s);
    border-radius: 5px;
}
</style>
