<template>
<div>
    <div class="container-fluid">
    <section style="height:80px;"></section>
	
    <!----------- Footer ------------>
    <footer class="footer-bs ">
        <div class="row">
        	<div class="col-md-3 footer-brand animated fadeInLeft">
            	<h2><img style="height:120px;width:130px; padding-bottom:4px;" src="../assets/logo.png" alt="" srcset=""></h2>
                <p>Foodline is dedicated ti making sure that oy get the best food possible wherever you are in ibadan .</p>
                <br><br><br><br><br><br><br><br><br><br><br><hr>
                <p>© 2019 Foodline.com  All rights reserved</p>
            </div>
        	<div class="col-md-4 footer-nav animated fadeInUp">
            	<h4>Food —</h4>
            	<div class="col-md-6">
                    <ul class="pages">
                        <li><a href="#">Burgers</a></li>
                        <li><a href="#">Pizza places</a></li>
                        <li><a href="#">Cakes </a></li>
                        <li><a href="#">Salads</a></li>
                        <li><a href="#">Nigerian Food</a></li>
                    </ul>
                </div>
            	<div class="col-md-6">
                    <ul class="list">
                        <router-link to="/about">About</router-link> 
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        	<div class="col-md-2 footer-social animated fadeInDown">
            	<h4>Follow Us</h4>
            	<ul>
                	<li><a href="#">Facebook</a></li>
                	<li><a href="#">Twitter</a></li>
                	<li><a href="#">Instagram</a></li>
                	<li><a href="#">RSS</a></li>
                </ul>
            </div>
        	<div class="col-md-3 footer-ns animated fadeInRight">
            	<h4>Newsletter</h4>
                <p>Get Updates on the best food Deals in Ibadan</p>
               <div>
                    <div class="input-group">
                      <input type="text" class="form-control"    placeholder="Enter Email...">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div><!-- /input-group -->
                 </div>
            </div>
        </div>
    </footer>
   
</div>
</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .container-fluid{
        margin-top: 0px !important;
    }
    
    .footer-bs {
        margin:-15px !important;
    background-color: #3c3d41;
	padding: 60px 40px;
	color: rgba(255,255,255,1.00);
	
	border-bottom-right-radius: 6px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 6px;
}
hr{
    color: white;
}
.footer-bs .footer-brand, .footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { padding:10px 25px; }
.footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { border-color: transparent; }
.footer-bs .footer-brand h2 { margin:0px 0px 10px; }
.footer-bs .footer-brand p { font-size:11px; color:rgba(255,255,255,0.70); }

.footer-bs .footer-nav ul.pages { list-style:none; padding:0px; }
.footer-bs .footer-nav ul.pages li { padding:5px 0px;}
.footer-bs .footer-nav ul.pages a { color:rgba(255,255,255,1.00); font-weight:bold;  }
.footer-bs .footer-nav ul.pages a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }
.footer-bs .footer-nav h4 {
	font-size: 10px;
	text-transform: uppercase;
	letter-spacing: 3px;
	margin-bottom:10px;
}

.footer-bs .footer-nav ul.list { list-style:none; padding:0px; }
.footer-bs .footer-nav ul.list li { padding:5px 0px;}
.footer-bs .footer-nav ul.list a { color:rgba(255,255,255,0.80); }
.footer-bs .footer-nav ul.list a:hover { color:rgba(255,255,255,0.60); text-decoration:none; }

.footer-bs .footer-social ul { list-style:none; padding:0px; }
.footer-bs .footer-social h4 {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 3px;
}
.footer-bs .footer-social li { padding:5px 4px;}
.footer-bs .footer-social a { color:rgba(255,255,255,1.00);}
.footer-bs .footer-social a:hover { color:rgba(240, 87, 87, 0.8); text-decoration:none; }

.footer-bs .footer-ns h4 {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 3px;
	margin-bottom:10px;
}
.footer-bs .footer-ns p { font-size:12px; color:rgba(255,255,255,0.70); }

@media (min-width: 768px) {
	.footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { border-left:solid 1px rgba(255,255,255,0.10); }
}

</style>
