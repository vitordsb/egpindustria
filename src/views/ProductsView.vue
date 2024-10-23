<template>
    <section class="portifolio">
          <div class="titulo">
              <img src="/src/images/IconeEGP.png" alt="">
              <h1>Lançamentos EGP <span>2024</span></h1>
          </div>
          
        <div id="container-produtos-evp"ref="produtosContainer">

            <Produtos title="EGP Plug IN WI-FI" img="/src/images/products/12Vimagem.png" specific="/pluginView"/>

            <Produtos title="EGP GUARD ON" img="/src/images/products/12Vimagem.png" specific="/guardon"/>

            <Produtos title="Módulo WI-FI" img="/src/images/products/Modulo Wifi.png" specific="/public/images/products/12nobreak.pdf"/>

            <Produtos title="Sirene Strobo" img="/src/images/products/SireneStrobo.png" specific="/public/images/products/12nobreak.pdf"/>

            <Produtos title="Controle Copiador" img="/src/images/products/Controle 4b copiador.png" specific="/public/images/products/12nobreak.pdf"/>

            <Produtos title="Controle 4 Botões" img="/src/images/products/CONTROLE_4B.png" specific="/public/images/products/12nobreak.pdf"/>
        </div><!--final container-produtos-evp-->
                
            <div class="vejamais">
                <button v-on:click="abrirTodosProdutos" id="botao-vejamais">Ver catálogo completo</button>
            </div>

        <div id="container-produtos-view">

            <Produtos title="Haste Quadrada" img="/src/images/products/hastes.png" specific="/public/images/products/12nobreak.pdf"/>

            <Produtos title="EGP GUARD ON" img="/src/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf"/>

            <Produtos title="EGP GUARD ON" img="/src/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf"/>
            
            <Produtos title="EGP GUARD ON" img="/src/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf"/>

            <Produtos title="EGP GUARD ON" img="/src/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf"/>   

            <Produtos title="EGP GUARD ON" img="/src/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf"/>    
              
        </div><!--final de todos os produtos-->
      <button id="vermenos" v-on:click="fecharTodosProdutos">Ver menos</button>
    </section> <!--final portifolio-->
</template>

<script>
import Produtos from '@/components/MiniComponents/Produtos.vue';
import { RouterView } from 'vue-router';

export default {
  name: 'ProductsView',
  components: {
    Produtos,
    RouterView,
  },
  methods: {
    abrirTodosProdutos() {
      const botao = document.getElementById("botao-vejamais");
      const botao2 = document.getElementById("vermenos");
      const divTodosProdutos = document.getElementById("container-produtos-view");
      botao.style.display = "none";
      divTodosProdutos.classList.add("ativo");
      setTimeout(() => {
        botao2.style.display = "flex";
        divTodosProdutos.classList.add("ativo");
      }, 100);// Adiciona a classe que mostra o container
    },
    fecharTodosProdutos() {
      const botao = document.getElementById("botao-vejamais");
      const botao2 = document.getElementById("vermenos");
      const divTodosProdutos = document.getElementById("container-produtos-view");
      divTodosProdutos.classList.remove("ativo"); // Remove a classe para esconder o container
      setTimeout(() => {
        divTodosProdutos.classList.remove("ativo");
        botao.style.display = "flex";
        botao2.style.display = "none";
      }, 500);
    }
  }
}

</script>

<style scoped>

#vermenos{
  display: none;
  background-color: #3C6D7E;
  color: white;
  margin-top: 15px;
  border: none; 
  font-weight: bolder;
  font-size: 17px;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: calc(.2s);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  
}
#vermenos:hover {
  background-color: #5b9fc9;
  color: rgb(0, 0, 0);
  transform: scale(1.025);
}
.portifolio {
  height: 850px;
  background-color: #edf8ff;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  @media (max-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
    height: auto;
  }
  @media (max-width: 680px) {
    height: auto;
  }
}

.titulo h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 30px;
  position: relative;
  height: 40px;
  gap: 20px;
  width: 600px;
  font-size: 25px;
  color: rgb(0, 0, 0);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  @media (max-width: 680px) {
    font-size: 16px;
    gap: 10px;
    width: auto;
    margin-bottom: 50px;
  }
}
.titulo span {
  font-weight: bolder;
  color: #DB0E69;
  font-size: 60px;
  @media (max-width: 680px) {
    font-size: 30px;
  }
}
.titulo img {
  width: 80px;
  @media (max-width: 680px) {
    width: 50px;
  }
}
#container-produtos-evp{
  display: flex;
  position: relative;
  top: 3%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1280px) {
    
  }
}
.vejamais {
  display: flex;
  margin-top: 2%;
  justify-content: center;
}
.vejamais button {
  background-color: #3C6D7E;
  color: white;
  border: none;
  font-weight: bolder;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: calc(.2s);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.vejamais button:hover {
  background-color: #5b9fc9;
  color: rgb(0, 0, 0);
  transform: scale(1.025);
}

#container-produtos-view {
  gap: 20px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 0;  /* Altura inicial zero */
  opacity: 0;
  transition: linear 0.5s;
}
#container-produtos-view.ativo {
  max-height: 10000px; /* Ajuste o valor conforme necessário */
  opacity: 1;
  transition: linear 0.5s;
}
</style>
