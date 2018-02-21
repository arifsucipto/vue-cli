<template>
    <div class="inbox-body">
        <div class="mail-option">
            <button class="btn btn-primary" @click="navigateBack" >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp; Back
            </button>

            <button class="btn btn-danger" @click="data.message.isDeleted = true" :disabled="data.message.isDeleted">
                <i class="fa fa-trash-o" ></i>&nbsp; {{data.message.isDeleted ? "deleted" : "delete"}}
            </button>

            <template v-if="typeof data.message.isRead !== 'undefined'" >
                <button class="btn btn-primary" @click="data.message.isRead = false" :disabled="!data.message.isRead">
                    <i class="fa fa-envelope-open" aria-hidden="true"></i>&nbsp; Mark as unread
                </button>

                <button class="btn btn-primary" @click="data.message.isRead = true" :disabled="data.message.isRead" >
                    <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; Mark as read
                </button>
            </template>
        </div>

        <p><strong>Date:</strong> {{data.message.date.fromNow() }}</p>
        <p><strong>From:</strong> {{data.message.from.name}} <{{data.message.from.email}}></p>
        <hr>

        <div v-html="data.message.content" class="message"></div>

        <div v-if="data.message.attachments.length > 0" class="attachments">
            <h4>Attachments</h4>
            <ul v-for="attachment in data.message.attachments" :key="attachment.index">
                <li>
                    <i class="fa fa-paperclip"></i> {{attachment.fileName}} ({{attachment.size | formatByte}})
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import { eventBus } from '../main.js';
  export default {


    activated(){
        if (typeof this.data.message.isRead !== 'undefined'){
        this.data.message.isRead = true;
      }
    },
    props:{
      data:{
        type: Object,
        required: true
      }
    },
    methods:{
      navigateBack(){
          let prev = this.$parent.prevView;
          eventBus.$emit('changeView',{
            tag: prev.tag,
            title:prev.title ,
            data:prev.data
          });
      }
    },
    filters:{
      formatByte(bytes){
        if (bytes == 0) {
                    return '0 Bytes';
                }

                let decimals = 2;
                let k = 1000;
                let dm = decimals + 1 || 3;
                let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                let i = Math.floor(Math.log(bytes) / Math.log(k));

                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
            }
        
      
    }
}
</script>


