<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\categoria_articulo;
use DB;
class Categoria_ArticuloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$articulo = DB::select('SELECT * FROM `usuarios` WHERE id>=1');
        return categoria_articulo::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $categoria_articulo = categoria_articulo::find($id);
        if($categoria_articulo){
            return $categoria_articulo;
        }
        return response('categoria_articulo Not found', 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }



    public function eliminar($id)
    {


        categoria_articulo::find($id)->delete();


    }

    public function modificar(Request $request, $id)
    {
        try{

            $categoria_articulo = categoria_articulo::find($id);
            $categoria_articulo->grupo = $request->grupo ;
            $categoria_articulo->no_sucursal = $request->no_sucursal;
            $categoria_articulo->nombre_comercial = $request->nombre_comercial;
            $categoria_articulo->direccion = $request->direccion ;
            $categoria_articulo->ciudad = $request->ciudad;
            $categoria_articulo->estado = $request->estado;
            $categoria_articulo->telefono = $request->telefono ;
            $categoria_articulo->email = $request->email;
            $categoria_articulo->estatus = $request->estatus;
            $categoria_articulo->save();

            return response('categoria_articulo modified', 200);
        }catch(Exception $e){
            return response('Error Updating categoria_articulo', 400);
        }


    }

}
