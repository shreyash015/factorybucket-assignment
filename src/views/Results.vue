<template>
    <div class="">
        <div class="text-left">
            <a class="flex cursor-pointer justify-center mb-12 md:mb-0 md:justify-start" @click="$router.go(-1)">
                <svg height="24" width="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="244 400 100 256 244 112"
                        style="fill:none;stroke:white;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" />
                    <line style="fill:none;stroke:white;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
                        x1="120" x2="412" y1="256" y2="256" />
                </svg>
                <span>Back to search</span>
            </a>
        </div>
        <p class="text-7xl text-white">Results</p>
        <p class="text-4xl text-white mt-4">Total books found : {{store.getBooksData.numFound}}</p>
        <p class="text-4xl text-white mt-4">Total Results displayed below : {{getTruncatedData.length}}</p>
        <ul role="list" class="divide-y divide-gray-200  ">
            <li class="relative">
                <ListComponent v-for="(bookData,index) in getTruncatedData" :key="index" class="max-w-2xl mx-auto mt-12"
                    :bookData=bookData />
            </li>
        </ul>
    </div>
</template>

<script>
    import ListComponent from "../components/ListComponent.vue";
    import { useStore } from '../store/index';
    import _ from 'lodash'


    export default {
        setup(){
            const store = useStore();
            return {
                store,
            }
        },
        components: {
            ListComponent
        },
        computed:{
            getTruncatedData(){
               return _.take(this.store.getBooksData.docs,10);
            }
        }
    }
</script>
