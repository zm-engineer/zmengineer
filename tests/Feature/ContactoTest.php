<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Contacto;
class ContactoTest extends TestCase
{

    use RefreshDatabase; //refrescar base d datos cada vez que se ejecuta una prueba
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testPostContacto()
    {
        $contacto = factory(Contacto::class)->make(); //queda grabado en memoria, en caso de get seria create()

        $response = $this->json('POST', 'api/contacto', [
            'nombre' => $contacto->nombre,
            'correo' => $contacto->correo,
            'mensaje' => $contacto->mensaje
        ]);

        // $response->assertStatus(200); //en caso de get
        $response->assertJsonStructure([
            'id',
            'nombre',
            'correo',
            'mensaje'
        ])->assertStatus(201); 

        $this->assertDatabaseHas('contactos', [
            'nombre' => $contacto->nombre,
            'correo' => $contacto->correo,
            'mensaje' => $contacto->mensaje
        ]); //validar si existe los datos en la tabla contactos
    }
}
