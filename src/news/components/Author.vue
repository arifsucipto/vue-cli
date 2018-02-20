<template>
    <small>written by {{author.firstName}} {{author.lastName}}</small> 
  <!-- <small>written by {{firstName}} {{lastName}}</small> -->
</template>


<script>
    
     
    export default {
        //props: ['firstName', 'lastName']
        //bisa pake langsung property atau method
        props:['author']
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