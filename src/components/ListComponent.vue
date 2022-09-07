<template>
  <div
    class="border-indigo-400 border-4 py-5 px-4 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50">
    <div class="flex flex-col md:flex-row justify-between space-x-3 ">
      <div class="min-w-0 flex-1">
        <a href="#" class="block focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true"></span>
          <p class="truncate text-lg text-left font-medium text-gray-900"> <span class="underline">Book Title: </span>
            {{bookData.title}}
          </p>
          <p class="truncate text-base text-gray-500 mt-1 text-left"> <span class="underline">Author:</span>
            <span v-if="bookData.author_name">
              {{bookData.author_name[0]}}
            </span>
            <span v-else>
              N/A
            </span>
          </p>
        </a>
      </div>
      <p class="flex-shrink-0 whitespace-nowrap text-sm text-left md:text-right  text-gray-500">Published
        in:
        <span v-if="bookData.publish_date">
          {{bookData.publish_date[0]}}
        </span>
        <span v-else>
          N/A
        </span>
      </p>
    </div>
    <div class="mt-1">
      <p class="text-sm mt-2 text-gray-600 line-clamp-2 text-left"> <span class="underline">Subject: </span>
        <span v-if="bookData.subject">
          {{bookData.subject[0]}}
        </span>
        <span v-else>
          N/A
        </span>
      </p>
    </div>
  </div>
</template>


<script>
  export default{
    data(){
      return {
      }
    },
  props: {
    bookData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  }
</script>