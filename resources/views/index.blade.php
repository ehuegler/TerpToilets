@extends('layouts.app')
@section('title', 'Terp Toilets')

@section('content')
    <div class="flex my-4 justify-between w-full">
        <div class="bg-white p-2 rounded drop-shadow flex-grow mr-4">
            Search
        </div>
        <div class="bg-white p-2 rounded drop-shadow">
            Filter
        </div>
    </div>
    @foreach ($bathrooms as $bathroom)
        <div class="w-full rounded drop-shadow bg-white p-2 my-2 flex flex-row justify-between">
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

    @if (count($bathrooms) < 1)
        <div class="text-center">
            Something went wrong, please try again later...
        </div>
    @endif
@endsection
