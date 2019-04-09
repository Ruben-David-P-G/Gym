<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('folio_compra',30)->collation('utf8_spanish2_ci')->nullable(true);
            $table->longtext('comentario')->collation('utf8_spanish2_ci')->nullable(true);
            $table->string('estatus',10)->collation('utf8_spanish2_ci')->default("FACTURADA");
            $table->bigInteger('id_grupo_sucursal')->unsigned();
            $table->bigInteger('id_usuario')->unsigned();
            $table->bigInteger('id_proveedor')->unsigned();
            $table->timestamps();
            $table->foreign('id_grupo_sucursal')->references('id')->on('grupo_sucursals');
            $table->foreign('id_usuario')->references('id')->on('usuarios');
            $table->foreign('id_proveedor')->references('id')->on('proveedors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compras');
    }
}
