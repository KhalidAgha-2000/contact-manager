<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'contacts'], function () {
    Route::get('/all-contact', [ContactController::class, 'allContacts']);
    Route::get('/contact-by-id/{id}', [ContactController::class, 'getContactById']);
    Route::post('/create-contact', [ContactController::class, 'addContact']);
    Route::post('/update-contact/{id}', [ContactController::class, 'updateContact']);
    Route::delete('/delete-contact/{id}', [ContactController::class, 'deleteContact']);
});


