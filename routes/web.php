<?php


use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Home', [
        'title' => 'Connect People,More People... In The World. ',
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// post route


Route::get('/dashboard',[ProfileController::class, 'index'], function () {
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/posts', PostController::class);
require __DIR__.'/auth.php';


