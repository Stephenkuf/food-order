<template>
    <div class="main" >
       
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-light">
             <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                 <router-link to="/" class="navbar-brand">
                        <img style="height:120px;width:130px; padding-bottom:4px;" src="../assets/logo.png" alt="" srcset="">
                 </router-link> 
                
                <div class=" ml-auto text-light mr-4">
                    <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModal">
                       LOGIN / SIGN UP
                    </button>
                </div>
            </div>

        </nav>
                

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                     <div class="modal-content">   
                                
                    <div class="login ">
                            <div >
                                <!--.............                                                                                                                                                                                                                         ..-->
                                <div class="main-form" v-if="loginType">
                                        <form action="">
                                            <h3 class="text-danger login-logo text-center">LOG IN</h3>
                                            <hr>
                                            <!-- <h2 class="login-logo">CWL</h2>
                                            <hr> -->
                                                <div class="form-wrapper">
                                                <input type="text" placeholder="Username or Email Address" class="form-control input-login">
                                                <i class="zmdi zmdi-account"></i>
                                                </div>
                                                <div class="form-wrapper">
                                                    <input type="password" placeholder="Password" class="form-control input-login">
                                                    <i class="zmdi zmdi-lock"></i>
                                                </div>                              
                                                    <button class="reg-btn btn-danger text-uppercase">Log In
                                                    <i class="zmdi zmdi-arrow-right"></i>
                                                </button>
                                                <br>
                                                <div class="form-wrapper ">
                                                    <p class="text-center"><small class="sign-up"> Dont have an account?</small> <span class="signup-btn text-danger" @click="loginType = false ">Sign Up.</span></p>
                                                </div>
                                        </form>
                                </div>  

                                    <div class=" signup" v-else>
                                        <form action="">
                                            <h3 class="text-danger login-logo text-center">Sign UP</h3>
                                            <hr>
                                            <!-- <h2 class="login-logo">CWL</h2>
                                            <hr> -->
                                                <div class="form-wrapper">
                                                <input type="text" placeholder=" Email Address" class="form-control input-login">
                                                <i class="zmdi zmdi-account"></i>
                                                </div>
                                                <div class="form-wrapper">
                                                <input type="number" placeholder=" Phone Number" class="form-control input-login">
                                                <i class="zmdi zmdi-account"></i>
                                                </div>
                                                <div class="form-wrapper">
                                                <input type="text" placeholder=" Your Username" class="form-control input-login">
                                                <i class="zmdi zmdi-account"></i>
                                                </div>
                                                <div class="form-wrapper">
                                                    <input type="password" placeholder="Password" class="form-control input-login">
                                                    <i class="zmdi zmdi-lock"></i>
                                                </div>                              
                                                    <button class="reg-btn text-uppercase">Register
                                                    <i class="zmdi zmdi-arrow-right"></i>
                                                </button>
                                                <br>
                                                <div class="form-wrapper">
                                                    <p class="text-center"><small class="sign-up">Have an account?</small> <span class="signup-btn text-danger"  @click="loginType = true">Log In.</span></p>
                                                </div>
                                        </form>
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

         data(){
            return{
              loginType : false
            }
        }
}
</script>

<style scoped>
    .main{
      margin-bottom: 65px;
    }
    .container{
        height: 50px;
    }
    .login{
        margin-top: -80px;
    }
    .input-login{
    padding: 100px;
}
.signup-btn{
      display: inline-block;
}
.signup-btn:hover{
    cursor: pointer;
  }
