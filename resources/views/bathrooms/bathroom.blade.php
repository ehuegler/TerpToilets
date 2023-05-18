@extends('.layouts.app', ['link' => ('?id=' . $bathroom->id)])

@section('content')
    <div class="bg-white rounded drop-shadow p-2 my-4 text-center">
        <h1 class="my-2">{{ $bathroom->name }}</h1>
        <img src="https://res.cloudinary.com/di6du2qqp/image/upload/c_fill,h_800,w_800/toilet-umd/{{ $bathroom->picture }}"
            alt="" class="rounded drop-shadow">

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
        &#x2022;
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
        <p>
            {{ $bathroom->description }}
        </p>
    </div>

    @if (count($bathroom->reviews) < 1)
        No Reviews Found
    @else
        <h1>
            Reviews:
        </h1>
    @endif

    <div class="flex flex-col">
        @foreach ($bathroom->reviews as $review)
            <div class="bg-white rounded drop-shadow p-2 my-2">
                <h1>
                    @if ($review->author !== null)
                        {{ $review->author }}
                    @else
                        Anonymous
                    @endif
                    {{-- Start Rating --}}
                    &nbsp;&nbsp;&nbsp;
                    @for ($i = 0; $i < 5; $i++)
                        @if ($review->rating - $i >= 0.9)
                            {{-- Full Start --}}
                            <i class="fas fa-star"> </i>
                        @elseif ($review->rating - $i > 0.15)
                            {{-- Half Start --}}
                            <i class="fas fa-star-half-alt"> </i>
                        @else
                            {{-- Empty Start --}}
                            <i class="far fa-star"> </i>
                        @endif
                    @endfor
                    {{-- End Rating --}}
                </h1>
                <p>
                    {{ $review->body }}
                </p>
            </div>
        @endforeach
    </div>
@endsection
