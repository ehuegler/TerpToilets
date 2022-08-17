<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    public function bathrooms() {
        return $this->hasMany('App\Models\Bathroom');
    }
}