.sign-up{
    color: rgb(53, 53, 53);
    margin:0 12px;
}
.reg-btn:hover{
    color: white;
    background-color: rgb(61, 119, 245)
}
.reg-btn{
    color: rgb(116, 116, 230);
    color: white;
}
.signup{
    width:400px;
    margin: auto;
    background-color: rgb(253, 250, 250);
    padding: 30px;
    position: relative;
    top: 100px;
    transition:   0.8s ease;
    
}
.main-form{
    width: 300px;
    margin: auto;
    background-color: rgb(250, 250, 250);
    padding: 30px;
    position: relative;
    top: 100px;
    transition:   0.8s ease;
}
.login-logo{
    padding: 0 0px;
    font-weight: 900px;
}
/* .login{
       background: url(../assets/nigfood2.jpg);
       background-size: 100% 850px;
       background-repeat: no-repeat;
       height:100vh;
 } */
 
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; }
body {
   font-family: 'Josefin Sans', sans-serif;
  /*  font-family: 'Josefin Sans', sans-serif; */
  color: #333;
  font-size: 13px;
  margin: 0; }
input, textarea, select, .reg-btn {
  font-family: 'Josefin Sans', sans-serif;
  color: #333;
  font-size: 13px; }
p, h1, h2, h3, h4, h5, h6, ul {
  margin: 0; }
img {
  max-width: 100%; }
ul {
  padding-left: 0;
  margin-bottom: 0; }
a:hover {
  text-decoration: none; }
:focus {
  outline: none; }
.wrapper {
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center; }
.inner {
  padding: 20px;
  background: #fff;
  max-width: 850px;
  margin: auto;
  display: flex; }
  .inner .image-holder {
    width: 50%; }
  .inner form {
    width: 50%;
    padding-top: 36px;
    padding-left: 45px;
    padding-right: 45px; }
  .inner h3 {
    text-transform: uppercase;
    font-size: 25px;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    margin-bottom: 28px;
    
     }

.form-group {
  display: flex; }
  .form-group input {
    width: 50%; }
    .form-group input:first-child {
      margin-right: 25px; }
.form-wrapper {
  position: relative; }
  .form-wrapper i {
    position: absolute;
    bottom: 9px;
    right: 0; }
.form-control {
  border: 1px solid #333;
  border-top: none;
  border-right: none;
  border-left: none;
  display: block;
  width: 100%;
  height: 30px;
  padding: 0;
  margin-bottom: 25px; }
  .form-control::-webkit-input-placeholder {
    font-size: 13px;
    color: #333;
     font-family: 'Josefin Sans', sans-serif; }
  .form-control::-moz-placeholder {
    font-size: 13px;
    color: #333;
     font-family: 'Josefin Sans', sans-serif; }
  .form-control:-ms-input-placeholder {
    font-size: 13px;
    color: #333;
     font-family: 'Josefin Sans', sans-serif; }
  .form-control:-moz-placeholder {
    font-size: 13px;
    color: #333;
     font-family: 'Josefin Sans', sans-serif; }
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-left: 20px; }
  select option[value=""][disabled] {
    display: none; }
.reg-btn {
  border: none;
  width: 164px;
  height: 51px;
  margin: auto;
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #333;
  font-size: 15px;
  color: #fff;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s; }
  .reg-btn i {
    margin-left: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0); }
  button:hover i, button:focus i, button:active i {
    -webkit-animation-name: hvr-icon-wobble-horizontal;
    animation-name: hvr-icon-wobble-horizontal;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1; 
    
    }
@-webkit-keyframes hvr-icon-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px); }
  33.3% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px); }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px); }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px); }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px); }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0); } }
@keyframes hvr-icon-wobble-horizontal {
  16.65% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px); }
  33.3% {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px); }
  49.95% {
    -webkit-transform: translateX(4px);
    transform: translateX(4px); }
  66.6% {
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px); }
  83.25% {
    -webkit-transform: translateX(1px);
    transform: translateX(1px); }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0); } }
@media (max-width: 1199px) {
  .wrapper {
    background-position: right center; } }
@media (max-width: 991px) {
  .inner form {
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px; } }
@media (max-width: 767px) {
  .inner {
    display: block; }
    .inner .image-holder {
      width: 100%; }
    .inner form {
      width: 100%;
      padding: 40px 0 30px; }
  button {
    margin-top: 60px; }
    
     }
  .modal-content{
      background-color: rgb(15, 15, 15, 0) !important;
      border: 1px solid rgb(15, 15, 15, 0);
    
  }

</style>

