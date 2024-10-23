<script >
import Pais from '@/components/MiniComponents/Pais.vue';
export default {
    name: "aboutus",
    components: {
        Pais,
    }
}
</script>

<template>
    <div class="background">  
        <div class="flexbox">
            <div class="image">
                <img src="/src/images/AboutUs.png" alt="">
            </div>
            <div class="box-paises">
                    <h2>Nosso comércio exterior</h2>
                <div class="grid-layout">
                    <Pais nome="Angola" img="/src/images/paises/angola.png"/>
                    <Pais nome="Argentina" img="/src/images/paises/argentina.png"/>
                    <Pais nome="Chile" img="/src/images/paises/chile.png"/>
                    <Pais nome="Colombia" img="/src/images/paises/colombia.png"/>
                    <Pais nome="Porto Rico" img="/src/images/paises/portorico.png"/>
                    <Pais nome="Guiana" img="/src/images/paises/guiana.png"/>
                    <Pais nome="Uruguai" img="/src/images/paises/uruguai.png"/>
                    <Pais nome="Paraguai" img="/src/images/paises/paraguai.png"/>
                    <Pais nome="Peru" img="/src/images/paises/peru.png"/>
                    <Pais nome="Suriname" img="/src/images/paises/suriname.png"/>
                    <Pais nome="Venezuela" img="/src/images/paises/venezuela.png"/>
                    <Pais nome="México" img="/src/images/paises/méxico.png"/>
                    <Pais nome="Equador" img="/src/images/paises/equador.png"/>
                    <Pais nome="Nicaragua" img="/src/images/paises/Nicaragua.png"/>
                    <Pais nome="Bolivia" img="/src/images/paises/Bolivia.png"/>
                </div><!--Final Grid Layout-->
            </div><!--Final box-paises-->
        </div> <!--Final flexbox-->
    </div> <!--Final background-->
    <Footer/>
</template>

<style scoped>

.background {
    margin-bottom: 80px;
    background-color: aliceblue;
    @media (max-width: 680px) {
        width: auto;
        height: auto;
        padding: 10px;
    }
}

.flexbox {
    position: relative;
    border-radius: 20px;
    top: 30px;
    height: 750px;
    display: flex;
    width: 1500px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(225, 225, 225);
    align-items: center;
    @media (max-width: 1280px) {
        width: 1300px;
    }
    @media (max-width: 680px) {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
    }
}
.box-paises {
    width: 900px;
    height: 600px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1280px) {
        width: 700px;
        height: 560px;
    }
    @media (max-width: 680px) {
        width: auto;
        height: auto;
    }
    
}
.box-paises h2 {
    margin-bottom: 50px;
    text-align: center;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    font-size: 40px;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    background-color: #fa0d6c;
    font-weight: bold;
    @media (max-width: 680px) {
        width: auto;
        height: auto;
        font-size: 30px;
    }
}
.grid-layout {
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 80px;
    justify-content: center;
    @media (max-width: 1280px) {
        gap: 50px;
    }
}
.image img {
    @media (max-width: 680px) {
        width: 350px;
        height: auto;
        padding: 10px;
    }
}

</style>