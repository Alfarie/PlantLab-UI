<template>
  <div class="row">

    <div class="row padding">
      <div class="col-sm-12 col-md-5 col-md-offset-1 mycontent-left">
        <div class="block">
          <li class="fa fa-thermometer-half fa-7x li-sensor-temp"></li>
          <div class="block" style="margin-left: 20px;">
            <h2 class="" v-lang.temperature></h2>
            <h1 class=" li-sensor-temp" style="font-size: 55px;"> {{sensor.temperature | monodec}} C</h1>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="block">
          <li class="fa fa-braille fa-6x li-sensor-humi"></li>
          <div class="block" style="margin-left: 20px;">
            <h2 class="text-center" v-lang.humidity></h2>
            <h1 class="text-center li-sensor-humi" style="font-size: 55px;">{{sensor.humidity | monodec }} %</h1>
          </div>
        </div>
        <hr class="vertical block">
      </div>
    </div>


    <div class="row padding">
      <div class="col-sm-12 col-md-5 col-md-offset-1 mycontent-left">
        <div class="block">
          <li class="fa fa-lightbulb fa-7x li-sensor-temp"></li>
          <div class="block" style="margin-left: 20px;">
            <h2 class="" v-lang.light></h2>
            <h1 class=" li-sensor-temp" style="font-size: 45px;"> {{sensor.light}} Lux</h1>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="block">
          <li class="fa fa-leaf fa-6x li-sensor-humi"></li>
          <div class="block" style="margin-left: 20px;">
            <h2 class="text-center" v-lang.co2></h2>
            <h1 class="text-center li-sensor-humi" style="font-size: 45px;">{{sensor.co2}} ppm</h1>
          </div>
        </div>
        <hr class="vertical block">
      </div>
    </div>

    <div class="row padding">
      <div class="col-sm-12 col-md-5 col-md-offset-1 mycontent-left">
        <div class="block">
          <li class="fa fa-bolt fa-7x li-sensor-temp"></li>
          <div class="block" style="margin-left: 20px;">
            <h2 class="" v-lang.ec></h2>
            <h1 class=" li-sensor-temp" style="font-size: 55px;"> {{sensor.ec | monodec}}</h1>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="block">
          <li class="fa fa-flask fa-7x li-sensor-humi"></li>
          <div class="block" style="margin-left: 20px;">
            <h2 class="text-center" v-lang.ph></h2>
            <h1 class="text-center li-sensor-humi" style="font-size: 55px;">{{sensor.ph | monodec}} </h1>
          </div>
        </div>
        <hr class="vertical block">
      </div>
    </div>

    <!-- <div class="row  padding">
                <div class="col-sm-12 col-md-5 col-md-offset-1 mycontent-left">
                  <div class="block">
                    <li class="fa fa-thermometer-half fa-9x li-sensor-temp"></li>
                    <div class="block" style="margin-left: 20px;">
                      <h2 class="" v-lang.temperature></h2>
                      <h1 class=" li-sensor-temp" style="font-size: 55px;"> {{sensor.temperature}} C</h1>
                    </div>
                  </div>
                </div>
          
                <div class="col-md-6">
                  <div class="block">
                    <li class="fa fa-braille fa-9x li-sensor-humi"></li>
                    <div class="block" style="margin-left: 20px;">
                      <h2 class="text-center" v-lang.humidity></h2>
                      <h1 class="text-center li-sensor-humi" style="font-size: 55px;">{{sensor.humidity}} %</h1>
                    </div>
                  </div>
                  <hr class="vertical block">
                </div>
              </div> -->

  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    data() {
      return {
        temp: 0
      };
    },
    computed: {
      sensor() {
        return this.$store.getters.getSensors;
      }
    },
    filters: {
      monodec(value){
        if(value != undefined)
          return value.toFixed(1);
        else
          return '00.00'
      }
    },
    created() {
      this.$options.sockets.SENSOR = data => {
        this.$store.dispatch("updateSensor", data);
      };
    }
  };

</script>

<style scoped>
  i.fa {
    display: inline-block;
    border-radius: 60px;
    box-shadow: 0px 0px 2px #888;
    padding: 0.5em 0.6em;

  }
  
  .li-sensor-temp {
    color: rgb(10, 188, 233);
  }

  .li-sensor-humi {
    color: rgb(0, 243, 170);
  }

  .padding {
    margin-bottom: 20px;
  }

  .mycontent-left {
    border-right: 0px solid rgb(145, 143, 143);
  }

  .block {
    display: inline-block;
  }

  hr.vertical {
    width: 0px;
    height: 40px;
    /* or height in PX */
  }

</style>
