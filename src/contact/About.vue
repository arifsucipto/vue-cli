<template>
   <div>
   
   </div>
  
</template>


<script>

    export default{
        activated(){
            //berguna activated ini ketika componen dibuat keep alive. biasanya untuk fetch data dari server lsgi
            //karena kalo keep alive maka vue akan mengcache data nya. sehingga perlu reload ulang data apabila dibutuhkan
            alert('about activated');
        },
        deactivated(){
            alert('about deactivated');
        }
    }

</script>