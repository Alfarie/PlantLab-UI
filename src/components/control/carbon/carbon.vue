<template>
  <div class="row">
    <div class="row  text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/leaf.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;">CARBON DIOXIDE</span>
        </div>
      </div>
    </div>
    <div class="row text-center" style="margin-top: 100px;">
        <div class="col-lg-8 col-lg-offset-2">
                <input-value title="CO2 (ppm)" v-model="co2" :operand="operand"></input-value>
        </div>
    </div>
    <div class="row text-center" style="margin-top: 100px;">
            <div class="col-lg-6 col-lg-offset-3" @click="update">
                <div class="grey-panel pn" style="padding: 10px;">
                    <h1 style="color: rgb(83, 147, 231)">UPDATE</h1>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import InputValue from './inputvalue.vue'
  import {
    mapGetters
  } from "vuex";
  export default {
      data(){
          return {
              operand: 100
          }
      },
      methods: {
          update(){
              this.$store.dispatch('uploadCo2');
              this.$store.dispatch('popupUpdateModal');
          }
      },
    computed: {
      ...mapGetters(["getCo2Control"]),
      co2:{
          set(value){
              this.getCo2Control.lower = value;
              this.getCo2Control.upper = value + 300;
          },
          get(){
              return this.getCo2Control.lower;
          }
      }
    },
    components:{ 
        InputValue
    }
  };

</script>

