
<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>HRIS-People</title>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      authlink: '/auth/masuk',
      loginLabel: 'Login',
      logoutLabel: 'Logout',
      mock_account: {
        username: 'ridwan',
        password: '123'
      }
    }
  },
  mounted () {
    console.log(this.loginLabel)
    if (!this.authenticated) {
      // this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
      this.$router.replace({ name: 'masuk' })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap');

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background : #242291;
  font-weight: 400;
  min-height : 1200px;
}

.bold{
 font-weight: bold;
}

</style>
