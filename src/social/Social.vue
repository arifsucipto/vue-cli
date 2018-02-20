<template>
   <div>
       <h3>share {{article.title}} with your friend</h3>
       <button class="btn btn-primary" @click="share('facebook')">facebook</button>
       <button class="btn btn-primary" @click="share('twitter')">twitter</button>
   </div>
  
</template>


<script>
    import { eventBus }  from '../main';
    export default{
        props:{
            article:{
                type: Object,
                required:true
            }
        },
        methods:{
            share(media) {
                 eventBus.$emit('articleSharedBus', {
                     article:this.article,
                    media: media
                });
                
                this.$emit('articleShared', {
                    media: media
                });
            }
            
        }
    }

</script>