<script>
 import '../tailwind.css'
 import {PROJECTS, API_URL} from '../utils/constants'
 
 
 let currentTab = 'home'
 let loading = false
 let blogs = []

 function handleTabChange(tab){
    currentTab = tab
 }

 $: if(currentTab === 'blogs' && blogs.length === 0){
    fetchBlogs()
 }

 async function fetchBlogs(){
  loading = true
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    blogs = data
    loading = false
  } catch (error) {
    loading = false
    console.log(error)
  }
 }

</script>

<svelte:head>
  <link rel="shortcut icon" href="./favicon.ico">
	<title>Manish Mehra</title>
  <meta name="description" content="An aspiring software engineer with hands-on experience in frontend technologies">
</svelte:head>

<main class="min-h-screen h-full w-full bg-[#121212] pb-4">
  <header class="fixed top-0 z-10 mt-4 mb-4 mx-auto bg-[#242424]/80 backdrop-blur  border-slate-900 rounded-full left-0 right-0 w-fit">
    <section class="text-white text-lg font-medium p-3 sm:px-12 flex justify-center gap-3 sm:gap-5">
      <button class={`${currentTab === 'home' && 'text-red-600'} px-2 cursor-pointer`} on:click={() => handleTabChange('home')}>Home</button>
      <button class={`${currentTab === 'projects' && 'text-red-600'} px-2 cursor-pointer`} on:click={() => handleTabChange('projects')}>Projects</button>
      <button class={`${currentTab === 'blogs' && 'text-red-600'} px-2 cursor-pointer`} on:click={() => handleTabChange('blogs')}>Blogs</button>
      <button class={`${currentTab === 'contact' && 'text-red-600'} px-2 cursor-pointer`} on:click={() => handleTabChange('contact')}>Contact</button>
    </section>
  </header>

  <div class="pt-20 p-3 text-white flex items-center justify-center ">
    {#if currentTab === 'home'}
      <section class="flex flex-col items-center gap-3 mt-16">
        <div class="pb-2">
          <img src="/mm-image.jpg" alt="manish mehra's" class="w-40 h-40 rounded-full"/>
        </div>
        <div class="text-center pb-10">
          <h1 class="text-3xl font-bold">Hi!👋🏻</h1>
          <h1 class="text-3xl font-bold pb-3">I'm Manish Mehra</h1>
          <p class="text-md text-gray-400 font-medium">An <span class="font-bold">aspiring</span> software engineer with hands-on experience in <span class="underline decoration-wavy decoration-red-900">frontend technologies</span></p>
        </div>
        <div class="flex gap-2">
          <a href = "https://github.com/manish-mehra" class="bg-[#2a2a2abf] px-4 py-1 rounded-md text-sm font-medium" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/mr-manish-mehra/" target="_blank" class="bg-[#2a2a2abf] px-4 py-1 rounded-md text-sm font-medium">Linkedln</a>
          <a href="https://twitter.com/_manishmehra" target="_blank" class="bg-[#2a2a2abf] px-4 py-1 rounded-md text-sm font-medium">Twitter</a>
        </div>
      </section>
      {:else if currentTab === 'projects'}
      <section class="flex flex-col items-center gap-6 mt-16">
        {#each PROJECTS as project}
          <figure class="max-w-2xl w-full p-4 rounded-md bg-[#242424] flex flex-col items-start">
            <div class="pb-3">
              <h3 class="text-xl font-bold">{project.name}</h3>
            </div>
            <div class="mb-5 flex flex-col gap-4 overflow-hidden">
              <p class="text-md font-normal text-gray-400">{project.description}</p>
              {#if project.image}
                <img src={project.image} alt={project.name} class="rounded-md"/>
              {/if}
            </div>
            <div>
              <a href={project.github} target="_blank" class="bg-[#2a2a2abf] border px-4 py-1 rounded-md text-sm font-medium">Github</a>
            </div>
          </figure>
        {/each}
      </section>

      {:else if currentTab === 'blogs'}
      <section class="flex flex-col items-center gap-6 mt-16">
        {#if loading}
          <p class="text-start">loading...</p>
        {/if}

        {#if blogs.length > 0}
          {#each blogs as blog(blog.id)}
            <a href={blog?.url} target="_blank" class="max-w-2xl w-full p-4 cursor-pointe rounded-md bg-[#242424] flex flex-col items-start">
              <div class="pb-3">
                <h3 class="text-xl font-bold">{blog?.title}</h3>
              </div>
              <div class="mb-5">
                <p class="text-md font-normal text-gray-400">
                  Published on: {blog?.readable_publish_date}<br/>
                  Author: {blog?.user?.name}<br/>
                  Reading Time: {blog?.reading_time_minutes}<br/>
                </p>
              </div>
              <div>
                <a href={blog?.url} target="_blank"  class="bg-[#2a2a2abf] border px-4 py-1 rounded-md text-sm font-medium">Read</a>
              </div>
            </a>
          {/each}
        {/if}

      </section>
      {:else if currentTab === 'contact'}
      <section class="flex flex-col gap-6 mt-16">
        <div class="">
          <h1 class="text-xl font-bold mb-4">Feel free to reach me out!</h1>
          <div class="text-md font-medium flex flex-col gap-2">
            <p>📧 Write a <a href="mailto:itsmanishmehra@gmail.com" target="_blank" class="underline">mail</a></p>
            <p>📱 Connect on <a href="https://www.linkedin.com/in/mr-manish-mehra/" target = "_blank" class="underline">Linkedln</a></p>
            <p>🐦 Connect on <a href="https://twitter.com/_manishmehra" target="_blank" class="underline">Twitter</a></p>
          </div>
      
        </div>
      </section>
      {:else}
      <p>404</p>
    {/if}
  </div>
</main>