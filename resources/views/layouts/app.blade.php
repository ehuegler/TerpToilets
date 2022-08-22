<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">

</head>

<body>

    @include('inc.header', ['link' => $link ?? ''])

    <div class="mx-auto px-4 container max-w-[600px] mb-12">
        @include('inc.messages')
        @yield('content')
    </div>

    
    <script type="text/javascript" src="/js/app.js"></script>
    <script src="https://kit.fontawesome.com/9570fbd2a8.js" crossorigin="anonymous"></script>

</body>

</html>
