<template>
  <div class="login">
    <h1>Login</h1>
    <div class="login__message" v-if="show">{{ login_message }}</div>
    <div class="login__username">
     <input v-bind:class="{empty:isEmpty}" class="auth-forms" type="text" placeholder="Username" v-model="input.username">
    </div>
    <div class="login__password">
     <input v-bind:class="{empty:isEmpty}" class="auth-forms" type="text" placeholder="Password" v-model="input.password">
    </div>
    <div class="login__submit">
     <input class="submit" type="submit" value="Login" v-on:click="login();">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      show: false,
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
    login () {
      const uname = this.input.username
      const pw = this.input.password
      if (uname === this.$parent.mock_account.username && pw === this.$parent.mock_account.password) {
        this.show = false
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
          this.show = true
          this.isEmpty = false
          this.login_message = 'Login Failed, please input right data'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.empty {
 border : 1px solid red !important;
 border-radius: 4px;
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
   border-radius : 4px;
   margin : 0 auto;
   margin-bottom : 5px;
  }

  div {
   display : block;
   padding-top : 10px;

    .auth-forms{
      border : 1px solid #ccc;
      padding : 10px;
      width : 325px;
      border-radius: 4px;
    }

    .submit {
     background : #335fce;
     cursor: pointer;
     border : none;
     color : #ffffff;
     font-weight : bold;
     font-size: 16px;
     padding : 15px;
     width: 325px;
     border-radius : 4px;
    }
  }
}
</style>
