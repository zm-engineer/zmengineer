<?php

namespace App\Http\Middleware;

use Closure;

class ForceHttpProtocol {

    public function handle($request, Closure $next) {

        if (env('APP_ENV') === 'pro') {

          if (!$request->secure()) {
              return redirect()->secure($request->getRequestUri());
          }

        }

        return $next($request);
    }

}
