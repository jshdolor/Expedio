<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$email['collaborate'] = [
    'from'          => 'activate@expedio.agency',
    'receiver'      => 'activate@expedio.agency',
    'send_receipt'  => true,
    'app_name'      => 'Expedio Website - http://expedio.agency',
    'subject'       => 'EXPEDIO INQUIRY',
    'send_receipt'  => true
];

$config['email'] = $email;


