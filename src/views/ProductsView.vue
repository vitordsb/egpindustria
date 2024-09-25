<script setup>
</script>

<template>
    <section class="portifolio">
        <div class="titulo">
            <h1>Fique por dentro das novidades</h1>
        </div>
        <div id="container-produtos-evp">
            <div id="container-pagina-produtos-evp"> 
                <div id="container-pagina-divs-produtos-evp">
                <img src="" id="container-pagina-imagens-produtos-evp" >
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
                <img src="" id="container-pagina-imagens-produtos-evp" >
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
                <img src="" id="container-pagina-imagens-produtos-evp" >
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
                    <img src="" id="container-pagina-imagens-produtos-evp">
                    <span id="titulo-do-produto"> CONTROLES </span>
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
                    <img src="" id="container-pagina-imagens-produtos-evp" >
                    <span id="titulo-do-produto">SIRENES</span>
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
                    <img src="" id="container-pagina-imagens-produtos-evp" >
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
                <button>Ver catálogo completo</button>
            </div>
    </section> <!--final portifolio-->
</template>

<style>
.portifolio {
  height: 1000px;
  margin-top: 50px;
  @media (max-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
}
.titulo {
  text-align: center;
  font-size: 40px;
  background-color: #5B9FC9;
  width: 50%;
  color: white;
  border-radius: 10px;
  box-shadow: #b3b3b3 2px 2px 2px 2px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
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
  width: 480px;
  border-radius: 10px;
  height: 310px;
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
  gap: 10px;
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
  margin-top: 20px;
  gap: 10px;
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
</style>