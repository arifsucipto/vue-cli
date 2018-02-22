<template>
<!-- training di remark
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <announcement></announcement>
        <app-article></app-article>
        <contact-us>
          <p slot="top">ini slot yang untuk top</p>
          <p slot="down">jangna berikan informasi sensitif</p>
        </contact-us>
      </div>
    </div>
  </div> 
  -->


<div>
  <nav class="navbar navbar-default navbar-static-top">
     <div class="container">
       <div class="navbar-header">
         <a class="navbar-brand" href=#>Project Vue</a>
       </div>
     <announcement></announcement>
     </div>     
  </nav>
 
         <ul >
           <li><a href="#" @click.prevent="activeView='app-home'">home</a></li>
           <li><a href="#" @click.prevent="activeView='about-us'">about</a></li>
           <li><a href="#" @click.prevent="activeView='contact-us'"> contact</a></li>
           <li><a href="#" @click.prevent="activeView='app-article'"> article</a></li>
           <li><a href="#" @click.prevent="activeView='app-form'"> Form</a></li>
           <li><a href="#" @click.prevent="activeView='mail'"> Mail</a></li>
         </ul>
    
  <div class="container">
    <div class="jumbotron">
      <keep-alive>
        <component :is="activeView"></component>
        </keep-alive>
    </div>
  </div>

  <router-view :mail="mail"></router-view>

</div>  
</template>

<script>
export default {
    data(){
        return {
          activeView: 'app-home',
          mail:''
        };
    }
}
</script>
