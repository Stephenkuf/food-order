<template>
  <div class="container-fluid">
    
      <section class="mainview">      
        
        <!-- <img src="../assets/bg.jpg" alt="" srcset=""> -->
         <div class="row inputfield">
            <div class="col-md-3"></div>
            <div class="col-md-6">
               <!-- <label for="inputState">.</label> -->
              <select id="inputState" class="form-control">
                <option selected>Enter your address...</option>
                <option>...</option>

              </select>
            </div>
            <div class="col-md-3"></div>           
        </div>
      </section>

      <section>
            <div class="row">

            </div>
      </section>
      <div  style="height:100px"></div>
      <div class="container">
          <section class="how-it-works">
            <div class="header-message row center ">
              How it works 
            </div> 
            <div style="height:100px"></div>
              <div class="row">
                  <div class="col-md-6 col-lg-4 aos-init aos-animate" data-aos="fade-up">
                    <div class="media feature-icon d-block  box text-center">
                        <div class="icon">
                            <span class="flaticon-soup">
                              <img  style="height:50px;" src="../assets/icon1.png" alt="" srcset="">
                            </span>
                        </div>
                        <div class="media-body">
                          <h3 class="how-header">Restaurants Near You </h3>
                          <div class="how-text">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur </p>
                          </div>                      
                        </div>
                      </div>
                  </div>                   
                
                </div>
          </section>
        </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

    export default Vue.extend({
      name: 'home',
      
    })
</script>

<style scoped>
    
    #inputState{
       font-size: 14px;
       color: #505050;
       height: 40px;
      margin: 8px 0;
      display: inline-block;
      padding: 8px;
     border: 2px solid rgba(156, 156, 156, 0.322);
     border-radius:10px;
     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     

    }
   
    
    #inputState:hover{
      border: 2px solid rgba(51, 51, 51, 0.678);
    }
    .header-message{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 35px;
      letter-spacing: 0px;
      word-spacing: -0.6px;
      color: #000000;
      font-weight: 700;
      text-decoration: none solid rgb(68, 68, 68);
      font-style: italic;
      font-variant: small-caps;
      text-transform: none;
      
    }
    .center {
    margin: auto;
    width: 50%;
    position: relative;    
    padding: 10px;
  }
    .spacing{
      height: 20px;
    }

    .row {  
    display: flex;  
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.how-header{
  font-size: 25px;
  color: rgb(12, 12, 12);
  margin-top: 20px
}
 .how-text{
      padding:0 18px;
      
    }
 .box{
   font-family: "Open Sans", cursive;
    font-size: 16px;
    line-height: 1.6;
    font-weight: 300;
    color: #999999;
    border:1px solid rgb(230, 230, 230);
    padding: 20px 2px;
    border-radius: 15px;
  
      
}
.box:hover{
  -webkit-box-shadow: 4px 2px 5px 0px rgba(207,172,207,1);
  -moz-box-shadow: 4px 2px 5px 0px rgba(207,172,207,1);
box-shadow: 4px 2px 5px 0px rgba(207,172,207,1);
}
.mainview{
  background-image: url('../assets/bg.jpg');
  height:600px;
  margin-top:55px;
  width: 100%;
  height: 500px;
  background-size: cover;
}
.inputfield{
  position: relative;
top: 50%;
transform: translateY(-50%);
    
}
 
 .container-fluid {
    width: 100%;
    padding-right: 0px; 
    padding-left: 0px;
 }
    
</style>
