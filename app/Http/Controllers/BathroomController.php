<?php

namespace App\Http\Controllers;

use App\Models\Bathroom;
use App\Models\Building;
use App\Models\Review;
use Illuminate\Http\Request;

class BathroomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $num = $request->num ?? 10;

        $data = array(
            'bathrooms' => Bathroom::with('building')
                ->where('rating', '!=', '0')
                ->orderby('rating', 'desc')
                ->orderBy('name', 'asc')
                ->take($num)
                ->get(),
            'buildings' => Building::whereHas('bathrooms')->orderBy('name')->get(),
            'currBuilding' => '',
            'currGender' => '',
        );
        return view('index')->with($data);
    }

    public function review()
    {
        return view('review');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // validate form results
        $this->validate($request, [
            'id' => 'required',
            'rating' => 'required',
        ]);
        // need to make sure the id is a number!!!
        // also convert rating to a number as well? seems like something takes care of it automagically

        // upload review
        $review = new Review;
        $review->bathroom_id = $request->input('id');
        $review->rating = $request->input('rating');
        $review->author = $request->input('author');
        $review->body = $request->input('description');

        // set status messages
        if ($review->save()) {
            $status = 'success';
            $message = 'Review Added Successfully';

            // if successful we also need to update the bathroom's rating
            $bathroom = $review->bathroom;
            $bathroom->rating = BathroomController::get_average($bathroom->id);
            $bathroom->save();
        } else {
            $status = 'error';
            $message = 'Something went wrong... Please try again.';
        }

        // get redirect link
        $link = '/bathrooms/' . $request->input('id');

        return redirect($link)->with($status, $message);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bathroom = Bathroom::find($id);
        $data = array(
            'bathroom' => $bathroom,
            'reviews' => $bathroom->reviews
        );

        return view('bathrooms.bathroom')->with($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public static function get_average(Bathroom $bathroom)
    {
        $ratings = array_map(fn ($n) => $n['rating'], $bathroom->reviews->toArray());
        return array_sum($ratings) / count($ratings);
    }

    public static function update_averages()
    {
        foreach (Bathroom::lazy() as $bathroom) {
            $bathroom->rating = BathroomController::get_average($bathroom);
            $bathroom->save();
        }
    }
}
