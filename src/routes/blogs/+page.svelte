<script>

  import {onMount} from 'svelte'
  import {PROJECTS, API_URL} from '../../utils/constants'

  let loading = false
  let blogs = []


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

 onMount(() => {
  fetchBlogs()
 })


</script>

<svelte:head>
    <link rel="shortcut icon" href="/favicon.ico">
    <title>Blog - Manish Mehra</title>
    <meta name="description" content="Explore Manish Mehra's personal journey and thoughts shared in blog posts">
</svelte:head>

<section class="flex flex-col items-center gap-6 mt-16">
  {#if loading}
    <p class="text-start">loading...</p>
  {/if}

  {#if !loading && blogs.length > 0}
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