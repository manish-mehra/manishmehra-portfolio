<script>
 import '../tailwind.css'
 
 const API_URL = 'https://dev.to/api/articles?username=manishmehra'

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
          <img src="/mm-image.jpg" alt="manish mehra's" class="w-40 h-40 ring-4 ring-red-950 rounded-full"/>
        </div>
        <div class="text-center pb-10">
          <h1 class="text-3xl font-bold">Hi!👋🏻</h1>
          <h1 class="text-3xl font-bold pb-3">I'm Manish Mehra</h1>
          <p class="text-sm text-gray-400 font-medium">An <span class="font-bold">aspiring</span> software engineer with hands-on experience in <span class="underline decoration-wavy decoration-red-900">frontend technologies</span></p>
        </div>
        <div class="flex gap-2">
          <a href = "https://github.com/manish-mehra" class="bg-[#2a2a2abf] px-4 py-1 rounded-md text-sm font-medium" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/mr-manish-mehra/" target="_blank" class="bg-[#2a2a2abf] px-4 py-1 rounded-md text-sm font-medium">Linkedln</a>
          <a href="https://twitter.com/_manishmehra" target="_blank" class="bg-[#2a2a2abf] px-4 py-1 rounded-md text-sm font-medium">Twitter</a>
        </div>
      </section>
      {:else if currentTab === 'projects'}
        <section class="flex flex-col items-center gap-6 mt-16">
            <figure class="max-w-2xl w-full p-4 rounded-md bg-[#242424] flex flex-col items-start">
              <div class="pb-3">
                <h3 class="text-xl font-bold">LiteWriteNeo <span class="text-gray-600">#WIP</span></h3>
              </div>
              <div class="mb-5">
                <p class="text-sm font-normal text-gray-400">LiteWriteNeo is an open-source distraction free writing web app, rewritten in pure JavaScript with TypeScript for enhanced performance and maintainability</p>
              </div>
              <div>
                <a href="#github" class="bg-[#2a2a2abf] border px-4 py-1 rounded-md text-sm font-medium">Github</a>
              </div>
            </figure>
            <figure class="max-w-2xl w-full p-4 rounded-md bg-[#2a2a2abf] flex flex-col items-start">
              <div class="pb-3">
                <h3 class="text-xl font-bold">LocShare</h3>
              </div>
              <div class="mb-5 flex flex-col gap-4 overflow-hidden">
                <p class="text-sm font-normal text-gray-400">Realtime location sharing: React, Sockets, and Leaflet</p>
                <img src="https://user-images.githubusercontent.com/31545725/271251815-66d550b7-a7bf-4c3c-9f57-2802097b133c.png" alt="" class="rounded-md">
              </div>
              <div>
                <a href="#github" class="bg-[#2a2a2abf] border px-4 py-1 rounded-md text-sm font-medium">Github</a>
              </div>
            </figure>
            <figure class="max-w-2xl w-full p-4 rounded-md bg-[#2a2a2abf] flex flex-col items-start">
              <div class="pb-3">
                <h3 class="text-xl font-bold">HindustanHeadlines</h3>
              </div>
              <div class="mb-5 flex flex-col gap-4 overflow-hidden">
                <p class="text-sm font-normal text-gray-400">A news headlines curator based on webscraping | ReactJS & Node</p>
                <img src="https://raw.githubusercontent.com/manish-mehra/hindustan-headlines/main/client/public/hindustan-headlines-img.png" alt="hindustan headlines" class="rounded-md"/>
              </div>
              <div>
                <a href="#github" class="bg-[#2a2a2abf] border px-4 py-1 rounded-md text-sm font-medium">Github</a>
              </div>
            </figure>
        </section>
      {:else if currentTab === 'blogs'}
      <section class="flex flex-col items-center gap-6 mt-16">
        {#if loading}
          <p class="text-start">loading...</p>
        {/if}

        {#if blogs.length > 0}
          {#each blogs as blog(blog.id)}
          <figure class="max-w-2xl w-full p-4 rounded-md bg-[#242424] flex flex-col items-start">
            <div class="pb-3">
              <h3 class="text-xl font-bold">{blog?.title}</h3>
            </div>
            <div class="mb-5">
              <p class="text-sm font-normal text-gray-400">
                Published on: {blog?.readable_publish_date}<br/>
                Author: {blog?.user?.name}<br/>
                Reading Time: {blog?.reading_time_minutes}<br/>
              </p>
            </div>
            <div>
              <a href={blog?.url} target="_blank"  class="bg-[#2a2a2abf] border px-4 py-1 rounded-md text-sm font-medium">Read</a>
            </div>
          </figure>
          {/each}
        {/if}

      </section>
      {:else if currentTab === 'contact'}
      <section class="flex flex-col items-center gap-6 mt-16">
        <div>
          <h1 class="text-3xl font-bold mb-4">Feel free to reach me out!</h1>
          <div class="text-sm font-medium flex flex-col gap-2">
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