<?php if (!defined('BASEPATH')) die();
class Canvass extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->helper(array('form', 'url','captcha'));
		$this->load->library('session');
		$this->load->database('default');
		if(!$this->session->userdata('user_logged_in')){
			redirect('/intro/', 'refresh');
		}
		$this->load->model('user_model');
		
	}
   
   public function index()
	{
	    
		$user = $this->user_model->user_check($this->session->userdata('user_logged_in'));

		$head['title']	=	$user['user_name']."'s Canvass";
		$this->load->view('open',$head);
		$this->load->view('header/header-canvass');

		$data['name'] =  $user['user_name'];

		$this->load->view('main/main-canvass', $data);
		$this->load->view('footer/footer-canvass');
		$this->load->view('js');
		$this->load->view('script');
		$this->load->view('close');
	}

	public function setting()
	{
		$user = $this->user_model->user_check($this->session->userdata('user_logged_in'));

		$head['title']	=	$user['user_name']."'s Setting";
		$this->load->view('open',$head);
		$this->load->view('header/header-canvass');

		$data['name'] =  $user['user_name'];
		$data['email'] =  $user['user_email'];
		$data['password'] = "";
		for ($i=0; $i < $user['user_password_length'] ; $i++) { 
			$data['password'] .= '*';
		}

		$this->load->view('main/main-setting', $data);
		$this->load->view('footer/footer-canvass');
		$this->load->view('js');
		$this->load->view('script');
		$this->load->view('close');
	}
}