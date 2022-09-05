<template>
  <div>
    <label for="email" class="block text-xl text-left font-medium text-white">Enter Book Name</label>
    <div class="relative mt-1 rounded-md shadow-sm">
      <input @keyup.enter="submitForm" style="min-width: 20rem;" v-model.trim="bookName" type="text"
        :class="{'empty-input':emptyStringOnSubmit}"
        class="block w-full rounded-md pr-10 text-green-900 placeholder-green-300 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
        placeholder="The Fountainhead"  aria-invalid="true" aria-describedby="empty-string-error">
      <div class=" absolute inset-y-0 right-0 flex items-center pr-3">
        <svg v-if="emptyStringOnSubmit" class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          aria-hidden="true">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd" />
        </svg>
        <svg @click="submitForm" v-if="!emptyStringOnSubmit" width="24" height="24" class="text-green-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path fill="green" d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/>
        </svg>
      </div>
    </div>
    <p v-if="emptyStringOnSubmit" class=" mt-2 text-sm text-red-600" id="empty-string-error">The book name must have atleast one character</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        bookName: '',
        emptyStringOnSubmit:false,
      }
    },
    methods:{
      submitForm(){
        this.bookName === '' ? this.emptyStringOnSubmit = true :  this.emptyStringOnSubmit = false;
        if(this.bookName){
          const bookTitleSplit = this.bookName.split(' ').join('+');
          this.axios.get(`http://openlibrary.org/search.json?title=${bookTitleSplit}`).then((res) => {
            console.log(res.data);
          })
        }
      },
    }
  };
  </script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
