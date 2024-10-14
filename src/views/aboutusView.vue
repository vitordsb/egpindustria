<script setup>
</script>

<template>
        <div class="background">  
            <div class="flexbox">
                <div class="image">
                    <img src="/images/AboutUs.png" alt="">
                </div>
                <div class="box-paises">
                    <h2>Nosso comércio exterior</h2>
                    <div class="grid-layout">
                            <div class="country">
                                <img src="/images/paises/angola.png" alt="Angola">
                                <p>Angola</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/argentina.png" alt="Argentina">
                                <p>Argentina</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/chile.png" alt="Chile">
                                <p>Chile</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/colombia.png" alt="Colombia">
                                <p>Colômbia</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/portorico.png" alt="Porto Rico">
                                <p>Porto Rico</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/guiana.png" alt="Guiana">
                                <p>Guiana</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/uruguai.png" alt="Uruguai">
                                <p>Uruguai</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/paraguai.png" alt="Paraguai">
                                <p>Paraguai</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/peru.png" alt="Peru">
                                <p>Peru</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/suriname.png" alt="Suriname">
                                <p>Suriname</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/venezuela.png" alt="Venezuela">
                                <p>Venezuela</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/méxico.png" alt="México">
                                <p>México</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/equador.png" alt="Equador">
                                <p>Equador</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/Nicaragua.png" alt="México">
                                <p>Nicaragua</p>
                            </div>
                            <div class="country">
                                <img src="/images/paises/Bolivia.png" alt="Bolivia">
                                <p>Bolivia</p>
                            </div>
                        </div><!--Final Grid Layout-->
                </div><!--Final box-paises-->
            </div> <!--Final flexbox-->
        </div> <!--Final background-->
</template>

<style scoped>

.flexbox {
    position: relative;
    border-radius: 20px;
    top: 50px;
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
.country {
    flex: 2 2 2;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin-top: -15px;
    @media (max-width: 1280px) {
        margin-top: 0;
    }
}
.country img {
    width: 100px;
    background-color: #283C55;
    border-radius: 50%;
    @media (max-width: 1280px) {
        width: 80px;
    }
}
</style>