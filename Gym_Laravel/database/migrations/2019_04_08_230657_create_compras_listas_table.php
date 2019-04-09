<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComprasListasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compras_listas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->Integer('cantidad');
            $table->bigInteger('id_compra')->unsigned();
            $table->bigInteger('id_categoria')->unsigned();
            $table->bigInteger('id_articulo')->unsigned();
            $table->timestamps();

            $table->foreign('id_compra')->references('id')->on('compras');
            $table->foreign('id_categoria')->references('id')->on('categoria_articulos');
            $table->foreign('id_articulo')->references('id')->on('articulos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compras_listas');
    }
}
