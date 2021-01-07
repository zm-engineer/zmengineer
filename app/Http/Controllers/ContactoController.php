<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contacto;

class ContactoController extends Controller
{
  public function store(Request $request){

    $contacto = new Contacto();

    $contacto->nombre = $request->nombre;
    $contacto->correo = $request->correo;
    $contacto->mensaje = $request->mensaje;
    $contacto->save();

    return response()->json($contacto, 201);

  }

}
