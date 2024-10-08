<template>
    <div class="background">
         <!-- Criando cards com os manuais da egp-->
        
         
         <div class="centrais">

             <div class="titulo">
                 <h1>Manual das centrais de choque</h1>
                </div>
                
            <div class="blocos">
                
                <Card title="Central 12V" subtitle="Eletrificador 12.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>

                <Card title="Central PLUG IN" subtitle="Eletrificador com módulo wifi" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>
                
                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>
             
                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>

                <Card title="Central 20V" subtitle="Eletrificador 20.000" text="Some quick example text to build on the card title and make up the bulk of the card's content." ver="#" baixar="#"/>

            </div><!--Final bloco 1-->
        </div><!--Final centrais-->
        <div class="Sirenes">

             <div class="titulo">
                 <h1>Manual das centrais de choque</h1>
                </div>
                
            <div class="blocos">

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
import { Card } from '@/components/card.jsx';

export default {
    name: 'ManualView',

    components: {
        Footer,
        Card
    }
}
</script>
<style>

.centrais {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sirenes {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.blocos {
    display: flex;
    align-items: center;
    gap: 30px;
}
.background {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
}
.links {
    gap: 10px;
}

.card {
  width: 18rem;
  height: 11rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #fff;
}

.card-body {
  padding: 10px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 1.0rem;
}

.card-link {
  font-size: 0.9rem;
  font-weight: bolder;
  color: #DB0E69;
  text-decoration: none;
  margin-right: 1rem;
}

.titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    font-size: 25px;
}
</style>