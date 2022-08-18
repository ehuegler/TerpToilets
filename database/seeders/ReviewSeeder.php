<?php

namespace Database\Seeders;

use App\Models\Bathroom;
use App\Models\Review;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // randomly create a bunch of reviews
        for ($i = 0; $i < 100; $i++) {
            $bathroom_id = rand(1, 24);
            
            $bathroom = Bathroom::find($bathroom_id);

            $review = new Review;
            $review->author = "Z " . $bathroom_id;
            $review->body = "Ooga Booga This is a Review";
            $review->rating = rand(1,5);
            $review->bathroom()->associate($bathroom);

            $review->save();
        }
    }
}
