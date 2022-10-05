<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return inertia('Home', [
            'user' => [
                'name' => 'Zidan Khulul Sazid',
                'username' => 'zydnrbrn'
            ],
            'web_name' => 'zcorleone.my.id'
        ]);
    }
}
