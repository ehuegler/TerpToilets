<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bathroom extends Model
{
    public function reviews() {
        return $this->hasMany('App\Models\Review');
    }

    public function building() {
        return $this->belongsTo('App\Models\Building');
    }
}
