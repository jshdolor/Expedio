<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'controllers/BaseRestController.php';

class BaseEmail extends BaseRestController {

    function __construct() {
        parent::__construct();
        $this->load->library('email');

        // $this->receiver = 'expediolive@expedio.agency';
        $this->receiver = 'dolorjsh@gmail.com';
        $this->app_name = 'Expedio Website - http://expedio.agency';
        $this->subject = 'EXPEDIO';

    }

    protected function setSubject($subject) {
        $this->subject = $subject;
    }

    protected function send($content = 'no content', $isHtml=true) {

        $this->email->from(null, $this->app_name);
        $this->email->to($this->receiver);
        $this->email->subject($this->subject);
        $this->email->message($content);

        if ( ! $this->email->send())
        {
            return false;
        }

        return true;
    }

    

}
