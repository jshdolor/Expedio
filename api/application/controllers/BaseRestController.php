<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class BaseRestController extends REST_Controller {

    function __construct() {
        parent::__construct();

        $this->errorData = $this->setErrorData();
        $this->breakln = '<br>';
    }

    protected function setErrorData($message=NULL) {
        return array(
            'code' => self::HTTP_BAD_REQUEST,
            'error' => array(
                'message' => $this->http_status_codes[self::HTTP_BAD_REQUEST],
                'status' => 'failed',
                'success' => false
            )
        );
    }

    protected function ret_response($data=FALSE) {
        
        if($data!==FALSE) {

            $response['data']['data'] = $data;
            $response['data']['message'] = $this->http_status_codes[self::HTTP_OK];
            $response['code'] = self::HTTP_OK;

            $this->response($response);
        }

        $this->response($this->errorData);
    }

    protected function getPosts($string=false) {
        $post = array();
        $posts = '';
        foreach ( $_POST as $key => $value )
        {
            $post[$key] = $this->input->post($key);
            $posts .= $key . ' : ' . $this->input->post($key) . $this->breakln;
        }

        if($string) {
            return sizeof($post) > 0 ? $posts : '';
        }
        
        return sizeof($post) > 0 ? $post:false;
    }

    

    


}
