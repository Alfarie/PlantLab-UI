<template>
  <div class="container-fluid">
    <div class="row">
      <transition-group name="slide" mode="out-in" appear>

          <div class="col-md-12 col-lg-12" style="margin-top: 30px;" key="watersystem">
            <router-link tag="div" to="/control/water" class="grey-panel pn">
              <div style="display: inline">
                <img src="/src/assets/img/pump.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.watersystem></h2>
              </div>
            </router-link>
          </div>
          <div class="col-md-12 col-lg-12" style="margin-top: 30px;" key="co2">
            <router-link tag="div" to="/control/co2" class="grey-panel pn">
              <div style="display: inline">
                <img src="/src/assets/img/leaf.png" style="width: 75px; margin-bottom: 10px; margin-top: 10px;">
              </div>
              <div class="block" style="margin-top: 20px;">
                <h2 v-lang.co2 style="font-size: 28px;"></h2>
              </div>
            </router-link>
          </div>
          <div class="col-md-12 col-lg-12" style="margin-top: 30px;" key="solution">
            <router-link tag="div" to="/control/nutrition/param" class="grey-panel pn">
              <div style="display: inline">
                <img src="/src/assets/img/proteins.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.solution></h2>
              </div>
            </router-link>
          </div>

          <router-link tag="div" to="/control/led/display" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="light">
            <div class="grey-panel pn">
              <div style="display: inline">
                <img src="/src/assets/img/led.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.light></h2>
              </div>
            </div>
          </router-link>

          <router-link tag="div" to="/summary" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="backhome">
            <div class="grey-panel pn">
              <div class="block" style="margin: 20px;">
                <h2>
                  <i class="fa fa-chevron-left"></i> <span v-lang.backtohome></span></h2>
              </div>
            </div>
          </router-link>

      </transition-group>

    </div>
  </div>
</template>

<script>

  export default {
    
  };

</script>


<style scoped>
  .slide-enter {
    opacity: 0;
    /*transform: translateY(20px);*/
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {}

  .slide-leave-active {
    
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform .5s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }

  .vertical-center {
    display: flex;
    align-items: center;
  }

  .grey-panel {
    /* text-align: center; */
    background: #e9e9eb;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }

  .opacity-passive {
    opacity: 0.5;
  }

  .opacity-active {
    opacity: 1;
  }

  .grey-panel:hover {
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .device-panel {
    /* text-align: center; */
    background: #e9e9eb;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }

  .device-panel:hover {
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .block {
    display: inline-block;
    vertical-align: top;
  }

</style>
