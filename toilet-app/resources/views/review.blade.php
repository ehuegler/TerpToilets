@extends('layouts.app')

@section('content')
    <div class="bg-white rounded drop-shadow p-4 my-4">
        <h1 class="text-2xl font-bold">Leave a Review:</h1>

        {!! Form::open(['action' => 'BathroomController@store', 'POST']) !!}
        <div class="my-4">
            {{ Form::label('author', 'Author:', ['class' => 'font-lg font-crimson']) }}
            {{ Form::text('author', '', [
                'class' => 'w-full bg-bg border border-slate-300 rounded p-2',
                'placeholder' => 'Your Name (optional)',
            ]) }}
        </div>
        <div class="my-4">
            {{ Form::label('id', 'Bathroom ID:', ['class' => 'font-lg font-crimson']) }}
            {{ Form::text('id', '', [
                'class' => 'w-full bg-bg border border-slate-300 rounded p-2',
                'placeholder' => 'ID',
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
