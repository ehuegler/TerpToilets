<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>

<body>

    @include('inc.header')

    <div class="mx-auto px-4 flex flex-col items-center">
        <h1 class="text-3xl font-bold underline">
            Bathrooms:
        </h1>
        @foreach ($bathrooms as $bathroom)
        <div>
            <h2>{{ $bathroom->name }}</h2>
            <p>
                this is a bathroom.
            </p>
        </div>
        @endforeach
    </div>


    <script src="{{ asset('js/app.js') }}"></script>

</body>

</html>