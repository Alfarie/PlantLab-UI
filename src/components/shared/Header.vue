<template>
<div class="container-fluid" style="margin-bottom: 20px;">

    <div class="col-lg-3" style="margin-left: 30px;">
        <img src="/src/assets/img/logo2.png" alt="" height="52" width="181">
    </div>
    
    <div class="col-lg-8" style="text-align: center;">
        <div class="pull-right">
           <app-date-time></app-date-time>
            <img src="/src/assets/img/connection.png" style="height: 40px;">
            <span :class="[{online: inetConnection}, {offline: !inetConnection}]">{{isInetConnection}}...</span> 
        </div>
    </div>
</div>
</template>

<script>
import DateTime from "./DateTime.vue";
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters(['isConnect', 'connect', 'inetConnection', 'isInetConnection'])
  },
  components: {
    appDateTime: DateTime
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    }
  },
  created(){
    this.$options.sockets.datetime = data=>{
      this.$store.dispatch('', data);
    }
  }
};
</script>


<style scoped>
.online {
  color: rgb(8, 235, 20);
  font-size: 20px;
}
.offline {
  color: rgb(223, 105, 105);
  font-size: 20px;
}
</style>
