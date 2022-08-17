@extends('layouts.app')
@section('title', 'Toilet UMD')

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
        <div class="w-full rounded drop-shadow bg-white p-2">
            <h2><a href="/bathrooms/{{ $bathroom->id }}">{{ $bathroom->name }}</a></h2>
            <p>
                {{ $bathroom->roomnum }}
            </p>
            {{$bathroom}}
        </div>
    @endforeach

    @if (count($bathrooms) < 1)
        Something went wrong, please try again later.
    @endif
@endsection
