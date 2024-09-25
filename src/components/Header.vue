<script setup>
    import { RouterLink } from 'vue-router' 
</script>

<template>
    <header class="header">
        <div class="leftside">
            <a href="index.html">
                <img src="/public/images/egppreto.png" alt="Logo" class="logo">
            </a>
        </div>

        <div class="midleside">
            <div class="navbar">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/products">Produtos</RouterLink>
                <RouterLink to="/about">Sobre</RouterLink>
                <RouterLink to="/contact">Contato</RouterLink>
                <RouterLink to="/blog">Blog</RouterLink>
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

header.header {
    z-index: 999;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(255, 255, 255);
    height: 70px;
}

div.leftside {
    display: flex;
    align-items: center;
    gap: 15px;
}
div.leftside img {
    width: 180px;
    transition: calc(.4s);
    cursor: pointer;
    @media (max-width: 1280px) {
        width: 150px;
    }
}
div.leftside img:hover {
    transform: scale(1.025);
}

div.midleside {
    display: flex;
    align-items: center;
    gap: 55px;
    font-size: 20px;
    @media (max-width: 1280px) {
        font-size: 18px;
    }
}
div.midleside div.navbar {
    display: flex;
    align-items: center;
    gap: 15px;
    @media (max-width: 768px) {
        font-size: 10px;
        width: 100%;
    }
}
div.midleside div.navbar a {
    text-decoration: none;
    color: gray;
    transition: calc(.5s);
}
div.midleside div.navbar a:hover {
    color: #48939E;
    transform: scale(1.1);
    font-weight: bolder;
}
div.midleside div.socialmedia div.icons {
    display: flex;
    align-items: center;
    gap: 15px;
}
div.midleside div.socialmedia div.icons p {
    color: gray;
}
div.midleside div.socialmedia a {
    text-decoration: none;
    color: gray;
    transition: calc(.4s);
}
div.midleside div.socialmedia a:hover {
    color: #48939E;
    font-weight: bolder;
}

div.rightside {
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