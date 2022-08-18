<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Building;

class BuildingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $csv = fopen(base_path('database/data/buildings.csv'), 'r');

        while(($data = fgetcsv($csv, 191, ',')) !== false) {

            Building::create([
                'id' => $data['0'],
                'name' => $data['1'],
                'short' => $data['2'] ?? '',
            ]);
        }

    }
}
