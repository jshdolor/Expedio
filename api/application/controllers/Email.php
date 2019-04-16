<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Email extends REST_Controller {

	
	public function index()
	{
		$this->load->view('welcome_message');
	}
}
