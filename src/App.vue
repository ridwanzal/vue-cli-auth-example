
<template>
  <div id="app">
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background : #242291;
  font-weight: 400;
  min-height : 1200px;
}
</style>
