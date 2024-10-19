<template>
    <div id="container-pagina-produtos-evp">
          <div id="container-pagina-divs-produtos-evp">
            <img :src="img" id="container-pagina-imagens-produtos-evp"/>
            <span id="titulo-do-produto">{{title}}</span>
            <div id="botao-saibamais">
              <RouterLink :to="{path: specific}" class="botaodownload">
                Ver especificações
              </RouterLink>
            </div>
          </div>
      </div>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
  name: 'Produtos',
  components: {
    RouterLink,
  },  
    props: {
        title: String,
        img: String,
        specific: String
    }
}

</script>

<style scoped>
#container-pagina-produtos-evp{
  width: 230px;
  border-radius: 10px;
  height: 250px;
  border: #babdc6 1px solid;;
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
}
#container-pagina-produtos-evp:hover {
  background-color: #ffffff;
  transform: scale(1.025);
  border: #000000 1px solid;
  box-shadow: #000000 1px 1px 1px;
}
#container-pagina-imagens-produtos-evp{
  width: auto;
  height: 160px;
  margin: 10px;  
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

</style>