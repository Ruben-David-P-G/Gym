<?php

use Illuminate\Http\Request;


Route::resource('/Sucursal', 'API\SucursalController');
Route::get('/delete/sucursal/{id}','API\SucursalController@eliminar');
Route::post('/modificar/sucursal/{id}','API\SucursalController@modificar');


Route::resource('/Categoria', 'API\Categoria_ArticuloController');
Route::get('/delete/Categoria/{id}','API\Categoria_ArticuloController@eliminar');
Route::post('/modificar/Categoria/{id}','API\Categoria_ArticuloController@modificar');

