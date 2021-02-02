<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contacto;

use Mail;
use App\Helpers\Frontend\EnviosCorreo as HelperCorreo;

class ContactoController extends Controller
{
  public function store(Request $request){

    $contacto = new Contacto();
    $contacto->nombre = $request->nombre;
    $contacto->correo = $request->correo;
    $contacto->mensaje = $request->mensaje;
    $contacto->save();


     $correo =  'zmengineer.dev@gmail.com';
     $subject = 'Tienes un nuevo contacto desde la web ZM Engineer.';
     HelperCorreo::sendMail('emails.contacto', $contacto, $correo, $subject);

    return response()->json($contacto, 201);

  }

}
