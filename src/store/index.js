import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('bookStore', {
    state: () => ({
        booksData:{}
    }),
    getters: {
        getBooksData(state){
            return state.booksData
        }
    },
    actions:  {
       async setBooksData(booktitle) {
        try{
            const booksJSON = await axios.get(`https://openlibrary.org/search.json?title=${booktitle}`)
            this.booksData = booksJSON.data;
        }
            catch(error){
                alert(error)
            }
        }
    }
})