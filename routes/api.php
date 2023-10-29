<?php

use App\Models\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('sent-data', function (Request $request) {
    $data = Data::create([
        'status_lampu1' => $request->lampu1,
        'status_lampu2' => $request->lampu2,
    ]);
});
