@extends('layouts.app', ['link' => ''])

@section('content')
    <script>
        window.onload = function () {
            buildingClicked(document.getElementById('{{$currBathroom->building->id}}'));
            document.getElementById('roomList').value = '{{ $currBathroom->id }}';
        }
    </script>

    <div class="bg-white rounded drop-shadow p-4 my-4">

        <h1 class="text-2xl font-bold">Leave a Review:</h1>
        <div class="my-4">
            <label class="font-lg font-crimson">
                Building
            </label>
            <input type="text" id="buildingInput" onkeyup="buildingSearch()" onfocus="openBuildingResults(); buildingSearch();"
                placeholder="&#xf002; Search Buildings" class="w-full bg-bg border border-slate-300 rounded p-2"
                value="{{ $currBathroom->building->name }}">
            <div class="bg-bg rounded p-2 border border-slate-300 my-2 hidden" id="buildingResults">
                @if (count($buildings) > 0)
                    @foreach ($buildings as $building)
                        <div id="{{ $building->id }}" onclick="buildingClicked(this)" class="py-1"
                            data-bathrooms="{{ $building->bathrooms }}">
                            {{ $building->name }} {{ $building->short != '' ? '(' . $building->short . ')' : '' }}
                        </div>
                    @endforeach
                @else
                    No Builings Found...
                @endif
            </div>
        </div>

        {!! Form::open(['action' => 'BathroomController@store', 'POST']) !!}

        <input type="hidden" id="user" name="user" value="{{ cas()->user() }}">

        <div class="my-4">
            <label name="id" class="font-lg font-crimson">
                Bathroom Room Number
            </label>
            <select name="id" id="roomList" class="w-full bg-bg border border-slate-300 rounded p-2">
                <option value="" disabled selected>Make sure a building is selected first...</option>
            </select>

        </div>

        <div class="my-4">
            {{ Form::label('author', 'Author:', ['class' => 'font-lg font-crimson']) }}
            {{ Form::text('author', '', [
                'class' => 'w-full bg-bg border border-slate-300 rounded p-2',
                'placeholder' => 'Your Name (optional)',
            ]) }}
        </div>
        <div class="my-4">
            {{ Form::label('rating', 'Rating:', ['class' => 'font-lg font-crimson']) }}
            {{ Form::select(
                'rating',
                [
                    '1' => '1',
                    '2' => '2',
                    '3' => '3',
                    '4' => '4',
                    '5' => '5',
                ],
                null,
                [
                    'class' => 'w-full bg-bg border border-slate-300 rounded p-2',
                    'placeholder' => '',
                ],
            ) }}
        </div>
        <div class="my-4">
            {{ Form::label('description', 'Description:', ['class' => 'font-lg font-crimson']) }}
            {{ Form::textarea('description', '', [
                'class' => 'w-full bg-bg border border-slate-300 rounded p-2',
                'placeholder' => 'Write your review here...',
            ]) }}
        </div>
        {{ Form::submit('Submit', ['class' => 'bg-umd rounded p-2 text-white']) }}
        {!! Form::close() !!}


    </div>
@endsection
