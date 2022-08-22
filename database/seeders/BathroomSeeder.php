<?php

namespace Database\Seeders;

use App\Models\Bathroom;
use App\Models\Building;
use Illuminate\Database\Seeder;

class BathroomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Family Bathrooms
        $csv = fopen(base_path('database/data/family-bathrooms.csv'), 'r');
        fgetcsv($csv, 191, ',');
        fgetcsv($csv, 191, ',');
        fgetcsv($csv, 191, ',');

        while (($data = fgetcsv($csv, 191, ',')) !== false) {

            $building = $data['0'];
            $building = Building::find($building);
            $name = $building->name . " Family Bathroom";

            $bathroom = new Bathroom;
            $bathroom->roomnum = $data[2];
            $bathroom->gender = 'Family';
            $bathroom->name = $name;
            $bathroom->building()->associate($building);
            $bathroom->save();
        }
        
        // to speed up for testing, do not need to seed all bathrooms
        // return;

        // Gender Neutral Bathrooms
        $csv = fopen(base_path('database/data/gender-neutral-bathrooms.csv'), 'r');
        fgetcsv($csv, 191, ',');
        fgetcsv($csv, 191, ',');
        fgetcsv($csv, 191, ',');
        
        while (($data = fgetcsv($csv, 191, ',')) !== false) {
            
            $building = $data['0'];
            $building = Building::find($building);
            
            if ($building == null) {
                print("Could not find building " . $data['0']);
                continue;
            }
            
            $name = $building->name . " Gender Neutral Bathroom";
            
            $bathroom = new Bathroom;
            $bathroom->roomnum = $data[2];
            $bathroom->gender = 'Gender Neutral';
            $bathroom->name = $name;
            $bathroom->building()->associate($building);
            $bathroom->save();
        }
        
        
        // Mens Bathrooms
        $csv = fopen(base_path('database/data/mens-bathrooms.csv'), 'r');
        fgetcsv($csv, 191, ',');
        fgetcsv($csv, 191, ',');
        fgetcsv($csv, 191, ',');
        
        while (($data = fgetcsv($csv, 191, ',')) !== false) {
            
            $building = $data['0'];
            $building = Building::find($building);
            
            if ($building == null) {
                print("Could not find building " . $data['0']);
                continue;
            }
            
            $name = $building->name . " Men's Bathroom";
            
            $bathroom = new Bathroom;
            $bathroom->roomnum = $data[2];
            $bathroom->gender = 'Mens';
            $bathroom->name = $name;
            $bathroom->building()->associate($building);
            $bathroom->save();
        }


        // Family Bathrooms
        $csv = fopen(base_path('database/data/womens-bathrooms.csv'), 'r');
        fgetcsv($csv, 191, ',');
        fgetcsv($csv, 191, ',');
        fgetcsv($csv, 191, ',');

        while (($data = fgetcsv($csv, 191, ',')) !== false) {

            $building = $data['0'];
            $building = Building::find($building);

            if ($building == null) {
                print("Could not find building " . $data['0'] . "\n");
                continue;
            }

            $name = $building->name . " Women's Bathroom";

            $bathroom = new Bathroom;
            $bathroom->roomnum = $data[2];
            $bathroom->gender = 'Womens';
            $bathroom->name = $name;
            $bathroom->building()->associate($building);
            $bathroom->save();
        }



    }
}
