<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="header">
        <div class="leftside">
            <RouterLink to="/">
                <img src="/public/images/egppreto.png" alt="Logo" class="logo">
            </RouterLink>
        </div>

        <div class="midleside">
            <div class="navbar">
                <RouterLink to="/products">Produtos</RouterLink>
                <RouterLink to="/manuais">Manuais</RouterLink>
                <RouterLink to="/about">Sobre-nós</RouterLink>
                <RouterLink to="/contact">Contato</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
            </div>
        </div> <!--Final midleside-->

        <div class="rightside">
            <div class="app">
                <p>Baixe nosso app:</p>
                    <div class="applestore">
                        <img src="/images/AppleStore.png" alt="Apple Store">
                        <p>Apple Store</p>
                    </div>

                    <div class="googleplay">
                        <img id="googleplay" src="/images/googleplay.png" alt="Google Play">
                        <p>Google Play</p>
                    </div>
            </div>
        </div>
    </header>
</template>

<style scoped>

.header {
    z-index: 999;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(255, 255, 255);
    height: 70px;
}


.leftside {
    display: flex;
    align-items: center;
    gap: 15px;
}
.leftside img {
    width: 180px;
    transition: calc(.4s);
    cursor: pointer;
    @media (max-width: 1280px) {
        width: 150px;
    }
}
.leftside img:hover {
    transform: scale(1.025);
}

.midleside {
    display: flex;
    align-items: center;
    font-size: 20px;
    @media (max-width: 1280px) {
        font-size: 18px;
    }
}
.midleside .navbar {
    display: flex;
    align-items: center;
    gap: 15px;
    @media (max-width: 768px) {
        font-size: 10px;
        width: 100%;
    }
}
.midleside .navbar a {
    text-decoration: none;
    color: gray;
    transition: calc(.5s);
    &:hover{
        cursor: pointer;
        color: #3a7980;
        transform: scale(1.05);
    }
}

.rightside {
    color: white;
    width: 530px;
    height: 40px;
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: #DB0E69;
    @media (max-width: 1280px) {
        width: 450px;
    }
}
div.app  {
    display: flex;
    align-items: center;
    gap: 30px;
}
div.app p {
    font-size: 20px;
    font-weight: bolder;
    @media (max-width: 1280px) {
        font-size: 16px;
    }
}

div.app div.googleplay img {
    width: 45px;
}
div.app div.googleplay {
    gap: 10px;
    display: flex;
    align-items: center;
    transition: calc(.4s);
}
div.app div.applestore {
    gap: 10px;
    align-items: center;
    display: flex;
    transition: calc(.4s);
}
div.app div.applestore img {
    width: 55px;
}
div.app div.applestore:hover {
    cursor: pointer;
    transform: scale(1.05);
}
div.app div.googleplay:hover {
    cursor: pointer;
    transform: scale(1.05);
}
</style>