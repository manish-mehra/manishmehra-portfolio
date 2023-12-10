<script>
   import { onMount } from 'svelte'
   import {page} from '$app/stores'
   import '../tailwind.css'

  let currentPath = "/"
  $: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/'
  
</script>

<main class="min-h-screen h-full w-full bg-[#121212] pb-4">
    <header class="fixed top-0 left-0 right-0 z-10 mt-4 mb-4 mx-auto px-3 flex items-center justify-center overflow-hidden">
      <section class="bg-[#242424]/80 backdrop-blur border-slate-900 drop-shadow-lg rounded-full text-white text-lg font-medium p-3 sm:px-12 flex gap-2 sm:gap-5 overflow-auto">
        <a href="/" class={`${currentPath === '/' && 'text-red-600'} px-2 cursor-pointer`} >Home</a>
        <a href="/projects" class={`${currentPath === 'projects' && 'text-red-600'} px-2 cursor-pointer`}>Projects</a>
        <a href = "/blogs" class={`${currentPath === 'blogs' && 'text-red-600'} px-2 cursor-pointer`}>Blogs</a>
        <a href = "/books" class={`${currentPath === 'books' && 'text-red-600'} px-2 cursor-pointer`}>Books</a>
        <a href = "/contact" class={`${currentPath === 'contact' && 'text-red-600'} px-2 cursor-pointer`}>Contact</a>
      </section>
    </header>
  <div class="pt-20 p-3 text-white flex items-center justify-center my-0 mx-auto max-w-2xl">
    <slot/>
  </div>
</main>