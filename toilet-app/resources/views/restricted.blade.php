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

    <nav class="flex items-center justify-between flex-wrap bg-umd p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                <path d="
          M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 
          0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 
          9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 
          0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 
          4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 
          0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 
          9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 
          0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z
        " />
            </svg>
            <span class="font-semibold text-xl tracking-tight">
                Larawind
            </span>
        </div>
        <div class="block lg:hidden">
            <button data-toggle-hide="[data-nav-content]" class="
        flex items-center px-3 py-2 border rounded 
        text-teal-lighter border-teal-light hover:text-white
        hover:border-white rounded focus:outline-none 
        focus:shadow-outline
      ">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>
                        Menu
                    </title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>

        <div data-nav-content="" class="
      w-full block flex-grow lg:flex lg:items-center lg:w-auto
      hidden lg:block
    ">
            <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="
          block mt-4 lg:inline-block lg:mt-0 text-teal-lighter 
          hover:text-white mr-4 rounded focus:outline-none 
          focus:shadow-outline
        ">
                    Docs
                </a>
                <a href="#responsive-header" class="
          block mt-4 lg:inline-block lg:mt-0 text-teal-lighter 
          hover:text-white mr-4 rounded focus:outline-none 
          focus:shadow-outline
        ">
                    Examples
                </a>
                <a href="#responsive-header" class="
          block mt-4 lg:inline-block lg:mt-0 text-teal-lighter 
          hover:text-white rounded focus:outline-none 
          focus:shadow-outline
        ">
                    Blog
                </a>
            </div>
            <div class="text-sm lg:flex-shrink">
                <a href="#responsive-header" class="
          block mt-4 lg:inline-block lg:mt-0 text-teal-lighter 
          hover:text-white mr-4 rounded focus:outline-none 
          focus:shadow-outline
        ">
                    Login
                </a>
                <a href="#responsive-header" class="
          block mt-4 lg:inline-block lg:mt-0 text-teal-lighter 
          hover:text-white mr-4 rounded focus:outline-none 
          focus:shadow-outline
        ">
                    Register
                </a>
                <a href="#" class="
          inline-block text-sm px-4 py-2 leading-none border 
          rounded text-white border-white hover:border-transparent 
          hover:text-teal hover:bg-white mt-4 lg:mt-0 rounded 
          focus:outline-none focus:shadow-outline
        ">
                    Download
                </a>
            </div>
        </div>
    </nav>

    <div class="mx-auto px-4 flex flex-col items-center">
        <h1>
          Restricted!
        </h1>
        <p>
          {{ cas()->isAuthenticated() }}
        </p>
    </div>


    <script src="{{ asset('js/app.js') }}"></script>

</body>

</html>