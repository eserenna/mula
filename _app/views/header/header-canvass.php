<body class="bg-grey-d">
  <header>
    <nav class="navbar navbar-default" role="navigation">
  		<div class="container">
      		<div class="navbar-header">
        			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          			<span class="sr-only">Toggle navigation</span>
          			<span class="icon-bar"></span>
          			<span class="icon-bar"></span>
          			<span class="icon-bar"></span>
        			</button>
        			<a class="navbar-brand" href="<?php echo site_url('/intro/')?>">
                <img src="<?php echo base_url('public/img/canvass.png') ?>" style="width:25px;display:inline-block">
                Canvass
        			</a>
      		</div>
      		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        			<ul class="nav navbar-nav navbar-right">
        				<li>
        					<a href="<?php echo site_url('/canvass/')?>">
        						Home
        					</a>
        				</li>
                <li>
                  <a href="<?php echo site_url('/canvass/setting')?>">
                    Setting
                  </a>
                </li>
          			<li>
          				<a href="<?php echo site_url('/circle/logout/')?>">
      	    				Logout
          				</a>
          			</li>
        			</ul>
      		</div>
    		</div>
  	</nav>
  </header>