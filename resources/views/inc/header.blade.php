<nav class="bg-umd w-full flex justify-between font-crimson px-2 py-2 md:px-12">
    {{-- brand --}}
    <div class="flex flex-row text-white">
        <a href="/"><img class="h-16 w-16 mr-1" src="/img/logo.png" alt="Terp Toilets Logo"></a>
        <a href="/" class="text-3xl m-auto tracking-tight">
            Terp Toilets
        </a>
    </div>

    {{-- button --}}
    <div class="px-4 py-1 my-auto bg-white text-umd rounded hover:bg-bg focus:bg-bg">
        <a href="/review{{ $link ?? '' }}">LEAVE A REVIEW</a>
    </div>
</nav>
