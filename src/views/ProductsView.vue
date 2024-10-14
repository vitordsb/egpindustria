<script>
import { RouterLink } from 'vue-router'
import { Produtos } from '../components/jsx/Produtos.jsx';

export function animacaoDeTransicao() {
  const divTodosProdutos = document.getElementById("container-produtos-view");
  if (!divTodosProdutos.classList.contains("ativo")) {
    divTodosProdutos.classList.add("ativo");
    divTodosProdutos.style.height = "auto";
  } else {
    divTodosProdutos.classList.remove("ativo");
    divTodosProdutos.style.height = "0px";
  }
}

export function abrirTodosProdutos() {
  const botao = document.getElementById("botao-vejamais");
  const background = document.querySelector('.background');
  const botao2 = document.querySelector("#vermenos")
  animacaoDeTransicao()
  
  const divTodosProdutos = document.getElementById("container-produtos-view");
  
  if (divTodosProdutos.style.display === "none") {
    botao.style.display = "none";
    background.style.marginTop = "0px";
    divTodosProdutos.style.display = "flex";
  }
  else {
    botao.style.display = "none";
    botao2.style.display = "flex";
    background.style.marginTop = "550px"; 
  }
}
export function fecharTodosProdutos() {
  const botao2 = document.querySelector("#vermenos")
  const divTodosProdutos = document.getElementById("container-produtos-view");
  const background = document.querySelector('.background');
  const botao = document.getElementById("botao-vejamais");
  animacaoDeTransicao()

  if (divTodosProdutos.style.display === "flex") {
    botao2.style.display = "none";
    background.style.marginTop = "0px";
    divTodosProdutos.style.display = "none";
  }
  else {
    botao2.style.display = "none";
    botao.style.display = "flex";
    background.style.marginTop = "550px"; 
  }
}


export default {
  name: 'ProductsView',
  components: {
    RouterLink,
    Produtos,

  },
  methods: {
    abrirTodosProdutos,
    animacaoDeTransicao,
    fecharTodosProdutos,
  },
}

</script>

<template>
    <section class="portifolio">
          <div class="titulo">
              <img src="/public/images/IconeEGP.png" alt="">
              <h1>Lançamentos EGP <span>2024</span></h1>
          </div>
          
        <div id="container-produtos-evp"ref="produtosContainer">

          
                <Produtos title="EGP PLUG IN WIFI" img="/public/images/products/12Vimagem.png" specific="/public/images/products/12nobreak.pdf" />
                
                <Produtos title="EGP GUARD ON" img="/public/images/products/SirenePiezzo.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="MODULO WIFI" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="SIRENE STROBO" img="/public/images/products/SireneStrobo.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="CONTROLE COPIADOR" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="CONTROLE 4 BOTÕES" img="/public/images/products/controles.png" specific="/public/images/products/12nobreak.pdf" />

              </div><!--final de todos os produtos-->
                
            <div class="vejamais">
                <button v-on:click="abrirTodosProdutos" id="botao-vejamais">Ver catálogo completo</button>
            </div>

        <div id="container-produtos-view">

                <Produtos title="Haste Quadrada" img="/public/images/products/hastes.png" specific="/public/images/products/12nobreak.pdf"/>
                
                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                
              </div><!--final de todos os produtos-->
              <button id="vermenos" v-on:click="fecharTodosProdutos"> Ver menos</button>

        
    </section> <!--final portifolio-->
    
</template>

<style>
#vermenos{
  display: none;
  background-color: #3C6D7E;
  color: white;
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
  color: white;
  transform: scale(1.025);
}
.portifolio {
  height: 850px;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  @media (max-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
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
  height: 40px;
  gap: 20px;
  width: 500px;
  font-size: 25px;
  color: rgb(0, 0, 0);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media (max-width: 1280px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
}
.titulo span {
  font-weight: bolder;
  
  color: #DB0E69;
  font-size: 60px;
}
.titulo img {
  width: 80px;
}
#container-produtos-evp{
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1280px) {
    
  }
}
#container-pagina-produtos-evp{
  width: 270px;
  border-radius: 10px;
  height: 290px;
  border: #babdc6 2px solid;
  box-shadow: #bbbfc6 1px 1px 1px 1px;
  margin: 10px;
  background-color: transparent;
  transition: calc(.2s);
  @media (max-width: 1280px) {
    width: 370px;
    margin: 30px;
  }
}
#container-pagina-divs-produtos-evp{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 5px;
}
#container-pagina-produtos-evp:hover {
  background-color: #70c4f8;
  transform: scale(1.025);
  border: #000000 2px solid;
  box-shadow: #000000 1px 1px 1px;
}
#container-pagina-imagens-produtos-evp{
  width: auto;
  height: 160px;
  margin: 20px;  
}
#titulo-do-produto{
  font-family: arial;
  font-size: 20px;
  font-weight: bold;
  color: rgb(0, 0, 0);
} 
   /* Botão saiba mais */
#botao-saibamais {
  gap: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.botaodownload {
  height: 20px;
  padding: 5px;
  font-weight: bolder ;
  background: #DB0E69;  
  font-family: arial;
  text-align: center;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  transition: calc(.2s);
}
.botaodownload:hover {
  background-color: #a7054e;
  color: white;
}
a{
  font-family: arial;
  text-decoration: none;
}
.vejamais {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}
.vejamais button {
  background-color: #3C6D7E;
  color: white;
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
.vejamais button:hover {
  background-color: #5b9fc9;
  color: white;
  transform: scale(1.025);
}

#container-produtos-view {
  flex-wrap: wrap;
  justify-content: center;
  display: none; /* Oculto inicialmente */
  opacity: 0;    /* Invisível inicialmente */
}
#container-produtos-view.ativo {
  transition: opacity 0.5s ease-in-out;
  opacity: 1;   /* Aparece gradualmente */
  display: flex; /* Mostra o container */
}
</style>
