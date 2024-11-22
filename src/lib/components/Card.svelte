<script>
  let {
    headline = undefined,
    link = undefined,
    number = undefined,
    text = undefined
  } = $props();
</script>

{#if headline || link || number || text}
  <div class="w-full md:w-1/3 px-4 mb-8">
    <div class="rounded-md bg-white shadow-md p-8">
      {#if number}
        <div class="text-4xl font-bold text-purple-600 mb-4">{number}</div>
      {/if}

      {#if headline}
        <h3 class="text-2xl font-bold mb-4">{headline}</h3>
      {/if}

      {#if text}
        <p class="text-gray-600 mb-4">{text}</p>
      {/if}

      {#if link}
        <a
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          href={link}
          target="_blank"
        >
          <span>View</span>
          <svg
            class="fill-none stroke-current w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            ></path><polyline points="15 3 21 3 21 9"></polyline><line
              x1="10"
              y1="14"
              x2="21"
              y2="3"
            ></line></svg
          >
        </a>
      {/if}
    </div>
  </div>
{/if}
