<template>
    <div class="article">
        <h1>{{title}}</h1>
        <p>publish in {{publish | moment}}</p>
        <!-- karena parsing nilai ke component, tambah di app author nya -->
       <!-- <app-author :firstName="author.firstName" :lastName="author.lastName"></app-author> -->
       <app-author :author="author"></app-author>
        <p class="lead">{{content}}</p>

    </div>    
</template>

<script>
    import moment from 'moment';
    import Author from './Author.vue'
    export default {
        data() {
            return {
                title: 'why vue js awesome',
                publish: new Date(),
                content: 'lorem ipsum dolor sit amet good banget wow keren',
                author: {
                    firstName: 'arif',
                    lastName : 'Sucipto'
                    }
            };
        },
        filters:{
            moment: function(value){
                return moment(value).format('MMMM Do');
            }
        },
        components: {
            appAuthor: Author
        }
    }
</script>