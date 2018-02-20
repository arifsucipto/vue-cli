<template>
   <div>
       <h2>Contact Us</h2>
       <slot name="top"></slot>
       <form>
           <div class="form-group">
               <label> name </label>
               <input type="text" class="form-control" id="nama" placeholder="masukkan nama"/>
           </div>

             <div class="form-group">
               <label> email </label>
               <input type="text" class="form-control" id="email" placeholder="masukkan email"/>
           </div>
            <div class="form-group">
               <label> pesan </label>
               <textarea type="text" cols="30" row="10" class="form-control" id="pesan" placeholder="masukkan pesan"/>
           </div>
           <slot name="down">
               <p>akan kami respon secepatnya tulisan ini akan di override di app.vue</p>
           </slot>
           <button type="submit" class="btn btn-primary">submit</button>
       </form>
   </div>
  
</template>


<script>

    export default{
    }

</script>