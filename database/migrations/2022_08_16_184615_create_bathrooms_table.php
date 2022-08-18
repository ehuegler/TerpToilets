<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBathroomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bathrooms', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name', 191);
            $table->string('roomnum', 10);
            $table->string('gender', 31);
            $table->integer('building_id');
            $table->mediumText('description')->default('');
            $table->float('rating')->default(0);
            $table->boolean('shower')->default(false);
            $table->string('picture', 191)->default('testudo.jpg');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bathrooms');
    }
}
