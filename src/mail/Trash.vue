<template>
  <div class="inbox-body">
    <app-messages :messages="trashMessages"></app-messages>
  </div>
</template>

<script>

import Messages from './Messages.vue'
export default {
  props:{
        data:{
            type:Object,
            required:true
        }
    },
  computed:{
        trashMessages(){
            return this.data.messages.filter(function(message){
                return message.isDeleted;
            });
        }
  },
  components:{
    appMessages:Messages
  }
}
</script>


