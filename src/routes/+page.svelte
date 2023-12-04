<script>

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
  <link rel="shortcut icon" href="/favicon.ico">
	<title>Manish Mehra</title>
  <meta name="description" content="An aspiring software engineer with hands-on experience in frontend technologies">
</svelte:head>

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
    