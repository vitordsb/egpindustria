<template>
  <div id="app">
    <div class="loginBox">
      <div class="inner">
        <div class="signIn" v-if="signIn">
          <div class="top">
            <img class="logo"src="/public/images/egppreto.png"/>
            <div class="title">Fazer login</div>
            <div class="subtitle"> Não tem uma conta?
              <span class="subtitle-action" @click="signIn = !signIn">
                Criar conta
              </span>
            </div> <!--Final subtitle-->
          </div><!--Final top-->
          <form><!--FInal Form-->
            <div class="form">
              <input
                required
                aria-required="true"
                aria-invalid="false"
                aria-label="E-mail"
                type="email"
                pattern="^[\w\.-]+@[\w\.-]+\.\w+$"
                class="w100"
                :class="{ invalid: email.error }"
                ref="email"
                placeholder="Email"
                autofocus
                @blur="validateEmail"
                @keydown="validateEmail"
                v-model="email.value"
              />

              <input
                required
                aria-required="true"
                type="password"
                class="w100"
                :class="{ invalid: password.error }"
                placeholder="Password"
                v-model="password.value"
                @blur="validatePassword"
                @keydown="validatePassword"
              />
            </div>

            <input
              type="submit"
              value="Submit"
              class="action"
              :class="{ 'action-disabled': !loginValid }"
            />
          </form>
        </div>

        <div class="register" v-else>
          <div class="top">
            <img class="logo"src="/public/images/egppreto.png"/>
            <div class="title">Crie uma conta</div>
            <div class="subtitle">
              Já tem uma conta?
              <span class="subtitle-action" @click="signIn = !signIn">
                Fazer login
              </span>
            </div>
          </div>

          <div class="form">
            <input
              type="text"
              placeholder="First name"
              autofocus
              v-model="firstName"
              class="w100"
            />
            <input type="text"placeholder="Last name"v-model="lastName"class="w100"/>
            <input type="text"class="w100"placeholder="Email"v-model="email.value"/>
            <input type="password"class="w100"placeholder="Sua senha"v-model="password.value"/>
          </div>

          <button class="action" :class="{ 'action-disabled': !registerValid }">
            Criar conta
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      emailRegex: /^[\w\.-]+@[\w\.-]+\.\w+$/,
      passwordRegex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,

      firstName: "",
      lastName: "",

      password: {
        value: "",
        error: false
      },

      email: {
        value: "",
        error: false
      },

      signIn: true
    };
  },

  methods: {
    validateEmail(event) {
      if (this.email.value == "") this.email.error = true;
      else this.email.error = false;
    },

    validatePassword(event) {
      if (this.password.value == "") this.password.error = true;
      else this.password.error = false;
    }
  },

  mounted() {
    // this.$refs.email.focus();
  },

  computed: {
    validFirstName() {
      return this.firstName.length > 0;
    },

    validLastName() {
      return this.lastName.length > 0;
    },

    emailValid() {
      return this.emailRegex.test(this.email.value);
    },

    passwordValid() {
      return this.password.value.length > 0;
    },

    loginValid() {
      return this.emailValid && this.passwordValid;
    },

    registerValid() {
      return (
        this.emailValid &&
        this.passwordValid &&
        this.validFirstName &&
        this.validLastName
      );
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
#app {
    margin: 7%;
}
 
@mixin box {
    margin: 5px auto 5px auto;
    box-shadow: 1px 1px 1px 1px #ccc;
}

@mixin field {
  border: 1px solid #aaa;
  height: 40px;
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 5px;
  box-sizing: border-box;
}

input[type="text"] {
  @include field;
}

input[type="email"] {
  @include field;
}

input[type="password"] {
  @include field;
}

.invalid {
  border: 2px solid red !important;
  &::placeholder {
    color: red;
  }
}

.errorMessage {
  color: red;
  margin: 10px;
  top: 5px;
}

.w100 {
  width: 100%;
}


.logo {
  width: 300px;
  margin-bottom: 10px;
}

.action {
  height: 40px;
  text-transform: uppercase;
  border-radius: 25px;
  width: 100%;
  border: none;
  cursor: pointer;
  background: green;
  margin-top: 20px;
  color: #fff;
  font-size: 1.2rem;
  @include box;
}

.action-disabled {
  color: #eee;
  background: #aaa;
  cursor: auto;
}

.top {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
}

.title {
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  .subtitle-action {
    color: green;
    font-weight: bold;
    cursor: pointer;
  }
}

html {
  background-repeat: no-repeat;
  background: linear-gradient(
    to bottom,
    rgba(96, 108, 136, 1) 0%,
    rgba(63, 76, 107, 1) 100%
  );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
}

.loginBox {
  background: #fff;
  border-radius: 15px;
  max-width: 400px;
  padding: 25px 55px;
  animation: slideInTop 1s;
}

@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-30%);
  }

  to {
    opacity: 100;
    transform: translateY(0%);
  }
}

@media screen and (min-width: 440px) {
  .loginBox {
    @include box;
  }
}

@media screen and (max-width: 440px) {
  html {
    background: #fff;
    align-items: start;
    justify-content: start;
  }

  .loginBox {
    padding: 25px 25px;
    max-width: 100vw;
  }
}
</style>