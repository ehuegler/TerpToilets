<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BathroomController;

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

Route::get('/', [BathroomController::class, 'index']);


// authenticated routes
Route::middleware(['cas.auth'])->group(function () {
    Route::get('/restricted', function () {
        return view('restricted');
    });
});


// authentication logout route
Route::get('/auth/logout', [
    'middleware' => 'cas.auth',
    function () {
        cas()->logout();
    }
]);
