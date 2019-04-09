<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientesMensualidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes_mensualidades', function (Blueprint $table) {
            $table->date('inicio_pago');
            $table->date('fin_pago');
            $table->Integer('meses');
            $table->decimal('pago', 8, 2);
            $table->longtext('comentario')->collation('utf8_spanish2_ci')->nullable(true);
            $table->bigInteger('id_usuario')->unsigned();
            $table->bigInteger('id_cliente')->unsigned();
            $table->timestamps();
            $table->foreign('id_cliente')->references('id')->on('clientes');
            $table->foreign('id_usuario')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes_mensualidades');
    }
}
