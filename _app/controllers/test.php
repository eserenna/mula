<?php if (!defined('BASEPATH')) die();
class Test extends CI_Controller {

	public function index()
   	{  
	   	for ($i=1; $i < 34; $i++) { 
	   		echo $i.".jpg,";
	   	}
	    
   	}
}