<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'controllers/BaseRestController.php';

class BaseEmail extends BaseRestController {

    private $subject = 'EXPEDIO';
    private $from = 'activate@expedio.agency';
    private $app_name = 'EXPEDIO';
    private $receiver = 'activate@expedio.agency';

    function __construct() {
        parent::__construct();
        $this->load->library('email');
        $this->load->config('email');
        $this->emailConfigs = $this->config->item('email');
        $this->email_config = null;


        $this->email_from = null;

    }

    protected function setConfig($config) {
        $this->email_config = $config;
    }

    protected function setSubject($subject) {
        $this->subject = $subject;
    }

    private function loadConfig() {
        $this->subject = $this->email_config['subject'];
        $this->from = $this->email_config['from'];
        $this->app_name = $this->email_config['app_name'];
        $this->receiver = $this->email_config['receiver'];
    }

    protected function send($receiver, $content = 'no content', $isHtml=true) {

        $this->loadConfig();

        if($isHtml) {
            $this->email->set_mailtype("html");
        }

        if(isset($receiver)) {
            $this->receiver = $receiver;
        }

        $this->email->from($this->from, $this->app_name);
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