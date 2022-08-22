@extends('layouts.app', ['link' => ''])

@section('content')
    @if ($currBathroom != '')
        <script>
            window.onload = function() {
                buildingClicked(document.getElementById('{{ $currBathroom->building->id }}'));
                document.getElementById('roomList').value = '{{ $currBathroom->id }}';
            }
        </script>
    @endif

    <div class="bg-white rounded drop-shadow p-4 my-4">

        <h1 class="text-2xl font-bold">Leave a Review:</h1>
        <div class="my-4">
            <label class="font-lg font-crimson">
                Building
            </label>
            <input type="text" id="buildingInput" onkeyup="buildingSearch()"
                onfocus="openBuildingResults(); buildingSearch();" placeholder="&#xf002; Search Buildings"
                class="w-full bg-bg border border-slate-300 rounded p-2" value="{{ $currBathroom->building->name ?? '' }}">
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

        <form method="POST" action="/store" accept-charset="UTF-8">

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
                <label for="author" class="font-lg font-crimson">Author:</label>
                <input class="w-full bg-bg border border-slate-300 rounded p-2" placeholder="Your Name (optional)"
                    name="author" type="text" value="" id="author">
            </div>
            <div class="my-4">
                <label for="rating" class="font-lg font-crimson">Rating:</label>
                <select class="w-full bg-bg border border-slate-300 rounded p-2" id="rating" name="rating">
                    <option selected="selected" value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="my-4">
                <label for="description" class="font-lg font-crimson">Description:</label>
                <textarea class="w-full bg-bg border border-slate-300 rounded p-2" placeholder="Write your review here..."
                    name="description" cols="50" rows="10" id="description"></textarea>
            </div>

        </form>

    </div>
@endsection
