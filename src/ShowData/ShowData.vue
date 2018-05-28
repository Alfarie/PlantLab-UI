<template>
  <div id="app" class="container">
      <div>
        <test-show-status></test-show-status>
      </div>

      <div>
        <test-show-control></test-show-control>
      </div>
      <div style="margin-bottom: 100px;">
        <h1>Sensors</h1>  
        <p>{{getSensors}}</p>
      </div>  
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ShowStatus from './ShowStatus'
import ShowControl from './ShowControl'
export default {
  components:{
    testShowStatus: ShowStatus,
    testShowControl: ShowControl
  },
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
