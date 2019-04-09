<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombres',40)->collation('utf8_spanish2_ci');
            $table->string('apellido_paterno',25)->collation('utf8_spanish2_ci');
            $table->string('apellido_materno',25)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('telefono',25)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('celular',25)->collation('utf8_spanish2_ci')->nullable(true);
            $table->longtext('direccion')->collation('utf8_spanish2_ci')->nullable(true);
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
        Schema::dropIfExists('clientes');
    }
}
