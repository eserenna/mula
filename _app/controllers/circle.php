<?php if (!defined('BASEPATH')) die();
class Circle extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->helper(array('form', 'url','captcha'));
		$this->load->library('session');
		$this->load->database('default');
      $this->load->model('user_model');
	}

   public function login_check()
   {   
      $email = $_POST['email'];
      $password = crypt($_POST['password'],'$6$rounds=999999$gocrazyforme$');
      $query = $this->db->get_where('canvass_user' ,array('user_email' => $email, 'user_password' => $password, 'user_verified' => 1));
      
      if($query->num_rows() > 0){
         echo '1';
      }else{
         echo '0';
      }
   }

   public function login()
   {
      $email = $_POST['email'];
      $password = crypt($_POST['password'],'$6$rounds=999999$gocrazyforme$');
      $query = $this->db->get_where('canvass_user' ,array('user_email' => $email, 'user_password' => $password, 'user_verified' => 1));
      
      $this->user_model->clear_sess();

      if($query->num_rows() > 0){
         foreach ($query->result() as $row)
         {
            $sess = array(
               'user_logged_in'  => crypt($row->user_id,'$6$rounds=5000$hellouser$')
            );
         }
         $this->session->set_userdata($sess);
         redirect('/canvass/', 'refresh');
      }
   }

   public function register()
   {
      $name = $_POST['uname'];
      $email = $_POST['email'];
      $password = crypt($_POST['reg_password'],'$6$rounds=999999$gocrazyforme$');
      $password_length = strlen($_POST['reg_password']);

      $insert = array(
         'user_email' => $email, 
         'user_name' => $name, 
         'user_password' => $password, 
         'user_password_length' => $password_length, 
         'user_verified' => 0
      );

      $this->db->insert('canvass_user', $insert);

      $password_hidden = "";
      for ($i=0; $i < $password_length ; $i++) { 
         $password_hidden .= '*';
      } 
      $data = array(
         'ue' => $email, 
         'un' => $name, 
         'up' => $password_hidden,
         'ul' => 'http://canvass.emerga.com.my/vfy?v='.crypt($email,'$6$rounds=999999$vfy$')
      );

      $this->session->set_userdata($data);
      redirect('/circle/vfy_me/', 'refresh');
   }

   public function vfy_me()
   {
      $data = array(
         'user_email' => $this->session->userdata('ue'), 
         'user_name' => $this->session->userdata('un'), 
         'user_password' => $this->session->userdata('up'), 
         'user_link' => $this->session->userdata('ul'), 
      );
      $message = $this->load->view('mail_format_verification',$data,TRUE);
      
      $this->load->library('email');
      $config = array (
         'mailtype' => 'html',
         'charset'  => 'utf-8',
         'priority' => '1'
      );

      $this->email->initialize($config);
      $this->email->from('admin@canvass.emerga.com.my', 'Administrator of Canvass');
      $this->email->to($data['user_email']); 
      $this->email->subject('Canvass Verification');
      $this->email->message($message); 
      $this->email->send();

      redirect('/intro/registered/', 'refresh');

   }   

   public function retrieve()
   {   
         $query = $this->db->get_where('canvass_user' ,array('user_email' => $_POST['email']));
         foreach ($query->result() as $row)
         {
            $email = $row->user_email;
            $name = $row->user_name;
            $password_length = $row->user_password_length;
         }

         $password_hidden = "";
         for ($i=0; $i < $password_length ; $i++) { 
            $password_hidden .= '*';
         } 
         $seed = str_split('abcdefghijklmnopqrstuvwxyz'
                     .'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                     .'0123456789!@#$%^&*()'); // and any other characters
         shuffle($seed); // probably optional since array_is randomized; this may be redundant
         $rand = '';
         foreach (array_rand($seed, 10) as $k) $rand .= $seed[$k];
         $data = array(
            'ue' => $email, 
            'un' => $name, 
            'up' => $rand
         );
         $message = $this->load->view('mail_format_retrieval',$data,TRUE);

         $password = crypt($rand,'$6$rounds=999999$gocrazyforme$');

         $data2 = array(
               'user_password' => $password,
               'user_password_length' => '10',
            );
         $this->db->where('user_email', $email);
         $this->db->update('canvass_user', $data2); 

         $this->load->library('email');
         $config = array (
            'mailtype' => 'html',
            'charset'  => 'utf-8',
            'priority' => '1'
         );

         $this->email->initialize($config);
         $this->email->from('admin@canvass.emerga.com.my', 'Administrator of Canvass');
         $this->email->to($data['ue']); 
         $this->email->subject('Canvass Password Retrieval');
         $this->email->message($message); 
         $this->email->send();
         
         $this->session->set_userdata($data);
         redirect('/intro/retrieval/', 'refresh');
   }

   public function logout()
   {   
      $this->session->sess_destroy();
      redirect('/intro/', 'refresh');
   }

   
}
