@extends('.layouts.app')

@section('content')
    <div class="bg-white rounded drop-shadow p-2 mt-4">
        <h1>{{ $bathroom->name }}</h1>
    </div>

    @if (count($reviews) < 1)
        No Reviews Found
    @endif

    @foreach ($reviews as $review)
        <div class="bg-white rounded drop-shadow p-2 my-2">
            {{$review->body}}
        </div>
    @endforeach
@endsection
