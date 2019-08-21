<template>
    <div class="main container-fluid">
        <div class="row restaurant-banner">
            
        </div>
                    <!-- <div class="container-fluid menu-display"> -->
                            <!-- <div class="row">MENU</div> -->                           
                                    <nav id="navbar-example2" class="navbar sticky-top navbar-light bg-light" >
                                        <a class="navbar-brand menu-text" href="#">Meals     </a>
                                        <ul class="nav nav-pills">
                                            <li class="nav-item">
                                                <a class="nav-link " href="#food">FOODS</a>
                                            </li>
                                            <li class="nav-item">
                                             <a class="nav-link" href="#drink">DRINKS</a>
                                            </li>
                                        
                                        </ul>
                                    </nav>
                                
                                <div>
                                <div class="row">    
                                    <div class="col-lg-8">
                                        <div data-spy="scroll" data-target="#navbar-example2"   data-offset="0">
                                            <!-- inside above div -->
                                            
                                               
                                              
                                            <div class="row food-item" v-for(item in foods) id="food">        
                                                <div class="col-lg-4 food-desc">
                                                    <div class="row food-name">Amala $ Abula</div>
                                                    <div class="row food-name-details"> This consists of amala and ,,...</div>
                                                </div>
                                                 <div class="col-lg-6"></div>
                                                 <div class="col-lg-1  food-button">
                                                     <h6>24,000</h6>
                                                 </div>
                                                <div class="col-lg-1 add food-button">
                                                   <i class="far fa-plus-square"></i>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div> 
                                    
                                        <div class="cart sticky-top  card col-lg-3">
                                            <div class="row">
                                                Apollos PIZZA
                                            </div>
                                            <div class="row">
                                                    {{name}}
                                            </div>
                                            <div class="row cart-body">

                                            </div>
                                            <div class="row"></div> 
                                        </div>
                                </div>                            
                            </div>     
                    <!-- </div> -->
                    
                        
                    

    </div>
</template>

<script>

      export default {
        data(){
            return{
                name:'stephenn',
                foods:['amala','egusi','pizzad','amala1','egusi2','pizzad3','amala4','egusi4','pizzad4']
            }
        }
      
    
    }
</script>

<style scoped>
    body{
        margin: 0;
        padding: 0;
    }
   
    .restaurant-banner{
        height: 300px;
        width:100%;
        background-image: url(../assets/nigfood2.jpg);
        background-size: 100%;  
        border-bottom: 1px solid black;
        background-repeat:no-repeat;     
        
    }
    /* .menu-display{
        position: relative;
        height: 400px;
        overflow-y:inherit;
        
    } */
    .food-item{
        border: .5px solid rgba(255, 179, 179, 0.596);
        margin: 5px 0;
        padding:5px;
        /* box-shadow: 0 8px 16px 0 rgba(179, 179, 179, 0.418); */
        height:60px;
        border-radius: 5px;

    }
    h6{
        font-size: 11px;
        color: rgba(255, 0, 0, 0.658);
    }
    .food-desc{
        margin:auto;
        padding: 5px 20px;
    }
    .food-name{
        font-family: 'Josefin Sans', sans-serif;   
    font-size: 12px;
    }
    
    .food-name-details{
         font-family: 'Josefin Sans', sans-serif;
        color: rgb(121, 121, 121);
        font-size: 10px;
    }
    .menu-text{
        font-family: 'Josefin Sans', sans-serif;
        color: gray;
        font-size: 22px;
        
    }
    .food-button{
        margin:auto;
    }
    .far{
        color: rgb(228, 155, 19);
        font-size: 20px;
        animation: 1s ease-in;
    }
    .far:hover{         
        color: orange;
        font-size: 21px;
    }
    .cart{
        border: .5px solid rgb(201, 201, 201);
        padding: 30px;   
        position: relative 5px;  
        float: right;
        z-index: 10001;
        box-shadow: 0 8px 16px 0 rgba(71, 48, 48, 0.418);
        
        }
    nav{
        height: 53px;
        background-color: aqua !important ;
        z-index: 10000;
        margin-left:-14px;
        margin-right:-14px;
        box-shadow: 0 8px 16px 0 rgba(209, 209, 209, 0.418);
        margin-bottom: 20px;
        font-size: 14px;

    }

</style>        