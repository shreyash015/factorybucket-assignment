<template>
  <div class="finder-home">
    
    <h1 class="text-3xl lg:text-7xl mb-8 ">The Book <span class="text-indigo-300">Finder  </span></h1>
    
    <div class="relative mt-1 rounded-md shadow-sm">
      <input @keyup.enter="submitForm" style="min-width: 20rem;" v-model.trim="bookName" type="text"
        :class="{'empty-input':emptyStringOnSubmit}"
        class=" block w-full rounded-md pr-10 text-indigo-900 placeholder-indigo-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm lg:text-lg"
        placeholder="Enter title of desired book"  aria-invalid="true" aria-describedby="empty-string-error">
      <div class=" absolute inset-y-0 right-0 flex items-center pr-3">
        <svg v-if="emptyStringOnSubmit" class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          aria-hidden="true">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd" />
        </svg>
        <svg @click="submitForm" v-if="!emptyStringOnSubmit" width="24" height="24" class="text-indigo-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path fill="indigo" d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/>
        </svg>
      </div>
    </div>
    <p v-if="emptyStringOnSubmit" class="text-left mt-2 sm:text-sm text-red-600 lg:text-base" id="empty-string-error">The book title must have atleast one character</p>
      <pulse-loader class="mt-12" :loading="isLoading" :color="'#A5B4FC'" :size="size"></pulse-loader>
  </div>
  
  </template>

<script>
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

    export default {
      name: 'Home',
      data() {
        return {
          bookName: '',
          emptyStringOnSubmit:false,
          isLoading:false,
        }
      },
      components:{
        PulseLoader
      },
      methods:{
        submitForm(){
          this.bookName === '' ? this.emptyStringOnSubmit = true :  this.emptyStringOnSubmit = false;
          if(this.bookName){
            this.isLoading = true;
            const bookTitleSplit = this.bookName.split(' ').join('+');
            this.axios.get(`http://openlibrary.org/search.json?title=${bookTitleSplit}`).then((res) => {
              this.isLoading=false;
              this.$router.push('/results');
            })
          }
        },
      }
    };
    </script>

    <style scoped>
        .finder-home{
            display: flex;
            flex-direction: column;
            place-items: center;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
        }
    </style>