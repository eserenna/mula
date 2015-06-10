<?php
if (!defined('BASEPATH'))
exit('No direct script access allowed');
 
//include the facebook.php from libraries directory
require_once APPPATH . 'libraries/fb/facebook.php';
 
class Fb extends CI_Controller {
 
public function __construct() {
	parent::__construct();
	$this->load->helper(array('form', 'url','captcha','html'));
	$this->load->library('session');
	$this->load->database('default');
   	if ($this->session->userdata('user_id')) {
		redirect('/admin/inside'); 
   	}else{
   		//redirect('/intro'); 
   	}
	$this->config->load('fb');
}
 
public function index() {
	$is_logged_in = $this->session->userdata('user_id');
	$error['error'] = '';
	$head['title']	=	'Canvass';
    $this->load->view('include/header', $head);
    $this->load->view('js/js-intro');
    $this->load->view('js/js-lightbox');
    if ($this->session->userdata('error')) {
		$error['error'] = $this->session->userdata('error');
		$this->load->view('js/js-modal-error',$error);
	}else{
		$this->load->view('js/js-modal',$error);
	}
    $this->load->view('js/js-end');
    $this->load->view('nav/nav-normal',$error);
	$this->load->view('fb');
	$this->load->view('include/footer');
}
 
public function logout() {
	$signed_request_cookie = 'fbsr_' . $this->config->item('fb_appid');
	setcookie($signed_request_cookie, '', time() - 3600, "/");
	$this->session->sess_destroy();  //session destroy
	redirect('/fb/index', 'refresh');  //redirect to the home page
}
 
public function fblogin() {
$facebook = new Facebook(array(
	'appId' => $this->config->item('fb_appid'),
	'secret' => $this->config->item('fb_secret'),
));
// We may or may not have this data based on whether the user is logged in.
// If we have a $user id here, it means we know the user is logged into
// Facebook, but we don't know if the access token is valid. An access
// token is invalid if the user logged out of Facebook.
$user = $facebook->getUser(); // Get the facebook user id
$profile = NULL;
$logout = NULL;
 
if ($user) {
try {
$profile = $facebook->api('/me');  //Get the facebook user profile data
$access_token = $facebook->getAccessToken();
$params = array('next' => base_url('fb/logout/'), 'access_token' => $access_token);
$logout = $facebook->getLogoutUrl($params);
 
} catch (FacebookApiException $e) {
error_log($e);
$user = NULL;
}
 
$data['user_id'] = $user;
$data['name'] = $profile['name'];
$data['logout'] = $logout;
$this->session->set_userdata($data);
redirect('/fb/test');
}
}
 
	public function test() {
		var_dump($this->session->all_userdata());
		$this->load->view('test');
	}
 
}
 