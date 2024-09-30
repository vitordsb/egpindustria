<script>
import { RouterLink } from 'vue-router'


export function abrirTodosProdutos() {
  const botao = document.getElementById("botao-vejamais");
  const background = document.querySelector('.background');
  //Pegar o elemento da div que vai abrir todos os produtos
  const divTodosProdutos = document.getElementById("container-produtos-view");
  if (divTodosProdutos.style.display === "none") {
    botao.style.display = "none";
    background.style.marginTop = "0px";
    divTodosProdutos.style.display = "flex";
    divTodosProdutos.style.flexWrap = "wrap";
    divTodosProdutos.style.justifyContent = "center";
  } else {
    divTodosProdutos.style.display = "flex";
    divTodosProdutos.style.flexWrap = "wrap";
    divTodosProdutos.style.justifyContent = "center";
    botao.style.display = "none";
    background.style.marginTop = "550px"; 
  }
  
}

export default {
  components: {
    RouterLink
  },
  methods: {
    abrirTodosProdutos,
  }
}

</script>

<template>
    <section class="portifolio">
        <div class="titulo">
            <h1>Fique por dentro das novidades</h1>
        </div>
        <div id="container-produtos-evp">
            <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                <img src="/public/images/products/12Vimagem.png" id="container-pagina-imagens-produtos-evp" >
                <span id="titulo-do-produto"> EGP PLUG IN WIFI </span>
                    <div class="botao-saibamais" id="botao-saibamais"> 
                    <a href="">
                        <div class="botaodownload">Ver Especificações</div>
                    </a>
                    <a href="#">
                        <div class="botaodownload">Ver manual</div>
                    </a> 
                </div>
                </div>
                </div> <!--final primeiro produto-->
                
                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                <img src="/public/images/products/12nobreak.png" id="container-pagina-imagens-produtos-evp" >
                <span id="titulo-do-produto"> EGP GUARD ON</span>
                    <div id="botao-saibamais"> 
                    <a href="">
                        <div class="botaodownload"> Ver Especificações</div>
                    </a>
                    <a href="#">
                        <div class="botaodownload"> Ver manual</div>
                    </a> 
                </div>
                </div>
                </div><!--Final segundo produto-->

                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                <img src="/public/images/products/12Vimagem.png" id="container-pagina-imagens-produtos-evp" >
                <span id="titulo-do-produto"> MÓDULO WIFI EGP </span>
                    <div id="botao-saibamais"> 
                    <a href="">
                        <div class="botaodownload"> Ver Especificações</div>
                    </a>
                    <a href="#">
                        <div class="botaodownload"> Ver manual</div>
                    </a> 
                </div>
                </div>
                </div><!--Final terceiro produto-->

                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                    <img src="/public/images/products/SireneStrobo.png" id="container-pagina-imagens-produtos-evp">
                    <span id="titulo-do-produto"> SIRENES </span>
                    <div class="botao-saibamais" id="botao-saibamais"> 
                        <a href="">
                            <div class="botaodownload">Ver Especificações</div>
                        </a>
                        <a href="#">
                            <div class="botaodownload">Ver manual</div>
                        </a> 
                    </div>
                    </div>
                </div> <!--final quarto produto-->

                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                    <img src="/public/images/products/controles.png" id="container-pagina-imagens-produtos-evp" >
                    <span id="titulo-do-produto">CONTROLES </span>
                    <div id="botao-saibamais"> 
                        <a href="">
                            <div class="botaodownload"> Ver Especificações</div>
                        </a>
                        <a href="#">
                            <div class="botaodownload"> Ver manual</div>
                        </a> 
                    </div>
                    </div>
                </div><!--Final quinto produto-->

                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                    <img src="/public/images/products/hastes.png" id="container-pagina-imagens-produtos-evp" >
                    <span id="titulo-do-produto"> HASTES </span>
                    <div id="botao-saibamais"> 
                        <a href="">
                            <div class="botaodownload"> Ver Especificações</div>
                        </a>
                        <a href="#">
                            <div class="botaodownload"> Ver manual</div>
                        </a> 
                    </div>
                    </div>
                </div><!--Final sexto produto-->

        </div><!--final de todos os produtos-->

            <div class="vejamais">

                <button v-on:click="abrirTodosProdutos" id="botao-vejamais">Ver catálogo completo</button>

            </div>
          
        <div id="container-produtos-view">
            <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                <img src="/public/images/products/12Vimagem.png" id="container-pagina-imagens-produtos-evp" >
                <span id="titulo-do-produto"> EGP PLUG IN WIFI </span>
                    <div class="botao-saibamais" id="botao-saibamais"> 
                    <a href="">
                        <div class="botaodownload">Ver Especificações</div>
                    </a>
                    <a href="#">
                        <div class="botaodownload">Ver manual</div>
                    </a> 
                </div>
                </div>
                </div> <!--final primeiro produto-->
                
                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                <img src="/public/images/products/12nobreak.png" id="container-pagina-imagens-produtos-evp" >
                <span id="titulo-do-produto"> EGP GUARD ON</span>
                    <div id="botao-saibamais"> 
                    <a href="">
                        <div class="botaodownload"> Ver Especificações</div>
                    </a>
                    <a href="#">
                        <div class="botaodownload"> Ver manual</div>
                    </a> 
                </div>
                </div>
                </div><!--Final segundo produto-->

                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                <img src="/public/images/products/12Vimagem.png" id="container-pagina-imagens-produtos-evp" >
                <span id="titulo-do-produto"> MÓDULO WIFI EGP </span>
                    <div id="botao-saibamais"> 
                    <a href="">
                        <div class="botaodownload"> Ver Especificações</div>
                    </a>
                    <a href="#">
                        <div class="botaodownload"> Ver manual</div>
                    </a> 
                </div>
                </div>
                </div><!--Final terceiro produto-->

                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                    <img src="/public/images/products/SireneStrobo.png" id="container-pagina-imagens-produtos-evp">
                    <span id="titulo-do-produto"> SIRENES </span>
                    <div class="botao-saibamais" id="botao-saibamais"> 
                        <a href="">
                            <div class="botaodownload">Ver Especificações</div>
                        </a>
                        <a href="#">
                            <div class="botaodownload">Ver manual</div>
                        </a> 
                    </div>
                    </div>
                </div> <!--final quarto produto-->

                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                    <img src="/public/images/products/controles.png" id="container-pagina-imagens-produtos-evp" >
                    <span id="titulo-do-produto">CONTROLES </span>
                    <div id="botao-saibamais"> 
                        <a href="">
                            <div class="botaodownload"> Ver Especificações</div>
                        </a>
                        <a href="#">
                            <div class="botaodownload"> Ver manual</div>
                        </a> 
                    </div>
                    </div>
                </div><!--Final quinto produto-->

                <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                    <img src="/public/images/products/hastes.png" id="container-pagina-imagens-produtos-evp" >
                    <span id="titulo-do-produto"> HASTES </span>
                    <div id="botao-saibamais"> 
                        <a href="">
                            <div class="botaodownload"> Ver Especificações</div>
                        </a>
                        <a href="#">
                            <div class="botaodownload"> Ver manual</div>
                        </a> 
                    </div>
                    </div>
                </div><!--Final sexto produto-->

        </div><!--final de todos os produtos-->

        
    </section> <!--final portifolio-->
</template>

<style>
.portifolio {
  height: 850px;
  width: 1500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  @media (max-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
}
.titulo {
  text-align: center;
  font-size: 40px;
  background-color: #5B9FC9;
  width: 60%;
  color: white;
  border-radius: 10px;
  box-shadow: #b3b3b3 2px 2px 2px 2px;
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
  width: 400px;
  border-radius: 10px;
  height: 290px;
  border: #babdc6 2px solid;
  box-shadow: #bbbfc6 1px 1px 1px 1px;
  margin: 20px;
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
  background-color: #5b9fc9;
  transform: scale(1.025);
  border: #000000 2px solid;
  box-shadow: #000000 1px 2px 2px 1px;
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
  background: #DB0E69;  
  font-family: arial;
  text-align: center;
  color: white;
  font-size: 17px;
  line-height: 40px;
  border-radius: 10px;
  transition: calc(.2s);
}
.botaodownload:hover {
  background-color: #a71456;
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

#container-produtos-view{
  display: none;

}
</style>