<?php

/*


*/
//Route::get('/Inicio','API\ArticuloController@index')->name('Datosnotas');
Route::get('/', function () {
    return view('welcome');
});
Route::get('/Articulos','API\ArticuloController@index')->name('Articulos_admin');
Route::get('/Categorias','API\Categoria_ArticuloController@index')->name('Categorias_admin');
Route::get('/Clientes','API\ClienteController@index')->name('Clientes_admin');
Route::get('/Mensualidades','API\Clientes_MensualidadesController@index')->name('Mensualidades_admin');
Route::get('/Compras','API\CompraController@index')->name('Compras_admin');
Route::get('/Sucursales','API\SucursalController@index')->name('sucursales_admin');
Route::get('/Proveedores','API\ProveedorController@index')->name('proveedores_admin');
