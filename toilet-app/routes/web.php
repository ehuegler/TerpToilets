<?php

use Illuminate\Support\Facades\Route;
use Subfission;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function ()
{
    return view('welcome');
});

Route::middleware(['cas.auth'])->group(function ()
{
    Route::get('/restricted', function ()
    {
        return view('restricted');
    });
});

Route::get('/auth/logout', [
    'middleware' => 'cas.auth', 
    function(){ 
        cas()->logout(); 
    }
]);