<script >
import { RouterLink } from 'vue-router';
import DocumentIcon from '../components/icons/DocumentIcon.vue';

export default {
    name: 'Header',
    components: {
        RouterLink,
        DocumentIcon,
    },
    data() {
        return {
            isMobileOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = this.isMobileMenuOpen;
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
         }
    }
}

</script>

<template>
    <header class="header">
        <div class="leftside">
            <RouterLink to="/">
                <img src="/public/images/egppreto.png" alt="Logo" class="logo">
            </RouterLink>
        </div>

        <div class="midleside">
            <div class="navbar" :class="{open: isMobileMenuOpen}">
                <RouterLink @click="closeMobileMenu" to="/">Home</RouterLink>
                <RouterLink @click="closeMobileMenu" to="/products">Produtos</RouterLink>
                <RouterLink @click="closeMobileMenu" to="/manuais">Manuais</RouterLink>
                <RouterLink @click="closeMobileMenu" to="/aboutus">Sobre-nós</RouterLink>
                <RouterLink @click="closeMobileMenu" to="/contact">Contato</RouterLink>
                <RouterLink @click="closeMobileMenu" to="/loginpage">Login</RouterLink>
            </div>
                <a target="_blank" href="/src/assets/manuais/nobreak.pdf">
                    <div class="catalogo">
                        <DocumentIcon/>
                        Nosso Catálogo
                    </div>  
                </a>
        </div> <!--Final midleside-->

        <div class="rightside">
            <div class="app">
                <p>Baixe nosso app:</p>
                
                <a target="_blank" href="https://play.google.com/store/apps/details?id=br.com.grupoegp&hl=pt_BR">
                    <div class="googleplay">
                        <img id="googleplay" src="/images/googleplay.png" alt="Google Play">
                        <p>Google Play</p>
                    </div>
                </a>

                <a href="#">
                    <div class="applestore">
                        <img src="/images/AppleStore.png" alt="Apple Store">
                        <p>Apple Store</p>
                    </div>
                </a>
                
            </div>
        </div>
         <!-- Menu hambúrguer -->
        <div class="hamburger" @click="toggleMobileMenu">
            <span :class="{ 'is-open': isMobileMenuOpen }"></span>
            <span :class="{ 'is-open': isMobileMenuOpen }"></span>
            <span :class="{ 'is-open': isMobileMenuOpen }"></span>
        </div>

        <!-- Menu mobile -->
        <div v-if="isMobileMenuOpen" class="mobile-menu">
            <RouterLink @click="closeMobileMenu" to="/">Home</RouterLink>
            <RouterLink @click="closeMobileMenu" to="/products">Produtos</RouterLink>
            <RouterLink @click="closeMobileMenu" to="/manuais">Manuais</RouterLink>
            <RouterLink @click="closeMobileMenu" to="/aboutus">Sobre-nós</RouterLink>
            <RouterLink @click="closeMobileMenu" to="/contact">Contato</RouterLink>
            <RouterLink @click="closeMobileMenu" to="/loginpage">Login</RouterLink>
        </div>
    </header>
</template>

<style scoped>
.header {
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(255, 255, 255);
    height: 70px;
    @media (max-width: 680px) {
        height: 50px;
    }
}

a {
    color: white;
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
    @media (max-width: 680px) {
        width: 120px;
    }
}
.leftside img:hover {
    transform: scale(1.025);
}
.catalogo {
    font-weight: bold;
    background-color: #427D8D;
    color: white;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
}
.catalogo a {
    font-weight: bolder;
    text-decoration: none;
    display: flex;
    gap: 10px;
    color: rgb(255, 255, 255);
}
.catalogo a:hover,
.catalogo:hover {
    cursor: pointer;
    transform: scale(1.05);
    color: #000000;
    transition: calc(.5s);
}
.midleside {
    display: flex;
    gap: 50px;
    align-items: center;
    font-size: 20px;
}
.midleside .navbar {
    display: flex;
    align-items: center;
    gap: 15px;
}
.midleside .navbar a {
    text-decoration: none;
    color: gray;
    transition: calc(.5s);
}
.midleside .navbar a:hover {
    cursor: pointer;
    color: #3a7980;
    transform: scale(1.05);
}

.rightside {
    color: white;
    width: auto;
    height: 40px;
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: #DB0E69;
}
div.app {
    display: flex;
    align-items: center;
    gap: 30px;
}
div.app p {
    font-size: 20px;
    font-weight: bolder;
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

/* Menu hambúrguer */
.hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
}
.hamburger span {
    display: block;
    height: 4px;
    background-color: #333;
    transition: all 0.3s ease-in-out;
}
.hamburger span.is-open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}
.hamburger span.is-open:nth-child(2) {
    opacity: 0;
}
.hamburger span.is-open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* Menu mobile */
.mobile-menu {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.mobile-menu a {
    color: #333;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.3s;
}
.mobile-menu a:hover {
    color: #3a7980;
}

/* Tornar o botão hambúrguer visível em telas menores */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .midleside .navbar,
    .catalogo,
    .rightside {
        display: none; /* Esconder elementos maiores no mobile */
    }
}
</style>