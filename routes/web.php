<?php


use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\FeedController;
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
Route::get('/post', [PostController::class, 'index']);
Route::resource('post', 'App\Http\Controllers\PostController');

Route::get('/dashboard',[ProfileController::class, 'index'], function () {
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

// feed route
Route::get('/feed', [FeedController::class, 'index']);

