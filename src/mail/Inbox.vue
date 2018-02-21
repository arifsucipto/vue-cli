<template>
  <div class="inbox-body">
    <div class="mail-option">
     <div class="btn-group">
        <a href="#" class="btn" @click.prevent="refresh">
          <i class="fa fa-refresh"></i>&nbsp; refresh
        </a>
      </div>
    </div>
     
    <app-messages :messages="incomingMessages"></app-messages>
  </div>
</template>

<script>
import { eventBus } from '../main';
import Messages from './Messages.vue'
export default {
  props:{
        data:{
            type:Object,
            required:true
        }
    },
  computed:{
        incomingMessages(){
            return this.data.messages.filter(function(message){
                return (message.type == 'incoming' && !message.isDeleted);
            });
        }
  },
  components:{
    appMessages:Messages
  },
  methods:{
    refresh() {
        eventBus.$emit('refreshMessage');
    }
  }
}
</script>


