<script>
  let {
    grayBackground = false,
    headline = undefined,
    text = undefined,
    children
  } = $props();

  const backgroundColor = grayBackground ? 'bg-gray-200' : 'bg-white';
</script>

{#if headline || text || children}
  <section class={`${backgroundColor} py-20`}>
    <div class="container mx-auto px-4">
      {#if headline || text}
        <div class="max-w-2xl mx-auto text-center">
          {#if headline}
            <h1 class="text-4xl font-bold mb-6">{headline}</h1>
          {/if}

          {#if text}
            <p class="text-gray-600 mb-12">{text}</p>
          {/if}
        </div>
      {/if}

      {@render children?.()}
    </div>
  </section>
{/if}
