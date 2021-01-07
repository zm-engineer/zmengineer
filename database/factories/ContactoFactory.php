<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Contacto;
use Faker\Generator as Faker;

$factory->define(Contacto::class, function (Faker $faker) {
    return [
        'nombre' => $faker->text($maxNbChars = 200),
        'correo' => $faker->text($maxNbChars = 200),
        'mensaje' => $faker->text($maxNbChars = 5000),
    ];
});
