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

                        $receipt_msg = 'Hi, ' + $this->post('nickName') + '!<br>';
                        $receipt_msg .= "You sent a brew to Expedio and we want you to know that it has been delivered. We'll get back to you sooner.";
                        $receipt_msg .= "<br><br>";
                        $receipt_msg .= $this->getPosts(true);
                        $receipt_msg .= "<br><br>Visit us again at <a href='http://expedio.agency'>http://expedio.agency!</a>";
                        
                        $this->send($this->post('email'), $receipt_msg);
                    }

                    $this->ret_response(['email_sent' => true]);
    
                }
            }

        }

        $this->ret_response(false);
    }

}
