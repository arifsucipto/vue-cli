<template>
  <aside class="lg-side">
    <div class="inbox-head">
      <h3>{{currentView.title}}</h3>
      
    </div>
  <keep-alive>
        <component :is="currentView.tag" :data="currentView.data"></component>
      </keep-alive>
  </aside>
</template>

<script>
import { eventBus } from "../main.js";
import Inbox from './Inbox.vue'
import Important from './Important.vue'
import Sent from './Sent.vue'
import Trash from './Trash.vue'
import ViewMessage from './ViewMessage.vue'
export default {
      props:{
        messages:{
            type:Array,
            required:true
        }
    },
      created(){
         eventBus.$on('changeView', (data) => {
              let temp = [{
                  tag : data.tag,
                  title : data.title,
                  data: data.data || {}
              }];
              this.history = temp.concat(this.history.splice(0));

         });
      },
      data(){
        return {
          history: [
            {
                tag: 'app-inbox',
                title: 'Inbox',
                data:{
                  messages : null
                }
            }
          ]
        };
    },
    computed:{
        currentView() {
            let current = this.history[0];
            this.$set(current.data,"messages", this.messages);
            return current;
        },
        prevView(){
          return typeof this.history[1] !== 'undefined' ? this.history[1] : null;
        }
    },
    components:{
      appInbox: Inbox,
      appSent : Sent,
      appTrash : Trash,
      appImportant : Important,
      appViewMessage: ViewMessage
    }
}
</script>


