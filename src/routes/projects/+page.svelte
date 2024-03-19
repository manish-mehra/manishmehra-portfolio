<script>
  import {PROJECTS} from '../../utils/constants'
</script>

<svelte:head>
    <link rel="shortcut icon" href="/favicon.ico">
    <title>Projects - Manish Mehra</title>
    <meta name="description" content="Explore Manish Mehra's projects in software engineering">
</svelte:head>

<section class="flex flex-col items-center gap-6 mt-16">
  {#each PROJECTS as project}
    <figure class="max-w-2xl w-full p-4 rounded-md bg-[#242424] flex flex-col items-start">
      <div class="pb-3">
        {#if project.name === 'https://ieltswriting.app/'}
          <a href={project.name} class="text-xl font-bold">{project.name}</a>
        {:else}
          <h3 class="text-xl font-bold">{project.name}</h3>
        {/if}
      </div>
      <div class="mb-5 flex flex-col gap-4 overflow-hidden">
        <p class="text-md font-normal text-gray-400">{project.description}</p>
        {#if project.image}
          <img src={project.image} alt={project.name} class="rounded-md"/>
        {/if}
      </div>
      <div>
        {#if project.github}
        <a href={project.github} target="_blank" class="bg-[#2a2a2abf] border px-4 py-1 rounded-md text-sm font-medium">Github</a>
        {/if}
        {#if project.link}
        <a href={project.link} target="_blank" class="bg-[#2a2a2abf] border px-4 py-1 rounded-md text-sm font-medium">Website</a>
        {/if}
      </div>
    </figure>
  {/each}
</section>