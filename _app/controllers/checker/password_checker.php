<?php if (!defined('BASEPATH')) die();
class Password_checker extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->database('default');
		$this->load->library('session');
	}

	public function index()
	{
		$user = $this->session->userdata('user_logged_in');
		if( $_POST['email_password'] ){
			$password = $_POST['email_password'];
		} elseif( $_POST['old_password'] ){
			$password = $_POST['old_password'];
		}
			
		$query = $this->db->get('canvass_user');
		foreach ( $query->result() as $row ){
			if ( $user == crypt($row->user_id,'$6$rounds=5000$hellouser$') && $row->user_password == crypt($password,'$6$rounds=999999$gocrazyforme$') ) {
				echo '1';
			}else{
				echo '0';
			}
		}
	}
}