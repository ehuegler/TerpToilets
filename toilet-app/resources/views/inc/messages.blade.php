@if (count($errors) > 0)
    @foreach ($errors->all() as $error)
        <div class="rounded bg-red-200 text-red-900 border-red-300 border p-2 my-4">
            {{ $error }}
        </div>
    @endforeach
@endif


@if (session('success'))
    <div class="rounded bg-blue-200 text-blue-900 border border-blue-300 p-2 my-4">
        {{ session('success') }}
    </div>
@endif

@if (session('error'))
    <div class="rounded bg-red-200 text-red-900 border-red-300 border p-2 my-4">
        {{ session('error') }}
    </div>
@endif
