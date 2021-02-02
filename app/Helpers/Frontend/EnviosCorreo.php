<?php

namespace App\Helpers\Frontend;
use Mail;
use View;

class EnviosCorreo {

 public static function sendMail($template, $params_template,  $to_emails, $subject){

    //desarrollo
    /*
       Mail::send($template, ['data' => $params_template],  function($message) use ($to_emails, $subject)
      {
          $message->from('contacto@zmengineer.com', 'ZMENGINEER');
          $message->to($to_emails)->subject($subject);
      });

      */

    //produccion
   try {

       $view = View::make($template, [
             'data' => $params_template
       ]);

       $html = $view->render();
       $to=$to_emails;

       $headers = "From: contacto@zmengineer.com" . "\r\n";
       $headers .= "MIME-Version: 1.0\r\n";
       $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

       mail($to, "=?UTF-8?B?".base64_encode($subject)."?=", $html, $headers);

       } catch (Exception $e) {
           dd($e);
     }
 }


}
