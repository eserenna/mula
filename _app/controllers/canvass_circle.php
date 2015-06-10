<?php if (!defined('BASEPATH')) die();
class Canvass_circle extends CI_Controller {

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

	public function create_survey()
   {  
      echo $this->session->userdata('user_logged_in');
      echo "<br />";
      $check_user = $this->db->get('canvass_user');
      
      if($this->input->post()){
         echo $this->input->post('canvass_name');
         echo "<br />";
         echo $this->input->post('canvass_date');
         echo "<br />";
         echo $this->input->post('canvass_timer');
         echo "<br />";
         echo $this->input->post('canvass_description');
         echo "<br />";
         echo $this->input->post('canvass_file');

         $data = array(
            'canvass_title' =>  $this->input->post('canvass_name'),
            'canvass_date' =>  $this->input->post('canvass_date'),
            'canvass_timer' =>  $this->input->post('canvass_timer'),
            'canvass_description' =>  $this->input->post('canvass_description'),
            'canvass_counter' =>  '',
         );

         $this->db->insert('canvass_survey', $data); 
         
      }
      

   }

   public function do_upload()
   {  
      $config['file_name'] = 'cow';
      $config['upload_path'] = FCPATH.'/public/img/uploads/';
      $config['allowed_types'] = 'gif|jpg|png';
      $config['max_size']  = '100';
      $config['max_width']  = '1024';
      $config['max_height']  = '768';

      $this->load->library('upload', $config);
      var_dump($this->load->library('upload', $config));
      if ( ! $this->upload->do_upload())
      {
         $error = array('error' => $this->upload->display_errors());

         var_dump($error);
      }else{
         $data = array('upload_data' => $this->upload->data());

         var_dump($data);
      }
   }
   public function changePassword()
   {
      $user = $this->session->userdata('user_logged_in')
      $query = $this->db->get('canvass_user');
      $new_password = $_POST['new_password'];

   }
}