<template>
 <div class="landing-wrapper">
     <div class="container">
        <div id="nav">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#"><img alt="Vue logo" src="../../assets/logopeople.svg"></a>
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
                  <router-link v-if="!authenticated" to="/auth/daftar" class="btn btn-success" style="margin-left:20px;">{{registerLabel}}</router-link>
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
             <img alt="TalentGrit Present" src="../../assets/present.svg" width="20%">
              <h1>People, solusi Payroll & HRIS untuk bisnis anda</h1>
              <p>
               People merupakan aplikasi HRIS dan Software Payroll
               yang memudahkan perusahaan dalam mengelola segala aspek HR diperusahaan
               mulai dari Data Karyawan, Absensi, Lembur, Payroll, PPh21, BPJS, KPI, Recruitment,
               Training dsb
              </p>
            </div>
            <div class="cta">
              <router-link v-if="!authenticated" to="/auth/daftar" class="btn btn-success bold" style="margin-left:20px;">{{registerLabel}} Sekarang</router-link>
            </div>
           </div>
         </div>
       </div>
     </div>
     <div class="section-two">
       <div class="container">
         <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
             <div class="header">
              <h1>Optimalkan HR anda, dan jadi lebih produktif</h1>
             </div>
             <p>Salah satu cara terbaik untuk mengoptimalkan peran HR diperusahaan anda adalah dengan meminimalisir pekerjaan administratif yang berulang-ulang. Anda dapat meminimalisir hal ini dengan menerapkan system HR yang fungsional.</p>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <img alt="Vue logo" src="../../assets/people-1.svg" width="50%">
           </div>
         </div>
       </div>
     </div>
     <div class="section-three">
       <div class="container">
         <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
             <div class="card">
               <div class="card-body">
                 <h5 class="card-title">Employee Management</h5>
                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
               </div>
             </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
             <div class="card" >
               <div class="card-body">
                 <h5 class="card-title">Payroll Management</h5>
                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
               </div>
             </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
             <div class="card" >
               <div class="card-body">
                 <h5 class="card-title">Online Presence</h5>
                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
               </div>
             </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
             <div class="card" >
               <div class="card-body">
                 <h5 class="card-title">Online Presence</h5>
                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
               </div>
             </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
             <div class="card" >
               <div class="card-body">
                 <h5 class="card-title">Interactive Forms</h5>
                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
               </div>
             </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
             <div class="card" >
               <div class="card-body">
                 <h5 class="card-title">Claims</h5>
                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
               </div>
             </div>
          </div>
        </div>
       </div>
     </div>
     <div class="section-four">
       <div class="container">
         <div class="row">
           <div class="col-lg-10 col-md-10 col-xs-12 colone">
             <h1>Coba Sekarang</h1>
             <p>Uji coba Gratis sekarang</p>
           </div>
           <div class="col-lg-2 col-md-2 col-xs-12 coltwo">
                <router-link v-if="!authenticated" to="/auth/daftar" class="btn btn-success bold" style="margin-left:20px;">{{registerLabel}} Sekarang</router-link>
           </div>
         </div>
       </div>
     </div>
     <footer class="footer">
      <div class="container">
        <span class="text-muted">People. by Talent-Grit. &copy; 2020</span>
      </div>
     </footer>
 </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      loginLabel: 'Masuk',
      logoutLabel: 'Keluar',
      registerLabel: 'Daftar'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss">

.landing-wrapper{
 .container {
  @media only screen and (max-width: 600px) {
   padding-right : 6%;
   padding-left: 6%;
  }
 }
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
       color: #F6C702;
     }
   }
 }

 .section-one {
  @media only screen and (max-width: 600px) {
   padding-top : 60px;
   padding-bottom: 60px;
  }
  padding-top:130px;
  padding-bottom: 210px;
  .container {
   .row {
    div {
     .header {
      img {
       @media only screen and (max-width: 600px) {
        width : 60%;
       }
      }
      h1 {
       margin-left: 10%;
       margin-right: 10%;
       margin-top:10px;
       line-height: 75px;
       color:#fff !important;
       font-weight: bold;
       font-size: 60px;
        @media only screen and (max-width: 600px) {
         font-size : 40px;
         margin-left: 0;
         margin-right: 0;
        }
      }
     }
     p {
      color : #fff;
      line-height: 40px;
      margin-left: 16%;
      margin-right: 16%;
        @media only screen and (max-width: 600px) {
         margin-left: 10px;
         margin-right: 10px;
        }
     }
    }
   }
  }
 }

 .section-two {
  background : #fff;
  padding-top: 120px;
  padding-bottom: 120px;
  @media only screen and (max-width: 600px) {
   padding-top : 40px;
   padding-bottom: 40px;
  }
   .container {
    .row {
     div{
      .header{
       h1 {
        text-align: left;
        font-weight : bold;
        font-size : 32px;
        line-height: 45px;
       }
      }
      p {
       text-align: left;
       line-height: 35px;
       margin-top: 10px;
      }
     }
    }
   }
 }

 .section-three {
  background : #242291;
  padding-top : 100px;
  padding-bottom: 100px;
   @media only screen and (max-width: 600px) {
    padding-top : 20px;
    padding-bottom: 20px;
   }
  .container {
   .row{
    text-align : center;
     div {
      .card {
       border : 1px solid #ddd;
       margin-top : 20px;
       margin-bottom: 10px;
       min-height: 200px;
       padding : 20px;
       .card-body {
        .card-title {
         font-weight : bold;
        }
       }
      }
     }
   }
  }
 }

 .section-four{
  background : #fff;
  padding-top : 50px;
  padding-bottom: 50px;
  .container {
   .row {
    .colone {
      text-align: left;
      h1 {
       font-weight: bold;
      }
    }
    .coltwo {
     align-content: left;
    }
   }
  }
 }

 footer {
  background  : #eee;
  padding-top : 20px;
  padding-bottom: 20px;
 }

}

</style>
