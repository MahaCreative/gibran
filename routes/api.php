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

    $data = Data::findOrFail(1);
    $data->update([
        'status_lampu1' => $request->status_lampu1,
        'status_lampu2' => $request->status_lampu2,
        'status_kipas' => $request->status_kipas,
        'temperature' => $request->temperature,
        'humidity' => $request->humidity,
    ]);
});
