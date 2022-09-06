<template>
  <ul role="list" class="divide-y divide-gray-200  border-indigo-400 border-4">
    <li
      class="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50">
      <div class="flex flex-col md:flex-row justify-between space-x-3">
        <div class="min-w-0 flex-1">
          <a href="#" class="block focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            <p class="truncate text-lg text-left font-medium text-gray-900">Book Title: {{bookData.docs[0].title}}</p>
            <p class="truncate text-base text-gray-500 mt-1 text-left"> <span class="underline">Author:</span> Robin Sharma</p>
          </a>
        </div>
        <p  class="flex-shrink-0 whitespace-nowrap text-sm text-left md:text-right  text-gray-500">Published on:{{bookData.docs[0].publish_date[1]}}</p>
      </div>
      <div class="mt-1">
        <ul class="text-sm text-gray-600  text-left flex flex-col md:flex-row mt-2">
          <span class="underline">Publishers:</span> <li class="ml-1" v-for="publisher in bookData.docs[0].publisher_facet"> {{publisher}}, </li>
        </ul>
        <p class="text-sm mt-2 text-gray-600 line-clamp-2 text-left"> <span class="underline">Subject:</span> {{bookData.docs[0].subject[0]}}</p>
      </div>
    </li>
  </ul>
</template>


<script>
  export default{
    data(){
      return {
  bookData: {
    "numFound": 8,
    "start": 0,
    "numFoundExact": true,
    "docs": [
        {
            "title": "The 5 a.m. Club",
            "edition_count": 3,
            "publish_date": [
                "2018",
                "Jun 05, 2018"
            ],
            "publish_year": [
                2018
            ],
            "language": [
                "eng"
            ],
            "author_name": [
                "Robin Sharma (dup. see https://openlibrary.org/works/OL221968A)"
            ],
            "subject": [
                "Self-actualization (psychology)"
            ],
            "publisher_facet": [
                "HarperCollins Publishers Australia",
                "Jaico",
                "Thorsons"
            ],
            "subject_facet": [
                "Self-actualization (psychology)"
            ],
            "subject_key": [
                "self-actualization_(psychology)"
            ]
        },
    ],
    "num_found": 8,
    "q": "",
    "offset": null
}
      }
    }
  }
</script>