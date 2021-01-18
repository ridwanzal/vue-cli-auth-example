<template>
<div class="auth">
  <center><img :src="`/img/logo-people.svg`"></center>
  <div class="container">
      <div class="row justify-content-md-center">
          <div class="col-lg-4 col-md-4 col-xs-12">
              <div class="card auth-container">
                <div class="card-body">
                  <div class="login">
                    <div class="login__message" v-if="show_login_message">{{ login_message }}</div>
                    <div class="form-group">
                      <div class="login__username">
                        <label class="labels-generic" for="emails">Email address</label>
                        <input v-bind:class="{empty:isEmpty}" class="auth-forms" type="email" placeholder="Username" v-model="input.username">
                        <small id="emailHelp" class="form-text text-muted" v-if="show_message_email">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="login__password">
                        <label class="labels-generic" for="password">Password</label>
                        <input v-bind:class="{empty:isEmpty}" class="auth-forms" type="password" placeholder="Password" v-model="input.password">
                      </div>
                    </div>
                    <div class="login__submit">
                      <input class="submit" type="submit" value="Daftar" v-on:click="login();">
                    </div>
                    <div class="form-group auth-container__register">
                      Sudah punya akun ? <a class="link" v-on:click="goMasuk();"><b>Masuk</b></a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      show_login_message: false,
      isEmpty: false,
      login_mesage: '',
      input: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    if (this.$parent.authenticated) {
      this.$router.replace({ name: 'home' })
    }
  },
  methods: {
    goMasuk () {
      this.$router.replace({ name: 'masuk' })
    },
    login () {
      const uname = this.input.username
      const pw = this.input.password
      if (uname === this.$parent.mock_account.username && pw === this.$parent.mock_account.password) {
        this.show_login_message = false
        this.$emit('authenticated', true)
        this.$router.replace({ name: 'home' })
      } else {
        if (uname === '') {
          this.isEmpty = true
        }

        if (pw === '') {
          this.isEmpty = true
        }

        if (uname !== '' && pw !== '') {
          this.show_login_message = true
          this.isEmpty = false
          this.login_message = 'Login Failed, please input right data'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.labels-generic{
  color : #525252;
  font-weight: bold;
}

.auth {
  padding-top: 120px;
  .auth-container{
    &__register {
      margin-top: 30px;
      text-align : center;
    }

    margin-top: 50px;
    background: #FFFFFF;
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    box-shadow: 0px 7px 25px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    padding : 15px;
  }
}

.empty {
 border : 1px solid #E84343 !important;
 border-radius: 6px;
}

.login{

  h1 {
   font-weight: bold;
  }

  &__message {
   background : #f78585;
   padding : 10px;
   width : 325px;
   color : #fff;
   border-radius : 6px;
   margin : 0 auto;
   margin-bottom : 10px;
  }

  div {
   text-align: left;
   display : block;

    .auth-forms{
      border: 1px solid #DEDEDE;
      padding : 15px 10px 15px 15px;
      width : 100%;
      border-radius: 6px;
    }

    .submit {
     background : #16AD53;
     cursor: pointer;
     border : none;
     text-transform: uppercase;
     color : #ffffff;
     font-weight : bold;
     font-size: 16px;
     padding : 15px;
     width: 100%;
     border-radius : 6px;
     font-family: 'Montserrat', sans-serif;
     letter-spacing: 1px;
     font-weight: bold;
    }
  }
}
</style>
