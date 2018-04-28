<template>
  <div class="row">

    <div class="row  text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/proteins.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;">NUTRITION</span>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 30px;">
      <div class="col-lg-6 text-center" style="margin-top: 30px;">
        <form>
          <input-value title="EC (mS/cm)" v-model="getEcControl.setpoint"  :operand="operand.setpoint"></input-value>
          <input-value title="EC Working time (s)" v-model="getEcControl.working" :operand="operand.time"></input-value>
          <input-value title="EC Detecting time (s)" v-model="getEcControl.detecting" :operand="operand.time"></input-value>
        </form>
      </div>
      <div class="col-lg-6 text-center" style="margin-top: 30px;">
        <form>
                <input-value title="pH " v-model="getPHControl.setpoint" :operand="operand.setpoint"></input-value>
                <input-value title="pH Working time (s)" v-model="getPHControl.working" :operand="operand.time"></input-value>
                <input-value title="pH Detecting time (s)" v-model="getPHControl.detecting" :operand="operand.time"></input-value>
        </form>
      </div>
    </div>

    <div class="row text-center" style="margin-top: 30px;">
        <div class="col-lg-4 col-lg-offset-4" @click="update">
            <div class="grey-panel pn" style="padding: 10px;">
                <h1 style="color: rgb(83, 147, 231)">UPDATE</h1>
            </div>
        </div>

        <router-link tag="div" to="/control/nutrition/cal"  class="col-lg-2 col-lg-offset-1">
            <div class="grey-panel pn" style="padding: 12px; ">
               <div style="display: inline-block">
                 <img src="/src/assets/img/calibre.png" alt="">
               </div>
            </div>
        </router-link>
    </div>

  </div>
</template>

<script>
import InputValue from './inputvalue.vue'
import {mapGetters} from 'vuex';
export default{
    data(){
        return {
            operand: {
                time: 5,
                setpoint: 0.1
            }
        }
    },
    components:{
        InputValue
    },
    computed:{
        ...mapGetters(['getEcControl', 'getPHControl'])
    },
    watch:{
        
    },
    methods: {
      update(){
        this.$store.dispatch('uploadNutrition');
        this.$store.dispatch('popupUpdateModal');
      }
    }
}
</script>


<style scoped>
  

</style>
