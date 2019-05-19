<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'controllers/Email/BaseEmail.php';

class Collaborate extends BaseEmail {

    function __construct() {
        parent::__construct();


        $this->setConfig($this->emailConfigs['collaborate']);
    }

    public function index_get() {
        $array = array('value' => 99999999);
        $this->ret_response($array);
    }

    public function index_post() {

        if($this->getPosts()) {

            if(
                $this->post('name') &&
                $this->post('nickName') && 
                $this->post('email') && 
                $this->post('subject') && 
                $this->post('message')) {
                
                if($this->send(null, $this->getPosts(true))) {
                    
                    if($this->email_config['send_receipt']) {

                        $receipt_msg = 'INQUIRY SENT<br><br>' . $this->getPosts(true);
                        $this->send($this->post('email'), $receipt_msg);
                    }

                    $this->ret_response(['email_sent' => true]);
    
                }
            }

        }

        $this->ret_response(false);
    }

}
