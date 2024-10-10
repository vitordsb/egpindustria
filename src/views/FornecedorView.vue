<script>
import UserIcon from '../components/icons/UserIcon.vue';
import DocumentIcon from '../components/icons/DocumentIcon.vue';
import PhoneIcon from '../components/icons/PhoneIcon.vue';
import VoltarIcon from '../components/icons/VoltarIcon.vue';
import PredioIcon from '../components/icons/PredioIcon.vue';
import EnvelopeIcon from '../components/icons/EnvelopeIcon.vue';
import MensagemIcon from '../components/icons/MensagemIcon.vue';
export default {
    name: 'ClientView',
    //importando os icones
    components: {
        UserIcon,
        MensagemIcon,
        DocumentIcon,
        PhoneIcon,
        PredioIcon,
        EnvelopeIcon,
        VoltarIcon
    },
  data() {
    return {
      telefone: '',
      cnpj: '',
      cep: '',
      email: '',
      emailInvalido: false,
    };
  },
  methods: {
    formatarTelefone() {
      let valor = this.telefone.replace(/\D/g, '');
      if (valor.length > 11) {
        valor = valor.slice(0, 11);
      }
      if (valor.length > 6) {
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      } else if (valor.length > 2) {
        valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      } else if (valor.length > 0) {
        valor = valor.replace(/(\d{0,2})/, '($1');
      }
      this.telefone = valor;
    },
    formatarCNPJ() {
      let valor = this.cnpj.replace(/\D/g, '');
      if (valor.length > 14) {
        valor = valor.slice(0, 14);
      }
      if (valor.length > 12) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
      } else if (valor.length > 8) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, '$1.$2.$3/$4');
      } else if (valor.length > 5) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
      } else if (valor.length > 2) {
        valor = valor.replace(/(\d{2})(\d{0,3})/, '$1.$2');
      } else if (valor.length > 0) {
        valor = valor.replace(/(\d{0,2})/, '$1');
      }
      this.cnpj = valor;
    },
    formatarCEP() {
      let valor = this.cep.replace(/\D/g, '');
      if (valor.length > 8) {
        valor = valor.slice(0, 8);
      }
      if (valor.length > 5) {
        valor = valor.replace(/(\d{5})(\d{0,3})/, '$1-$2');
      }
      this.cep = valor;
    },
    validarEmail() {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailInvalido = !regexEmail.test(this.email);
    },
  },
};
</script>

<template>
    <main class="corpo">
        <div class="container">
            <div class="tela-cadastro">
                <form action="" method="post">

                    <RouterLink to="/">
                        <button class="butao">
                            <VoltarIcon/>
                        </button>
                    </RouterLink>

                    <h2>Seja nosso forncedor</h2>
                    <p>Preencha os dados abaixo</p>

                    <div class="input-div">
                        <div class="icon">
                            <UserIcon/>
                        </div>
                        <div>
                            <input class="input" type="text" name="" id="" placeholder="Razão Social/ Nome fantasia:">
                        </div>
                        
                    </div>

                    <div class="input-div">
                        <div class="icon">
                            <DocumentIcon/>
                        </div>
                        <div>
                            <input class="input" type="text" name="" v-model="cnpj" @input="formatarCNPJ" placeholder="CNPJ:">
                        </div>
                    </div>

                    <div class="input-div">
                        <div class="icon">
                            <PhoneIcon/>
                        </div>
                        <div>
                            <input class="input" type="text" v-model="telefone" @input="formatarTelefone" placeholder="Celular:">
                        </div>
                    </div>

                    <div class="input-div">
                        <div class="icon">
                            <EnvelopeIcon/>
                        </div>
                        <div>
                            <input class="input" type="text" v-model="email" @input="validarEmail" placeholder="Email:">
                        </div>
                    </div>

                    <div class="input-div">
                        <div class="icon">
                            <PredioIcon/>
                        </div>
                        <div>
                            <input class="input" type="text" v-model="cep" @input="formatarCEP" placeholder="CEP:">
                        </div>
                    </div>
                    <div class="areatexto">
                        <div class="icon">
                            <MensagemIcon/>
                        </div>
                        <div>
                            <textarea class="textarea"name="mensagem" id="mensagem" cols="60" rows="5"/>
                        </div>
                    </div>


                    <input class="btn" type="submit" value="Cadastar">
                </form>
                
            </div>
            <div class="img">
                <div class="backshape"> 
                    <img src="/images/IconeEGP.png" alt="">
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.textarea {
    resize: none;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    outline: none;
    background: none;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: #555;
}
.areatexto {
    gap: 10px;
    display: flex;
    align-items: center;
}
.corpo {
    display: flex;
    justify-content: center;
    height: 750px;
}

.container{
    top: 5%;
    display: flex;
    justify-content: center;
    gap: 30px;
    position: relative;
    background-color: #75b1c4;
    max-width: 1200px;
    box-shadow: #3e6e7d 2px 2px 2px;
    width: 1300px;
    border-radius: 10px;
    height: auto;
}

.img{
    display: flex;
    align-items: center;
}
.tela-cadastro{
    position: relative;
    top: 50px;
    background-color: white;
    display: flex;
    padding: 70px;
    border-radius: 10px;
    height: 520px;
    align-items: center;
}

form{
    width: 460px;
    text-align: center;
}

form h2{
    font-size: 3rem;
    margin-bottom: 5px;
    color: rgb(63, 61, 86);
}

.input-div{
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 20px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
    transition: all .5s;
}

.input-div.first{
    margin-top: 0;
}

.input-div.last{
    margin-bottom: 4px;
}

.icon{
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon i{
    color: #000000;
    transition: all .5s;
    font-size: 20px;
}

.input{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    outline: none;
    background: none;
    padding: .3rem .7rem;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: #555;
}

.input-div:focus-within{
    border-bottom: 2px solid #CB1464;
}

.input-div:focus-within .icon i{
    color: #CB1464;
}

.btn{
    font-family: 'Poppins', sans-serif;
    display: block;
    width: 50%;
    height: 40px;
    border-radius: 10px;
    margin: 2.5rem auto 1rem auto;
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    color: #fff;
    background-image: linear-gradient(to right, rgb(248, 1, 92), rgb(255, 32, 114), rgb(255, 0, 123));
    background-size: 200%;
    transition: all .5s;
}

.butao {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 80px;
    width: 50px;
    height: 50px;
    background-color: #DB0E69;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: calc(.4s);
}
.butao i {
    font-size: 30px;
}
.butao:hover {
    background-color: #A80754;
    transform: scale(1.05);
}

</style>