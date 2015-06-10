<?php if (!defined('BASEPATH')) die();
class Vfy extends CI_Controller {

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
		$user = $this->user_model->user_verify($_GET['v']);
		
		$this->user_model->clear_sess();

		$sess = array(
               'user_logged_in'  => crypt($user['user_id'],'$6$rounds=5000$hellouser$')
        );

	    $this->session->set_userdata($sess);
        redirect('/canvass/', 'refresh');
	}
}