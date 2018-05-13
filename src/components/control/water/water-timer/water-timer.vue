<template>
  <div class="row text-center">

    <div class="row text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/pump.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;" v-lang.watersystem></span>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 30px;">
      <div class="col-md-3 col-lg-3 col-lg-offset-3">
        <router-link tag="div" to="/control/water-timer/add" style="margin-top: 10px;" class="grey-panel pn">
          <div style="display: inline">
            <img src="/src/assets/img/plus.png" style="width: 60px; margin-top: 10px;">
          </div>
          <div class="block" style="margin: 10px;">
            <h2 v-lang.addtimer></h2>
          </div>
        </router-link>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <router-link tag="div" to="/control/water-timer/display?edit=true" style="margin-top: 10px;" class="grey-panel pn" >
          <div style="display: inline">
            <img src="/src/assets/img/error.png" style="width: 60px; margin-top: 10px;">
          </div>
          <div class="block" style="margin: 10px;">
            <h2 v-lang.deletetimer></h2>
          </div>
        </router-link>
      </div>
    </div>
    
    <div class="row">
      <transition name="slide" mode="out-in">
      
      <router-view></router-view>
      </transition>
    </div>
    

  </div>
</template>


<style scoped>
  .block {
    display: inline-block;
    vertical-align: top;
  }

</style>
