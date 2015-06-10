<?php if (!defined('BASEPATH')) die();
class fof extends CI_Controller {

   public function index()
	{
		$head['title']	=	'Hi Smartass!';
		
		$this->load->view('open', $head);

      	$this->load->view('header/header-404');
      	$this->load->view('main/main-404');
      	$this->load->view('footer/footer-404');

      	$this->load->view('close');
	}
   
}
