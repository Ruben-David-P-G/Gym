<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriaArticulosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categoria_articulos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre',100)->collation('utf8_spanish2_ci');
            $table->longText('descripcion')->collation('utf8_spanish2_ci')->nullable(true);
            $table->bigInteger('id_grupo_sucursal')->unsigned();
            $table->timestamps();
            $table->foreign('id_grupo_sucursal')->references('id')->on('grupo_sucursals');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categoria_articulos');
    }
}
