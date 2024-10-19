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
                        <button class="butao">
                            <RouterLink to="/">
                                <VoltarIcon/>
                            </RouterLink>
                        </button>
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
                    <button class="btn" value="Cadastar">Cadastrar</button>
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
    background-color: aliceblue;
    padding: 50px;
    @media (max-width: 680px) {
        width: auto;
        height: auto;
        flex-direction: column-reverse;
    }
}

.container{
    display: flex;
    justify-content: center;
    gap: 200px;
    position: relative;
    background-color: #75b2c459;
    padding: 100px 0;
    max-width: 1400px;
    box-shadow: #000000 1px 1px 1px 1px;
    width: 1400px;
    border-radius: 10px;
    height: auto;
    @media (max-width: 680px) {
        width: auto;
        height: auto;
        flex-direction: column-reverse;
    }
}

.img{
    display: flex;
    align-items: center;
    margin-left: -30px;
    @media (max-width: 680px) {
        display: none;
    }
}
.tela-cadastro{
    background-color: white;
    box-shadow: #000000 1px 1px 1px 1px;
    display: flex;
    padding: 60px;
    border-radius: 10px;
    height: 420px;
    align-items: center;
    @media (max-width: 680px) {
        height: 300px;   
        width: auto;
    }
}

form{
    width: 460px;
    text-align: center;
    @media (max-width: 680px) {
        width: auto;
    }
}

form h2{
    font-size: 4rem;
    margin-bottom: 5px;
    color: #427D8D;
    @media (max-width: 680px) {
        font-size: 2rem;
    }
}

.input-div{
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 20px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
    transition: all .5s;
    @media (max-width: 680px) {
        margin: 10px 0;
        padding: 5px 0;
        border-bottom: 2px solid #d9d9d9;
        transition: all .5s;
    }
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
    height: 40px;
    padding: 10px;
    border-radius: 10px;
    margin: 2.5rem auto 1rem auto;
    font-size: 1.1rem;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    color: #fff;
    background-image: linear-gradient(to right, rgb(248, 1, 92), rgb(255, 32, 114), rgb(255, 0, 123));
    transition: all .5s;
    &:hover{ 
        transform: scale(1.05);
        color: black;
    }
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
    @media (max-width: 680px) {
        position: relative;
        width: 40px;
        height: 40px;
        left: 10px;
        top: 15px;
        height: auto;
        flex-direction: column-reverse;
    }
}
.butao i {
    font-size: 30px;
    color: white;
}
.butao:hover {
    background-color: #A80754;
    transform: scale(1.05);
}

</style>