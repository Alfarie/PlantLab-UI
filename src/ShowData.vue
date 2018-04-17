<template>
  <div id="app">
      <div>
        <h1>mcu status</h1>  
        <p>{{mcuStatus}}</p>
      </div>  
      <div>
        <h1>Sensors</h1>  
        <p>{{getSensors}}</p>
      </div>  
      <div>
        <h1>Control-MCU</h1>  
        <h3>control</h3>  
        <p>{{getControl}}</p>

        <h3>water</h3> 
        {{getWaterControl}}
        <div>
          <label for="">isCir</label>
          <input type="number" v-model.number="getWaterControl.isCir">

          <label for="">cirTime</label>
          <input type="number" v-model.number="getWaterControl.cirTime">
        </div>
        <div>
          <label for="">isFill</label>
          <input type="number" v-model.number="getWaterControl.isFill">

          <label for="">waitTime</label>
          <input type="number" v-model.number="getWaterControl.waitTime">
        </div>
        <button @click="updateWaterControl">update water</button>
      </div>  
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters(['mcuStatus','getSensors', 'getControl', 'getWaterControl'])
  },
  methods:{
    updateWaterControl(){
      this.$store.dispatch('SetWaterControl');
    }
  },
  created(){
    this.$store.dispatch('GetWaterControl');
    this.$store.dispatch('GetControl');
  }
}
</script>
