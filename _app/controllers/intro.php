<?php if (!defined('BASEPATH')) die();
class Intro extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->helper(array('form', 'url','captcha'));
		$this->load->library('session');
		$this->load->database('default');
		if($this->session->userdata('user_logged_in')){
			redirect('/canvass/', 'refresh');
		}
		$this->load->model('user_model');
		
	}
   
   	public function index()
	{
		$this->user_model->clear_sess();

		$head['title']	=	'Welcome to Canvass';
		$this->load->view('open',$head);
		$this->load->view('header/header-intro');
		$this->load->view('main/main-intro');
		$this->load->view('footer/footer-intro');
		$this->load->view('js');
		$this->load->view('script');
		$this->load->view('close');
	}

	public function rsv()
	{
		$query = $this->db->get_where('canvass_user', array('user_email' => $_POST['email'] ));
		foreach ($query->result() as $row) {
			$email = $row->user_email;
			$name = $row->user_name;
			$password_length = $row->user_password_length;
		}
		
		$password_hidden = "";
      	for ($i=0; $i < $password_length ; $i++) { 
         	$password_hidden .= '*';
      	} 
  		$data = array(
        	'ue' => $email, 
         	'un' => $name, 
         	'up' => $password_hidden,
         	'ul' => 'http://canvass.emerga.com.my/index.php/vfy?v='.crypt($email,'$6$rounds=999999$vfy$')
      	);

      	$this->session->set_userdata($data);
      	redirect('/circle/vfy_me/', 'refresh');
	}

	public function registered()
	{
		if(!$this->session->userdata('ue')){
			redirect('/intro/', 'refresh');
		}
		
		$head['title']	=	'Check your email';
		$this->load->view('open',$head);
		$this->load->view('header/header-intro');

		$data = array(
	        'user_email' => $this->session->userdata('ue'), 
	        'user_name' => $this->session->userdata('un'), 
	        'user_password' => $this->session->userdata('up'), 
	        'user_link' => $this->session->userdata('ul'), 
	    );

		$this->load->view('main/main-registered',$data);
		$this->load->view('footer/footer-intro');
		$this->load->view('js');
		$this->load->view('script');
		$this->load->view('close');
	}

	public function retrieval()
	{
		if(!$this->session->userdata('ue')){
			redirect('/intro/', 'refresh');
		}
		
		$head['title']	=	'Check your email';
		$this->load->view('open',$head);
		$this->load->view('header/header-intro');

		$data = array(
	        'user_email' => $this->session->userdata('ue'), 
	        'user_name' => $this->session->userdata('un'), 
	        'user_password' => $this->session->userdata('up'), 
	        'user_link' => $this->session->userdata('ul'), 
	    );

		$this->load->view('main/main-retrieval',$data);
		$this->load->view('footer/footer-intro');
		$this->load->view('js');
		$this->load->view('script');
		$this->load->view('close');
	}
}