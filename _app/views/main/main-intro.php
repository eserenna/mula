<div id="main">
    <div class="container">
        <div class="col-md-3 col-sm-2"></div>
        <div class="col-md-6 col-sm-8 col-xs-12 bg-white boxed p-overall-20"  id="drop" style="display:none;">
            <h3 class="text-center">
                <img src="<?php echo base_url('public/img/canvass.png') ?>" style="width:50px;display:inline-block;">CANVASS
            </h3>
            <p class="text-justified">
                Most advertisements or banners are not efficient.
                They may not be able to send the message that is suppose to be told. 
                We are here to be a medium to help you test out its efficiency before it is displayed. 
                Canvass is a simple web application that helps you out as advertising agencies to survey
                the effectiveness of your advertisement or banner to the crowd.
            </p>
            <p class="text-center" style="border-top:solid 1px #ccc;">
                <small>
                    Connect with a social network
                </small>
                <table class="white-text facebook">
                    <tr>
                        <td>
                            <img src="<?php echo base_url('public/img/social/facebook.png') ?>" style="width:50px;">
                        </td>
                        <td>
                            <b>
                                LOGIN WITH FACEBOOK
                            </b>
                        </td>
                    </tr>
                </table>
                <table class="white-text googleplus">
                    <tr>
                        <td>
                            <img src="<?php echo base_url('public/img/social/google-plus.png') ?>" style="width:50px;">
                        </td>
                        <td>
                            <b>
                                LOGIN WITH GOOGLE+  
                            </b>  
                        </td>
                    </tr>
                </table>
            </p>
            <p class="text-center" style="border-top:solid 1px #ccc;">
                <small>
                    Log in with your email address 
                </small>
            </p>
            <form class="form" id="formLogin" method="POST" action="<?php echo site_url('/circle/login/')?>">
                <p>
                    <input name="email" id="email" class="form-control" type="email" placeholder="Enter email address">
                    <div id="error_email" class="error-message"></div>
                </p>
                <p>
                    <input name="password" id="password" class="form-control" type="password" placeholder="Enter password">
                    <div id="error_password" class="error-message"></div>
                </p>
                <p>
                    <input id="hide_butt" type="button" onclick="valid_login()" class="col-lg-12 col-sm-12 col-xs-12 btn btn-warning" value="Login">
                    <div id="valid" style="width:100%;display:none;">
                        <img src="<?php echo base_url('public/img/special-icon/loading.gif') ?>" width="25px" style="display:block;margin:auto;">
                    </div>
                </p>
            </form>
            <p class="text-right">
                <a href ="#" id="open-retrieval">
                    Forgot password?
                </a>
                <br />
                <a href="#" id="open-register">
                    Register Now!
                </a>
                <br />
                <a href="#" id="open-verification">
                    Send Verification Again
                </a>
            </p>
        </div>

        <div style="clear:both"></div>

        <div class="col-md-3 col-sm-2"></div>
        <div class="col-md-6 col-sm-8 col-xs-12 bg-white boxed p-overall-20"  id="forgot-password" style="display:none;">
            <h3 class="text-center">
                <img src="<?php echo base_url('public/img/canvass.png') ?>" style="width:50px;display:inline-block;">CANVASS
            </h3>
            <p class="text-center" style="border-top:solid 1px #ccc;">
                <small>
                    Forgot Password
                </small>
            </p>
            <form class="form" id="formRetrieval" method="POST" action="<?php echo site_url('/circle/retrieve/')?>">
                <p>
                    <input name="email" id="retrieval_email" class="form-control" type="email" placeholder="Enter email address">
                    <div id="retrieval_error_email" class="error-message"></div>
                </p>
                <p>
                    <a class="col-lg-6 col-sm-6 col-xs-6 btn btn-primary back-to-start">
                        Back
                    </a>
                    <input type="button" onclick="valid_retrieval()" class="col-lg-6 col-sm-6 col-xs-6 btn btn-warning" value="Retrieve Password">
                </p>
            </form>
        </div>

        <div style="clear:both"></div>

        <div class="col-md-3 col-sm-2"></div>
        <div class="col-md-6 col-sm-8 col-xs-12 bg-white boxed p-overall-20"  id="register" style="display:none;">
            <h3 class="text-center">
                <img src="<?php echo base_url('public/img/canvass.png') ?>" style="width:50px;display:inline-block;">CANVASS
            </h3>
            <p class="text-center" style="border-top:solid 1px #ccc;">
                <small>
                    Register Now!
                </small>
            </p>
            <form class="form" id="formRegister" method="POST" action="<?php echo site_url('/circle/register/')?>">
                <p>
                    <input name="uname" id="uname" class="form-control" type="text" placeholder="Enter user name">
                    <div id="error_uname" class="error-message"></div>
                </p>
                <p>
                    <input name="email" id="reg_email" class="form-control" type="email" placeholder="Enter email address">
                    <div id="reg_error_email" class="error-message"></div>
                </p>
                <p>
                    <input name="reg_password" id="reg_password" class="form-control" type="password" maxlength="20" placeholder="Enter password">
                    <div id="error_reg_password" class="error-message"></div>               
                </p>
                <p>
                    <input name="rpassword" id="rep_password" class="form-control" type="password" placeholder="Repeat password">
                    <div id="error_rep_password" class="error-message"></div>
                </p>
                <p>
                    <a class="col-lg-6 col-sm-6 col-xs-6 btn btn-primary back-to-start">
                       Back
                    </a>
                    <input type="button" onclick="valid_registration()" class="col-lg-6 col-sm-6 col-xs-6 btn btn-warning" value="Register Now">
                </p>
            </form>
        </div>


        <div style="clear:both"></div>

        <div class="col-md-3 col-sm-2"></div>
        <div class="col-md-6 col-sm-8 col-xs-12 bg-white boxed p-overall-20"  id="send-verification" style="display:none;">
            <h3 class="text-center">
                <img src="<?php echo base_url('public/img/canvass.png') ?>" style="width:50px;display:inline-block;">CANVASS
            </h3>
            <p class="text-center" style="border-top:solid 1px #ccc;">
                <small>
                    Resend Verification
                </small>
            </p>
            <form class="form" id="formVerify" method="POST" action="<?php echo site_url('/intro/rsv/')?>">
                <p>
                    <input name="email" id="resending_email" class="form-control" type="email" placeholder="Enter email address">
                    <div id="resending_error_email" class="error-message"></div>
                </p>
                <p>
                    <a class="col-lg-6 col-sm-6 col-xs-6 btn btn-primary back-to-start">
                        Back
                    </a>
                    <input type="button" onclick="valid_resending()" class="col-lg-6 col-sm-6 col-xs-6 btn btn-warning" value="Resend Verification">
                </p>
            </form>
        </div>

    </div>  

    <div class="st-1 animated-series bg-white"></div>
    <div class="st-2 animated-series bg-white"></div>
    <div class="st-3 animated-series bg-white"></div>
    <div class="st-4 animated-series bg-white"></div>

    <div class="nd-1 animated-series bg-white"></div>
    <div class="nd-2 animated-series bg-white"></div>
    <div class="nd-3 animated-series bg-white"></div>
    <div class="nd-4 animated-series bg-white"></div>
    <div class="nd-5 animated-series bg-white"></div>
    <div class="nd-6 animated-series bg-white"></div>

    <div class="rd-1 animated-series bg-white"></div>
    <div class="rd-2 animated-series bg-white"></div>
    <div class="rd-3 animated-series bg-white"></div>
    <div class="rd-4 animated-series bg-white"></div>

    <div class="th-1 animated-series bg-white"></div>
    <div class="th-2 animated-series bg-white"></div>
    <div class="th-3 animated-series bg-white"></div>
    <div class="th-4 animated-series bg-white"></div>
</div>
        
    