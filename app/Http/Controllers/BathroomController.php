<?php

namespace App\Http\Controllers;

use App\Models\Bathroom;
use App\Models\Building;
use App\Models\Review;
use Illuminate\Database\Eloquent\Builder;
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
        $num = $request->num ?? 25;

        if ($request->building !== null) {
            $bathrooms = Bathroom::with('building')
                // ->where('rating', '!=', '0')
                ->whereRelation('building', 'id', '=', $request->building)
                ->orderby('rating', 'desc')
                ->orderBy('name', 'asc')
                ->get();
            $selected = Building::find($request->building)->name;
        } else {
            $bathrooms = Bathroom::with('building')
                // ->where('rating', '!=', '0')
                ->orderby('rating', 'desc')
                ->orderBy('name', 'asc')
                ->take($num)
                ->get();
            $selected = '';
        }

        $data = array(
            'bathrooms' => $bathrooms,
            'buildings' => Building::has('bathrooms')->orderBy('name')->get(),
            'selectedBuilding' => $selected,
        );
        return view('index')->with($data);
    }

    public function review(Request $request)
    {
        $selected = '';
        if ($request->id != null) {
            $selected = Bathroom::find($request->id);
        }
        

        $data = array(
            'buildings' => Building::with('bathrooms')->has('bathrooms')->orderBy('name')->get(),
            'currBathroom' => $selected,
        );

        return view('review')->with($data);
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
            'user' => 'required',
            'rating' => 'required',
        ]);

        // validate valid bathroom
        if (Bathroom::find($request->input('id') == null)) {
            return redirect('/review')->with('error', 'Bathroom does not exist... please try again');
        }

        // upload review
        $bathroom = Bathroom::find($request->input('id'));

        $review = new Review;
        $review->bathroom()->associate($bathroom);
        $review->rating = $request->input('rating');
        $review->author = $request->input('author');
        $review->user = $request->input('user');
        $review->body = $request->input('description');

        // set status messages
        if ($review->save()) {
            $status = 'success';
            $message = 'Review Added Successfully';

            // if successful we also need to update the bathroom's rating
            $bathroom->rating = BathroomController::get_average($bathroom);
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
        $bathroom = Bathroom::with('reviews')->where('id', '=', $id)->get();
        $data = array(
            'bathroom' => $bathroom[0]
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
