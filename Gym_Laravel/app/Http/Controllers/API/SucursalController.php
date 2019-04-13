<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\grupo_sucursal;

class SucursalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return grupo_sucursal::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $grupo_sucursal = new grupo_sucursal();
            $grupo_sucursal->grupo = $request->grupo ;
            $grupo_sucursal->no_sucursal = $request->no_sucursal;
            $grupo_sucursal->nombre_comercial = $request->nombre_comercial;
            $grupo_sucursal->direccion = $request->direccion ;
            $grupo_sucursal->ciudad = $request->ciudad;
            $grupo_sucursal->estado = $request->estado;
            $grupo_sucursal->telefono = $request->telefono ;
            $grupo_sucursal->email = $request->email;
            $grupo_sucursal->estatus = $request->estatus;
            $grupo_sucursal->save();
            return response('Sucursal creada creada', 201);
        }catch(Exception $e){
            return response('Sucursal no creada', 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $grupo_sucursal = grupo_sucursal::find($id);
        if($grupo_sucursal){
            return $grupo_sucursal;
        }
        return response('grupo_sucursal Not found', 404);
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
        return grupo_sucursal::find($id)->delete();
    }


    public function eliminar($id)
    {


        grupo_sucursal::find($id)->delete();


    }


}
