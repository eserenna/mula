<div id="main">
    <div class="container">
        <div class="col-md-3 col-sm-2"></div>
        <div class="col-md-6 col-sm-8 col-xs-12 bg-white boxed p-overall-20"  id="check-email" style="display:none;">
            <h3 class="text-center">
                <img src="<?php echo base_url('public/img/canvass.png') ?>" style="width:50px;display:inline-block;">CANVASS
            </h3>
            <p class="text-center" style="border-top:solid 1px #ccc;">
                <small>
                    Forgot Password
                </small>
            </p>
            <p class="text-center">
                <h2>Hi, <?php echo $user_name ?>!</h2>
                <br />
                We have sent an email to
                <b><?php echo $user_email; ?></b>.
                 regarding you forgot your password.
                <br />
                If you didn't receive any email from us click the button below.
                <br /><br /><br />
                <a class="col-lg-6 col-sm-6 col-xs-6 btn btn-primary back-to-start" href="<?php echo site_url('/intro');?>">
                    Back
                </a>
                <form class="form" id="formRetrieval" method="POST" action="<?php echo site_url('/circle/retrieve/')?>">
                    <input name="email" id="retrieval_email" class="form-control" type="hidden" placeholder="Enter email address" value="<?php echo $user_email; ?>">
                    <input type="button" onclick="valid_retrieval()" class="col-lg-6 col-sm-6 col-xs-6 btn btn-warning" value="Resend Email">
                </form>
            </p>
        </div>
    </div>  

    <div class="st-1 animated-series bg-white stop-animate"></div>
    <div class="st-2 animated-series bg-white stop-animate"></div>
    <div class="st-3 animated-series bg-white stop-animate"></div>
    <div class="st-4 animated-series bg-white stop-animate"></div>

    <div class="nd-1 animated-series bg-white stop-animate"></div>
    <div class="nd-2 animated-series bg-white stop-animate"></div>
    <div class="nd-3 animated-series bg-white stop-animate"></div>
    <div class="nd-4 animated-series bg-white stop-animate"></div>
    <div class="nd-5 animated-series bg-white stop-animate"></div>
    <div class="nd-6 animated-series bg-white stop-animate"></div>

    <div class="rd-1 animated-series bg-white stop-animate"></div>
    <div class="rd-2 animated-series bg-white stop-animate"></div>
    <div class="rd-3 animated-series bg-white stop-animate"></div>
    <div class="rd-4 animated-series bg-white stop-animate"></div>

    <div class="th-1 animated-series bg-white stop-animate"></div>
    <div class="th-2 animated-series bg-white stop-animate"></div>
    <div class="th-3 animated-series bg-white stop-animate"></div>
    <div class="th-4 animated-series bg-white stop-animate"></div>
</div>
        
    