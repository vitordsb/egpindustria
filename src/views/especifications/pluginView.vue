<template>
    <div class="background">
        <div class="titulo">
            <h1><img src="/public/images/IconeEGP.png">EGP PLUG IN WI-FI</h1>
        </div>
        <button class="voltar">
            <RouterLink to="/products"> <VoltarIcon/>{{ $t('back') }}</RouterLink>
        </button>

        <div class="box">
            <div class="produto">
                <img src="/public/images/products/12Vimagem.png" alt="">
            </div>
            
            <div class="especification">
                <ul class="list">
                    <li><span>{{$t('Comes with WI-FI Module')}}</span></li>
                    <li>{{$t('On/Off via key control and App')}}</li>
                    <li>{{$t('Adjustable voltage 8,000V, 12,000V, and 15,000V')}}</li>
                    <li>{{$t('Operating voltage 12V DC')}}</li>
                    <li>{{$t('2 Independent Alarm Zones')}}</li>
                    <li>{{$t('Energy 0.75J 1.75J')}}</li>
                    <li>{{$t('Input for wired and wireless sensors')}}</li>
                    <li>{{$t('Input for monitoring')}}</li>
                    <li>{{$t('Anti-tampering system')}}</li>
                    <li>{{$t('Electrifies from 0.1m to 7,000m of wire linear')}}</li>
                    <li>{{$t('Relay output CO/NA/NF')}}</li>
                    <li>{{$t('Fence LED output')}}</li>
                    <li>{{$t('CO/NA/NF output')}}</li>
                    <li>{{$t('Siren Beep On/Off output')}}</li>
                    <li>{{$t('Compatible with some major brands')}}</li>
                    <li>{{$t('Uninterruptible power supply')}}</li>
                    <li>{{$t('12V DC output for peripheral power supply')}}</li>
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
        height: auto;
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
        height: auto;
        margin-bottom: 20px;
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
        height: auto;
    }
}
.produto img {
    @media (max-width: 680px) {
        width: 200px;
    }
}

</style>