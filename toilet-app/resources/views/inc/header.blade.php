<nav class="flex items-center justify-between flex-wrap bg-umd p-6">
  <div class="flex items-center flex-no-shrink text-white mr-6">
    <img class="h-8 w-8 mr-2" src="{{ asset('img/toilet.svg') }}" alt="">
    <span class="font-semibold text-xl tracking-tight">
      Toilet UMD
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
      hidden lg:block lg:flex-row-reverse
    ">
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
      <a href="/auth/logout" class="inline-block text-sm px-4 py-2 leading-none border-2 
          rounded bg-white   border-white hover:border-transparent font-bold
          hover:text-teal mt-4 lg:mt-0 rounded text-umd font-crimson
          focus:outline-none focus:shadow-outline tracking-wider">
        LEAVE A REVIEW
      </a>
    </div>
  </div>
</nav>