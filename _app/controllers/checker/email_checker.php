<?php if (!defined('BASEPATH')) die();
class Email_checker extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->database('default');
	}

	public function index()
	{
		if($_POST['email'])
		{
			$email = mysql_real_escape_string($_POST['email']);

			$getter = $this->db->get_where('canvass_user', array('user_email' => $email));

			if($getter->num_rows())
			{
				foreach ($getter->result() as $row){
					if ($row->user_verified != 1) {
						echo '2';
					} else {
						echo '1';
					}	
				}
			}
			else
			{
				echo '0';
			}
		}
	}
}