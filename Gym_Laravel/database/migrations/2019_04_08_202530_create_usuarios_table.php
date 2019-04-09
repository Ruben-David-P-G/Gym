<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('usuario',20)->collation('utf8_spanish2_ci')->index();
            $table->string('nombres',40)->collation('utf8_spanish2_ci');
            $table->string('apellido_paterno',25)->collation('utf8_spanish2_ci');
            $table->string('apellido_materno',25)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('password',85)->collation('utf8_spanish2_ci')->collation('utf8_spanish2_ci');
            $table->string('telefono',25)->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('celular',25)->collation('utf8_spanish2_ci')->nullable(true);
            $table->longtext('direccion')->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('estatus',10)->collation('utf8_spanish2_ci');
            $table->string('tipo',15)->collation('utf8_spanish2_ci');
            $table->Integer('id_cliente')->default(0);
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
        Schema::dropIfExists('usuarios');
    }
}
