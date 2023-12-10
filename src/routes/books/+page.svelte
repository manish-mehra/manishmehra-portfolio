<script>
  import Books from '../../utils/constants/books.json'

  const tags = ['All', "Currently Reading", ...new Set(Books.map(book => book.tags).flat())]

  const currentlyReading = [
    {
      title: 'The Count of Monte Cristo',
      author: 'Alexandre Dumas',
      pages: 932,
      tags: ['classics', 'fiction']
    },
    {
      title: 'Thinking Fast and Slow',
      author: 'Daniel Kahneman',
      pages: 499,
      tags: ['psychology', 'non-fiction']
    }
  ]

  let books = Books
  let currentTag = 'All'

</script>

<svelte:head>
    <link rel="shortcut icon" href="/favicon.ico">
    <title>Books - Manish Mehra</title>
    <meta name="description" content="Manish's Reading List">
</svelte:head>

<div class="flex flex-col mt-16">
  <section class="mb-10">
    <h2 class="text-lg font-semibold">💭I'm an occasional bookworm and over the past few years, I've read these books. I highly recommend them.</h2>
  </section>

  <section class="mb-5">
    <div class="flex flex-wrap gap-2">
      {#each tags as tag}
      <button 
        class= {`
          text-sm rounded-full px-3 py-1 font-medium 
          ${currentTag === tag ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}
        `}
        on:click={() => {
          currentTag = tag
          if(tag === 'All'){
            books = Books
          } else if(tag === 'Currently Reading') {
            books = currentlyReading
          } else {
            books = Books.filter(book => book.tags.includes(tag))
          }
        }}
      >{tag}</button>
    {/each}
    </div>
  </section>
  <section class="mb-5">
   <div class="flex gap-2 items-center justify-end font-medium">
      <p>{books.length} Books</p> |
      <p>{
      books.reduce((acc, book) => {
        return acc + book.pages
      }, 0)} Pages</p>
   </div>
  </section>
  <section class="flex flex-col items-center gap-6">
    {#each books as book}
      <figure class="max-w-2xl w-full p-4 rounded-md bg-[#242424] flex flex-col items-start">
        <div class="pb-3">
          <h3 class="text-xl font-bold">{book.title}
          </h3>
        </div>
        <div class="mb-5 w-full flex flex-col gap-4 overflow-hidden">
            <p class="text-md font-normal text-gray-400">{book.author}</p>
          <div class="flex flex-wrap items-center gap-2">
            {#each book.tags as tag}
            <span class="text-sm rounded-full px-3 py-1 font-medium bg-gray-200 text-black">{tag}</span>
          {/each}
          </div>
          <div class="flex w-full items-end justify-end">
            <p class="text-md font-normal text-gray-400 text-xs">{book.pages} pages</p>
          </div>
        </div>
        <div>
        </div>
      </figure>
    {/each}
  </section>
</div>