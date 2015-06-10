<?php
/*
 * Unit_model
 * An easier way to construct your unit testing
 * and pass it to a really nice looking page.
 *
 * @author sjlu
 */
class User_model extends CI_Model {

 	function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->load->library('session');
		$this->load->database('default');
    }

    public function user_check($id)
    {
    	$check_user = $this->db->get('canvass_user');
	    foreach ($check_user->result() as $row) {
	    	if(crypt($row->user_id,'$6$rounds=5000$hellouser$') == $id){
	    		$query = $this->db->get_where('canvass_user', array('user_id' => $row->user_id));
	    		return $query->row_array();
	    	}
	    }
    }

    public function user_change_pass($email)
    {
        $check_user = $this->db->get('canvass_user');
        foreach ($check_user->result() as $row) {
            if(crypt($row->user_email,'$6$rounds=999999$rtv$') == $email){
                $query = $this->db->get_where('canvass_user', array('user_id' => $row->user_id));
                return $query->row_array();
            }
        }
    }

    public function user_verify($email)
    {
        $check_user = $this->db->get('canvass_user');
        foreach ($check_user->result() as $row) {
            if(crypt($row->user_email,'$6$rounds=999999$vfy$') == $email){
                $update = array(
                   'user_verified' => 1,
                );

                $this->db->where('user_id', $row->user_id);
                $this->db->update('canvass_user', $update);

                $query = $this->db->get_where('canvass_user', array('user_id' => $row->user_id));
                return $query->row_array();
            }
        }
    }

    public function clear_sess()
    {
        $this->session->unset_userdata('ue');
        $this->session->unset_userdata('un');
        $this->session->unset_userdata('up');
        $this->session->unset_userdata('ul');
    }
}
