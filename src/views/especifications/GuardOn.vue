<template>
    <div class="background">
        <div class="titulo">
            <h1><img src="/public/images/IconeEGP.png">EGP GUARD ON</h1>
        </div>
        <button class="voltar">
            <RouterLink to="/products"> <VoltarIcon/>Voltar</RouterLink>
        </button>

        <div class="box">
            <div class="produto">
                <img src="/public/images/products/12Vimagem.png" alt="">
            </div>
            
            <div class="especification">
                <ul class="list">
                    <li>Liga e Desliga por controle chave e App</li>
                    <li>Tensão ajustável 8.000V, 12.000V e 15.000V</li>
                    <li>Tensão de operação 12Vcc</li>
                    <li>2 Setores de Alarme independentes</li>
                    <li>Energia 0,75J 1,75J</li>
                    <li>Entrada para sensores com e sem fio</li>
                    <li>Entrada para monitoramento</li>
                    <li>Sistema anti-sabotagem</li>
                    <li>Eletrifica de 0,1m a 7.000m de fio linear</li>
                    <li>Saída de rele CO/NA/NF</li>
                    <li>Saída Led Cerca</li>
                    <li>Saída CO/NA/NF</li>
                    <li>Saída Bip de Sirene Liga Desliga</li>
                    <li>Compatível com algumas das principais marcas</li>
                    <li>Nobreak</li>
                    <li>Saída de 12Vcc para alimentação de periféricos</li>
                </ul>
            </div>
            
        </div><!--Final box-->
    </div><!--Final background-->
</template>
<script>
import { RouterLink } from 'vue-router';
import VoltarIcon from '/src/components/icons/VoltarIcon.vue';

export default {
    name: 'pluginView',
    components: {
        RouterLink,
        VoltarIcon
    }
}

</script>
<style scoped>
a {
    gap: 10px;
    text-decoration: none;
    color: rgb(0, 0, 0);
}
.voltar {
    background-color: #DB0E69;
    color: rgb(0, 0, 0);
    width: 100px;
    text-decoration: none;
    padding: 5px;
    border: none;
    font-weight: bolder;
    font-size: 20px;
    transition: calc(.2s);
    border-radius: 10px;
    position: relative;
    left: 350px;
    cursor: pointer;
    top: 30px;
    @media (max-width: 680px) {
        position: relative;
        left: 10px;
        top: 10px;
    }
}
.especification {
    background-color: rgb(168, 214, 255);
    padding: 40px;
    box-shadow: rgb(0, 138, 198) 1px 1px 1px 2px;
    width: auto;
    color: rgb(0, 0, 0);
    font-size: 20px;
    border-radius: 10px;
    @media (max-width: 680px) {
        display: flex;
        flex-direction: column;
        width: 270px;
        gap: 10px;
    }
}
.list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 680px) {
        
    }
}
.list span {
    font-weight: bold;
    font-size: 20px;
    background-color: #DB0E69;
    padding: 5px;
    color: white;
    border-radius: 10px;
}
.background {
    background-color: #edf8ff;
    height: 80vh;
    @media (max-width: 680px) {
        display: flex;
        flex-direction: column;
    }
}
.titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vh;
    width: 100%;
    background-color: #3C6D7E;
    color: white;
    font-size: 30px;
    @media (max-width: 680px) {
        font-size: 10px;
        height: 10vh;
        width: 100%;
    }
}
.titulo h1{
    display: flex;
    align-items: center;
    gap: 10px;
}
.titulo h1 img {
    width: 50px;
}
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media (max-width: 680px) {
        display: flex;
        flex-direction: column;
    }
}
.produto img {
    @media (max-width: 680px) {
        width: 200px;
    }
}
</style>