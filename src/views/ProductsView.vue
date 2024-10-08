<script>
import { RouterLink } from 'vue-router'
import { Produtos } from '../components/Produtos.jsx';

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
  
  animacaoDeTransicao()
  
  const divTodosProdutos = document.getElementById("container-produtos-view");
  
  if (divTodosProdutos.style.display === "none") {
    botao.style.display = "none";
    background.style.marginTop = "0px";
    divTodosProdutos.style.display = "flex";
  }
  else {
    botao.style.display = "none";
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
  }
}

</script>

<template>
    <section class="portifolio">
          <div class="titulo">
              <h1>Lançamentos EGP 2024 !!!</h1>
          </div>
          
        <div id="container-produtos-evp"ref="produtosContainer">

          
                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />
                
                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

              </div><!--final de todos os produtos-->
                
            <div class="vejamais">
                <button v-on:click="abrirTodosProdutos" id="botao-vejamais">Ver catálogo completo</button>
            </div>

        <div id="container-produtos-view">

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />
                
                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

                <Produtos title="EGP GUARD ON" img="/public/images/products/12nobreak.png" specific="/public/images/products/12nobreak.pdf" />

        </div><!--final de todos os produtos-->

        
    </section> <!--final portifolio-->
</template>

<style>

.portifolio {
  height: 850px;
  width: 1920px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  @media (max-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
}
.titulo {
  text-align: center;
  width: 550px;
  font-size: 25px;
  background-color: #DB0E69;
  color: white;
  border-radius: 10px;
  box-shadow: #b3b3b3 1px 1px 1px 1px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media (max-width: 1280px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
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
  background-color: #8acaf1;
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
  height: 40px;
  padding: 5px;
  background: #5b9fc9;  
  font-family: arial;
  text-align: center;
  color: white;
  font-size: 17px;
  line-height: 40px;
  border-radius: 10px;
  transition: calc(.2s);
}
.botaodownload:hover {
  background-color: #315b75;
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
  transition: opacity 0.5s ease, height 0.5s ease; /* Transição suave para opacidade e altura */
}
#container-produtos-view.ativo {
  opacity: 1;   /* Aparece gradualmente */
  display: flex; /* Mostra o container */
}
</style>