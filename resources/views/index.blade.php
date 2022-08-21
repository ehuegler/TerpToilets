@extends('layouts.app')
@section('title', 'Terp Toilets')

@section('content')

    <div class="rounded bg-white p-2 drop-shadow my-4">
        <h1 class="">
            Building
        </h1>
        <div onblur="console.log('howdy');">
            <input type="text" id="buildingInput" onkeyup="search()" onfocus="toggleBuildingResults()"
                placeholder="&#xf002; Search Buildings" class="w-full bg-bg border border-slate-300 rounded p-2">
            <div class="bg-bg rounded p-2 border border-slate-300 my-2 hidden" id="buildingResults">
                @if (count($buildings) > 0)
                    @foreach ($buildings as $building)
                        <div id="{{ $building->id }}" onclick="buildingClicked(this)" class="py-1">
                            <a href="/?building={{ $building->id }}">{{ $building->name }}
                                {{ $building->short != '' ? '(' . $building->short . ')' : '' }}</a>
                        </div>
                    @endforeach
                @else
                    No Builings Found...
                @endif
            </div>
        </div>

        <h1 class="mt-2">
            Gender
        </h1>
        <select name="" id="" class="bg-bg w-full border border-slate-300 rounded p-2"
            onchange="genderFilter(this)">
            <option value="all">All</option>
            <option value="family">Family</option>
            <option value="female">Female</option>
            <option value="Gender Neutral">Gender Neutral</option>
            <option value="male">Male</option>
        </select>

        <h1 class="mt-2">
            Sort
        </h1>

        <select name="" id="" class="bg-bg w-full border border-slate-300 rounded p-2">
            <option value="">Ascending</option>
            <option value="">Descending</option>
        </select>

    </div>
    <div class="" id="bathrooms">

        @foreach ($bathrooms as $bathroom)
            <div class="w-full rounded drop-shadow bg-white p-2 my-2 flex flex-row justify-between"
                data-gender="{{ $bathroom->gender }}">
                <div class="">
                    <h2><a href="/bathrooms/{{ $bathroom->id }}">{{ $bathroom->name }}</a></h2>
                    <p>
                        @if ($bathroom->rating == 0)
                            No Rating Available
                        @else
                            {{ $bathroom->rating }}
                            {{-- Start Rating --}}
                            @for ($i = 0; $i < 5; $i++)
                                @if ($bathroom->rating - $i >= 0.9)
                                    {{-- Full Start --}}
                                    <i class="fas fa-star"> </i>
                                @elseif ($bathroom->rating - $i > 0.15)
                                    {{-- Half Start --}}
                                    <i class="fas fa-star-half-alt"> </i>
                                @else
                                    {{-- Empty Start --}}
                                    <i class="far fa-star"> </i>
                                @endif
                            @endfor
                            {{-- End Rating --}}
                        @endif
                    </p>
                    <p>
                        {{ $bathroom->building->short === '' ? 'Room' : $bathroom->building->short }}
                        {{ $bathroom->roomnum }}
                        @if ($bathroom->gender == 'Mens')
                            <i class="fas fa-person"></i>
                        @elseif ($bathroom->gender == 'Womens')
                            <i class="fas fa-person-dress"></i>
                        @elseif ($bathroom->gender == 'Family')
                            <i class="fas fa-person-dress"></i>
                        @elseif ($bathroom->gender == 'Gender Neutral')
                            <i class="fas fa-person-half-dress"></i>
                        @endif
                        @if ($bathroom->shower)
                            <i class="fa fa-shower"></i>
                        @endif
                    </p>
                    <p>
                        {{ $bathroom->description }}
                    </p>
                </div>
                <div class="flex-shrink-0">
                    <img src="https://res.cloudinary.com/di6du2qqp/image/upload/c_fill,h_500,w_500/toilet-umd/{{ $bathroom->picture }}"
                        alt="" width="100px" height="100px" loading="lazy" class="rounded drop-shadow">
                </div>
            </div>
        @endforeach
    </div>

    @if (count($bathrooms) < 1)
        <div class="text-center">
            Something went wrong, please try again later...
        </div>
    @else
        <h1 class="bg-white rounded p-2 drop-shadow mb-8 text-center">
            <a href="/index.php?num={{ count($bathrooms) + 10 }}">Load More</a>
        </h1>
    @endif
@endsection
