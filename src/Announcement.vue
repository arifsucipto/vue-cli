<template>
	<div class="alert alert-info" v-if="announcement">
		{{announcement}}
	</div>
</template>

<script>
	import { eventBus }  from './main';
	export default {
		data(){
			return {
				announcement: null
			};
		},		
        created(){
                eventBus.$on('articleSharedBus', (data) => {
                    this.announcement =  'sudah share artikel ' + data.article.title + 'lewat '+ data.media;
                });
		},
		
		watch: {
			announcement: function() {				
				var vm = this;
				
				setTimeout(function() {
				vm.announcement= null
				}, 1000);
			}
		}
	}

	
	
</script>