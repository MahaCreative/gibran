<?php

use App\Http\Controllers\ProfileController;
use App\Models\Data;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PhpMqtt\Client\Facades\MQTT;

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
    return inertia('Welcome');
});
Route::post('update-lampu1', function (Request $request) {
    $data = Data::findOrFail(1);

    $data->update([
        'status_lampu1' => $request->lampu,
    ]);
    MQTT::publish('lampu1', $request->lampu == "true" ? "on" : "off");
    return redirect()->back();
});
Route::post('update-lampu2', function (Request $request) {
    $data = Data::findOrFail(1);
    $data->update([
        'status_lampu2' => $request->lampu,
    ]);
    MQTT::publish('lampu2', $request->lampu == "true" ? "on" : "off");
    return redirect()->back();
});

Route::post('update-kipas', function (Request $request) {
    $data = Data::findOrFail(1);
    $data->update([
        'status_kipas' => $request->kipas,
    ]);
    MQTT::publish('kipas1', $request->kipas == "true" ? "on" : "off");
    return redirect()->back();
});
