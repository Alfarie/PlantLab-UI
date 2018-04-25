<template>
  <div class="row">

    <div class="row  text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/settings.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;" v-lang.configuration></span>
        </div>
      </div>
    </div>

    <div class="row text-center" style="margin-top: 20px;">

      <div class="col-lg-4">
        <h2>Water System</h2>
        <app-switch-button title="Circulating Water" v-model="isCir"></app-switch-button>
        <app-switch-button title="Fill Water" v-model="isFill"></app-switch-button>
      </div>
      <div class="col-lg-4">
        <h1>Nutrition</h1>
        <app-switch-button title="EC Pump" v-model="ecPump"></app-switch-button>
        <app-switch-button title="pH Pump" v-model="phPump"></app-switch-button>
        <app-switch-button title="CO2 Valve" v-model="co2valve"></app-switch-button>
      </div>
      <div class="col-lg-4">
        <h1>Light</h1>
        <app-switch-button title="Auto Mode" v-model="autoMode"></app-switch-button>
        <app-switch-button title="LED Manual" v-model="ledManual" v-if="!autoMode"></app-switch-button>
      </div>
    </div>
  </div>
</template>

<script>
  import SwitchButton from './swtichbutton.vue'
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getWaterControl', 'getControl']),
      isCir: {
        get(){
          return (this.getWaterControl.isCir == 1)? true:false
        },
        set(value){
          this.getWaterControl.isCir = (value)?1:0
          this.$store.dispatch('popupUpdateModal');
        }
      },
      isFill: {
        get(){
          return (this.getWaterControl.isFill == 1)? true:false
        },
        set(value){
          this.getWaterControl.isFill = (value)?1:0
          this.$store.dispatch('popupUpdateModal');
        }
      },
      ecPump: {
        get(){
          return (this.getControl[2].mode ==2)? true: false;
        },
        set(value){
          this.getControl[2].mode = (value) ? 2 : 0;
          this.$store.dispatch('popupUpdateModal')
        }
      },
      phPump: {
        get(){
          return (this.getControl[3].mode == 2)? true: false;
        },
        set(value){
          this.getControl[3].mode = (value) ? 2 : 0;
          this.$store.dispatch('popupUpdateModal')
        }
      },
      co2valve: {
        get(){
          return (this.getControl[1].mode == 3)? true: false;
        },
        set(value){
          this.getControl[1].mode = (value) ? 3 : 0;
          this.$store.dispatch('popupUpdateModal')
        }
      },
      autoMode: {
        get(){
          return (this.getControl[0].mode == 1)? true: false;
        },
        set(value){
          this.getControl[0].mode = (value) ? 1 : 0;
          this.$store.dispatch('popupUpdateModal')
        }
      },
      ledManual: {
        get(){
          return (this.getControl[0].manual.status == 1)? true: false;
        },
        set(value){
          this.getControl[0].manual.status = (value) ? 1 : 0;
          this.$store.dispatch('popupUpdateModal')
        }
      }
    },
    components: {
      appSwitchButton: SwitchButton
    }
  }

</script>


<style scoped>


</style>
