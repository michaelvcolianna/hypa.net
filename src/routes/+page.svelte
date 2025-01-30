<script>
  import Card from '$lib/components/Card.svelte';
  import Section from '$lib/components/Section.svelte';

  let { data } = $props();

  const { building } = data;
</script>

<div class="bg-gray-200 font-sans leading-normal tracking-normal">
  <div class="pt-24 bg-white">
    <svg viewBox="0 0 151 75" aria-hidden="true" fill="none" class="w-60 h-auto m-auto">
      <path d="M 0.00 0.00 L 151.00 0.00 L 151.00 75.00 L 0.00 75.00 L 0.00 0.00 Z" fill="none" />
      <path d="M 139.29 8.00 C 133.90 15.28 127.82 21.98 120.92 27.86 C 113.54 34.39 102.94 37.47 93.74 40.65 C 84.65 43.86 75.25 46.22 66.17 49.38 C 62.88 53.13 61.41 58.66 58.46 62.71 C 55.58 65.29 51.89 67.05 48.69 69.24 C 48.37 68.07 48.07 66.90 47.80 65.72 C 47.53 63.35 47.13 61.03 46.64 58.69 L 46.58 58.35 L 46.55 58.18 C 46.44 57.38 46.32 56.59 46.19 55.79 C 40.92 60.32 35.43 64.38 28.78 66.66 C 20.58 69.35 12.40 68.73 4.09 67.03 C 7.25 62.02 11.10 57.50 15.57 53.60 C 22.23 47.70 30.42 44.48 39.19 43.32 C 36.16 40.02 33.43 36.48 30.48 33.11 C 34.33 32.10 38.12 30.31 42.04 29.73 C 46.83 30.25 51.55 31.86 56.30 32.65 C 57.87 32.99 59.52 31.56 60.83 30.84 C 70.32 24.69 80.12 19.12 90.48 14.56 C 97.20 11.57 104.71 9.88 111.93 8.64 C 121.00 7.22 130.17 6.72 139.29 8.00 Z" fill="#0e0c16" />
      <path d="M 137.10 9.11 C 130.70 16.72 123.70 23.73 115.80 29.77 C 111.23 33.24 106.17 35.05 100.84 36.95 C 85.50 42.32 69.62 46.73 53.97 51.13 C 51.16 51.82 47.98 53.08 45.08 52.73 C 41.87 51.20 42.40 48.66 41.89 45.68 C 55.75 35.66 70.18 26.07 85.53 18.51 C 101.02 10.69 119.98 8.67 137.10 9.11 Z" fill="#a299f8" />
      <path d="M 129.47 10.11 C 118.68 13.66 107.88 17.24 97.21 21.15 C 80.25 28.11 63.78 36.30 47.00 43.66 C 50.14 41.20 53.41 38.90 56.82 36.82 C 68.90 29.22 81.91 21.10 95.42 16.38 C 106.47 12.71 117.77 10.14 129.47 10.11 Z" fill="#ffffff" />
      <path d="M 45.02 31.58 C 48.63 32.29 52.22 33.13 55.81 33.97 C 51.08 37.28 46.27 40.48 41.60 43.89 C 38.79 40.63 36.06 37.31 33.25 34.04 C 36.85 33.01 41.27 30.60 45.02 31.58 Z" fill="#cdc7fd" />
      <path d="M 51.22 34.78 C 48.94 35.48 46.45 36.49 44.05 36.49 C 41.56 36.36 39.06 35.53 36.67 34.83 C 42.07 33.22 45.81 33.38 51.22 34.78 Z" fill="#ffffff" />
      <path d="M 39.39 46.11 C 39.81 48.47 40.41 50.70 41.37 52.90 L 41.65 54.25 C 40.53 51.92 39.60 49.65 39.07 47.11 C 36.73 47.13 34.39 47.15 32.05 47.22 C 34.48 46.67 36.93 46.39 39.39 46.11 Z" fill="#a299f8" />
      <path d="M 31.51 47.33 L 32.05 47.22 C 34.39 47.15 36.73 47.13 39.07 47.11 C 39.60 49.65 40.53 51.92 41.65 54.25 L 41.87 55.41 C 37.63 59.27 32.87 61.98 27.83 64.64 C 22.04 66.39 15.34 65.89 9.50 64.56 C 14.76 56.39 21.89 49.78 31.51 47.33 Z" fill="#ffffff" />
      <path d="M 64.26 49.43 C 62.61 52.71 60.98 56.01 59.19 59.22 C 57.56 62.72 52.93 64.58 49.88 66.75 C 49.14 62.54 48.35 58.33 47.58 54.12 C 51.67 53.02 55.74 51.83 59.82 50.67 L 60.63 50.44 C 61.84 50.10 63.05 49.76 64.26 49.43 Z" fill="#cdc7fd" />
      <path d="M 41.65 54.25 L 41.37 52.90 L 43.62 54.53 C 38.75 58.81 34.22 62.82 27.83 64.64 C 32.87 61.98 37.63 59.27 41.87 55.41 L 41.65 54.25 Z" fill="#a299f8" />
      <path d="M 60.06 52.15 C 59.15 54.44 58.34 56.96 56.97 59.02 C 55.58 60.78 53.36 61.99 51.54 63.25 C 51.84 60.73 52.17 58.22 52.51 55.70 C 55.02 54.50 57.53 53.30 60.06 52.15 Z" fill="#ffffff" />
      <path d="M 46.55 58.18 L 46.58 58.35 L 46.64 58.69 C 47.13 61.03 47.53 63.35 47.80 65.72 C 47.27 63.23 46.84 60.70 46.55 58.18 Z" fill="#cdc7fd" />
    </svg>
  </div>

  <Section headline="hypa.net" text="We're web developers and a web host but we don't sell hosting. If you know us, please feel free to reach out." />

  <Section grayBackground={true} text="Some of the sites we've built or host:">
    <div class="flex flex-wrap -mx-4 mt-12">
      <Card number="01" headline="Kiwis by Beat!" text="A collection of artwork and comics by Ryan Armand." link="https://kiwisbybeat.net" />
      <Card number="02" headline="The Guild Library Appendix" text="A wiki-style appendix for a novel by our owner." link="https://appendix.mvc.ink" />
      <Card number="03" headline="Juniper & Elm Quilts" text="A portfolio site for a person who designs and makes custom quilts." link="https://juniperandelmquilts.com" />
      <Card number="04" headline="Dungeon.ly" text="An online helper for dungeon masters running 5E D&D games. Public registration is closed but the site has character sheets, dice rollers, and a combat tracker." link="https://dungeon.ly" />
      <Card number="05" headline="mvc.ink" text="Our owner's website, which he turned into a Geocities-style old school site." link="https://mvc.ink" />
    </div>
  </Section>

  <Section text={`© ${new Date().getFullYear()} hypa.net`}>
    {#if building}
      <div class="container mx-auto px-4 text-center text-gray-600 text-sm font-bold underline">
        <a href="https://archive.hypa.net">Archived version of the site from 2006</a>
      </div>
    {/if}
  </Section>
</div>
