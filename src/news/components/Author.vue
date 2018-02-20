<template>
    <small>written by {{myauthor.firstName}} {{myauthor.lastName}}</small> 
  <!-- <small>written by {{firstName}} {{lastName}}</small> -->
</template>


<script>
    
     import {eventBus} from '../../main'
    export default {
        //props: ['firstName', 'lastName']
        //bisa pake langsung property atau method
       // props:['author']
       //KALO MAU VALIDASI PROPS NYA BISA PAKE
       props: {
           myauthor:{
               type: Object,
               required:true
           }
       },
        created(){
                eventBus.$on('articleSharedBus', (data) => {
                   // alert('someone share article to ' + data.media)
                });
        }
       /*
       pass data author via component
       data() {
            return {
                author: {
                firstName: 'arif',
                lastName : 'Sucipto'
                }
            };
        }*/
    }
</script>