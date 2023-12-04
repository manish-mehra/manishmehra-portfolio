<script>
   import { onMount } from 'svelte'
   import {page} from '$app/stores'
   import '../tailwind.css'

  let currentPath = "/"
  $: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/'
  
</script>

<main class="min-h-screen h-full w-full bg-[#121212] pb-4">
  <header class="fixed top-0 z-10 mt-4 mb-4 mx-auto bg-[#242424]/80 backdrop-blur  border-slate-900 rounded-full left-0 right-0 w-fit">
    <section class="text-white text-lg font-medium p-3 sm:px-12 flex justify-center gap-3 sm:gap-5">
      <a href="/" class={`${currentPath === '/' && 'text-red-600'} px-2 cursor-pointer`} >Home</a>
      <a href="/projects" class={`${currentPath === 'projects' && 'text-red-600'} px-2 cursor-pointer`}>Projects</a>
      <a href = "/blogs" class={`${currentPath === 'blogs' && 'text-red-600'} px-2 cursor-pointer`}>Blogs</a>
      <a href = "/contact" class={`${currentPath === 'contact' && 'text-red-600'} px-2 cursor-pointer`}>Contact</a>
    </section>
  </header>
  <div class="pt-20 p-3 text-white flex items-center justify-center ">
    <slot/>
  </div>
</main>