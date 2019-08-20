<template>
    <div class="main container" >
        <div class="container">
                <div class=" restaurant-nav">
                    <div class="row nav-content">
                        <div class="col-md-3">
                                <div class="restaurant-nav-text text-center">
                                     <p>  FOOD IN</p>
                                 </div>                    
                        </div>
                        
                        <div class="col-md-3">
                              <input type="text">
                        </div>
                        <div class="col-md-3"></div>
                    </div>                    
                </div>

                <div style="height:50px"></div>
                <div class="restaurants-display">
                    <div class="row">
                        <div class="col-md-4">                                
                                    <div class="card">
                                        <img class="img-fluid" src="../assets/nigfood2.jpg" style="width:150%">
                                        <div class="container-fluid">
                                            <div class="row ">
                                                    <h4 class="restaurant-name text-center">Abula </h4> 
                                            </div>                                        
                                            <div class="row">
                                                <div class="col">
                                                     <span class="badge badge-danger mb-4">African Food </span>
                                                </div>
                                                <div class="col"></div>
                                                <div class="col">
                                                    <span class="badge badge-dark mb-4">30 -45 min </span>
                                                </div>
                                            </div>
                                                                                       
                                        </div>                                
                                    </div>
                                </div>  

                                 <div class="col-md-4">                                
                                    <div class="card">
                                        <img class="img-fluid" src="../assets/food1.jpeg" style="width:100%">
                                        <div class="container-fluid">
                                            <div class="row ">
                                                    <h4 class="restaurant-name text-center">Samssssszs Kitchen</h4> 
                                            </div>                                        
                                            <div class="row">
                                                <div class="col">
                                                     <span class="badge badge-danger mb-4">African Food </span>
                                                </div>
                                                <div class="col"></div>
                                                <div class="col">
                                                    <span class="badge badge-dark mb-4">30 -45 min </span>
                                                </div>
                                            </div>
                                                                                       
                                        </div>                                
                                    </div>
                                </div>  
                                 <div class="col-md-4">                                
                                    <div class="card">
                                        <img class="img-fluid" src="../assets/ngfood3.jpg" style="width:100%">
                                        <div class="container-fluid">
                                            <div class="row ">
                                                    <h4 class="restaurant-name text-center">Cafe Chrysalis</h4> 
                                            </div>                                        
                                            <div class="row">
                                                <div class="col">
                                                     <span class="badge badge-danger mb-4">African Food </span>
                                                </div>
                                                <div class="col"></div>
                                                <div class="col">
                                                    <span class="badge badge-dark mb-4">30 -45 min </span>
                                                </div>
                                            </div>
                                                                                       
                                        </div>                                
                                    </div>
                                </div>           
                    </div>
                </div>
        </div>


        <!-- . -->
        <!-- .
        .
        .
        .
         -->
     

    </div>
</template>
<script>
    export default {
        
    }
</script>

<style scoped>
  
 .main{
     margin-top: 0px;    
 }
 .card {
  box-shadow: 0 4px 8px 0 rgba(173, 173, 173, 0.2);
  transition: 0.3s;
  width: 100%;
  border: 1px solid rgba(196, 196, 196, 0.39);
}
.nav-content{
    padding-top: 13px;
    color: white;
}
.restaurant-nav-text{
    font-family: 'Josefin Sans', sans-serif;
    padding: 4px;
    font-size: 20px;
}
.restaurant-nav{
     /* border-left: 10px solid rgba(255, 47, 20, 0.5);
      border-right: 10px solid rgba(255, 47, 20, 0.493); */
      padding: 0px;
     
      background-color: rgba(26, 26, 26, 0.767);
      

}
.restaurant-name{
    font-family: 'Josefin Sans', sans-serif;
    margin: 0 auto;
    padding: 10px;

}

input{
    margin-top:5px;
    height: 30px;
    margin-left: -80px;
    border-bottom: 2px solid gray;
    border-top: 2px solid white;
    
    box-shadow: 0 8px 16px 0 rgba(175, 175, 175, 0.075);

}
input:hover{
        box-shadow: 0 8px 16px 0 rgba(175, 175, 175, 0.401);

}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(236, 216, 216, 0.2);
}
.container {
  padding: 5px 16px;
  margin: 60px 39px;
  }
</style>


