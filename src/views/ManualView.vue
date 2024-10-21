<template>
    <div class="background">
         <!-- Criando cards com os manuais da egp-->
        
         <div class="centrais">

            <div class="titulo">    
            <h1>Manual produtos <img src="/public/images/IconeEGP.png" alt=""> EGP</h1>
            </div>
                
            <div class="blocos">
                
                <Card title="Central 12V" subtitle="Eletrificador 12.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>

                <Card title="Central PLUG IN" subtitle="Eletrificador com módulo wifi" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="/pluginView" baixar="#"/>
                
                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>
             
                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>

                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>
                <Card title="Central 12V" subtitle="Eletrificador 12.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>
        
                <Card title="Central PLUG IN" subtitle="Eletrificador com módulo wifi" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>
                
                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>
             
                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>
        
                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>

            </div><!--Final bloco 1-->
        </div><!--Final centrais-->

     </div><!-- Final container -->
</template>

<script>
import Footer from '@/components/Footer.vue';
import Card from '@/components/MiniComponents/Card.vue';

export default {
    name: 'ManualView',

    components: {
        Footer,
        Card,
    }
}
</script>
<style scoped>
.background {
    background-color: aliceblue;
}
.titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    font-size: 25px;
    @media (max-width: 680px) {
        width: auto;
        height: auto;
        font-size: 10px;
    }
}

.titulo h1 img{
    width: 33px;
    align-items: center;
    @media (max-width: 680px) {
        width: 16px;
  }
}
.centrais {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.blocos {
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    gap: 20px;
}
.background {
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 680px) {
        height: auto;
  }
}
.links {
    gap: 10px;
}
</style>