<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProveedorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proveedors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre_ejecutivo',100)->collation('utf8_spanish2_ci');
            $table->string('nombre_empresa',100)->collation('utf8_spanish2_ci');
            $table->longText('descripcion')->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('telefono',100)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('correo',200)->collation('utf8_spanish2_ci')->nullable(true);
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
        Schema::dropIfExists('proveedors');
    }
}
