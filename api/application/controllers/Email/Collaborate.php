<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'controllers/Email/BaseEmail.php';

class Collaborate extends BaseEmail {

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
                
                if($this->send($this->getPosts(true))) {
        
                    $this->ret_response(['email_sent' => true]);
    
                }
            }

        }

        $this->ret_response(false);
    }

}
