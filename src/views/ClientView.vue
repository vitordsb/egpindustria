<script>
import UserIcon from '../components/icons/UserIcon.vue';
import DocumentIcon from '../components/icons/DocumentIcon.vue';
import PhoneIcon from '../components/icons/PhoneIcon.vue';
import VoltarIcon from '../components/icons/VoltarIcon.vue';
import PredioIcon from '../components/icons/PredioIcon.vue';
import EnvelopeIcon from '../components/icons/EnvelopeIcon.vue';

export default {
    name: 'ClientView',
    //importando os icones
    components: {
        UserIcon,
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
            <div class="img">
            <div class="backshape"> <img src="/images/IconeEGP.png" alt=""></div>
            </div>
            <div class="tela-cadastro">
                <form action="" method="post">
                    <RouterLink to="/">
                        <button class="butao">
                            <VoltarIcon/>
                        </button>
                    </RouterLink>
                    <h2>Olá, Distribuidor</h2>

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
                    <input class="btn" type="submit" value="Cadastar">
                </form>
            </div>
        </div>
    </main>
</template>

<style scoped>
.corpo {
    display: flex;
    justify-content: center;
    height: 750px;
    margin-bottom: 30px;
}

.container{
    display: flex;
    justify-content: center;
    gap: 50px;
    position: relative;
    background-color: #417A8B;
    padding: 110px 0;
    max-width: 1200px;
    box-shadow: #3e6e7d 2px 2px 2px;
    width: 1300px;
    border-radius: 20px;
    height: 500px;
}

.img{
    display: flex;
    align-items: center;
    margin-left: -30px;
}
.tela-cadastro{
    background-color: white;
    display: flex;
    padding: 50px;
    border-radius: 20px;
    height: 400px;
    align-items: center;
}

form{
    width: 460px;
    text-align: center;
}

form h2{
    font-size: 3rem;
    text-transform: uppercase;
    margin: 15px 0;
    color: rgb(63, 61, 86);
}

.input-div{
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 20px 0;
    padding: 4px 0;
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
    color: #d9d9d9;
    transition: all .5s;
}

.input{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
    width: 100%;
    height: 50px;
    border-radius: 25px;
    margin: 1rem 0;
    font-size: 1.2rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -80px;
    width: 50px;
    height: 50px;
    background-color: #DB0E69;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: calc(.4s);
}
.butao p {
    font-size: 40px;
}
.butao:hover {
    background-color: #A80754;
    transform: scale(1.05);
}

</style>