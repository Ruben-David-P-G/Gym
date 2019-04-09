<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGrupoSucursalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupo_sucursals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('grupo',30)->collation('utf8_spanish2_ci');
            $table->integer('no_sucursal');
            $table->string('nombre_comercial',35)->collation('utf8_spanish2_ci');
            $table->string('direccion',200)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('ciudad',50)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('estado',50)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('telefono',25)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('email',200)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('estatus',12)->collation('utf8_spanish2_ci')->default("ACTIVO");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grupo_sucursals');
    }
}
