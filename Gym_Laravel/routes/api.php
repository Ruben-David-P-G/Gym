<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::resource('/Sucursal', 'API\SucursalController');
Route::get('/delete/sucursal/{id}','API\SucursalController@eliminar');
//Route::get('/Sucursal','API\SucursalController@index')->name('sucur_admin');
//Route::get('/Inicio','API\ArticuloController@index')->name('Datosnotas');

