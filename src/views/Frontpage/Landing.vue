<template>
 <div class="landing-wrapper">
     <div class="container">
        <div id="nav">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                     <router-link class="nav-link" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/about">Solusi</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/product">Bantuan</router-link>
                  </li>
                </ul>
                <span class="navbar-text">
                  <router-link v-if="authenticated" to="/auth/masuk" v-on:click.native="logout()" replace>{{logoutLabel}}</router-link>
                </span>
                <span class="navbar-text">
                  <router-link v-if="!authenticated" to="/auth/masuk">{{loginLabel}}</router-link>
                </span>
              </div>
          </nav>
        </div>
     </div>
     <div class="section-one">
       <div class="container">
         <div class="row">
           <div class="col-lg-12">
            <div class="header">
              <h1>People, solusi Payroll & HRIS untuk bisnis anda</h1>
              <p>
               People merupakan aplikasi HRIS dan Software Payroll
               yang memudahkan perusahaan dalam mengelola segala aspek HR diperusahaan
               mulai dari Data Karyawan, Absensi, Lembur, Payroll, PPh21, BPJS, KPI, Recruitment,
               Training dsb
              </p>
            </div>
           </div>
         </div>
       </div>
     </div>
 </div>
</template>

<script>
export default {
  name: 'Landing',
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
.landing-wrapper{
 #nav {
   nav {
    padding-top: 20px;
    padding-bottom: 20px;
     background:#242291 !important;
     margin-bottom: 20px;
     div {
       ul {
        li {
         a {
          padding-right: 40px;
          padding-left: 40px;
         }
        }
       }
     }
   }
   a {
     font-weight: bold;
     color: #fff;

     &.router-link-exact-active {
       color: #42b983;
     }
   }
 }

 .section-one {
  margin-top:100px;
  margin-top: 100px;
  .container {
   .row {
    div {
     .header {
      h1 {
       color:#fff !important;
       font-weight: bold;
       font-size: 64px;
      }
      p {
       color : #fff;
       line-height: 40px;
       margin-left: 10%;
       margin-right: 10%;
      }
     }
    }
   }
  }
 }

}

</style>
