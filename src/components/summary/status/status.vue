<template>
  <div>
      <div class="col-md-4 text-center">
            <router-link to="/timer/fan" tag="div" class="grey-panel pn">
                <div >
                    <h2 style="display: inline-block;" v-lang.watersystem></h2>
                    <span class="floating-sensor" :class="[{on: getSensors.floating}, {off: !getSensors.floating}]">
                      <i class="fa fa-circle"></i>
                    </span>
                    
                </div>
                <div style="display: inline">
                  
                    <img :src="image[waterProcess.type]" style="width: 100px;">
                </div>
                <div>
                    <h3>{{getWaterTypeName}}</h3>
                    <h3>{{getWaterTiming}}</h3>
                </div>
            </router-link>
        </div>

      <div class="col-md-4 text-center">
            <router-link to="/timer/fan" tag="div" class="grey-panel pn">
                <div >
                    <h2 v-lang.co2></h2>
                </div>
                <div style="display: inline">
                    <img src="/src/assets/img/co2process.svg" style="height: 100px;">
                </div>
                <div>
                    <h3 :class="[{on: (co2Status.status==1)}, {off: (co2Status.status!=1)}]">{{co2Valve}}</h3>
                    <h3> {{co2Status.crt}} / {{getControl[1].setbound.lower}} ppm</h3>
                </div>
            </router-link>
        </div>

      <div class="col-md-4 text-center">
            <router-link to="/timer/fan" tag="div" class="grey-panel pn">
                <div >
                    <h2 v-lang.solution></h2>
                </div>
                <div style="display: inline">
                    <img src="/src/assets/img/solution.svg" style="width: 100px;">
                </div>
                <div>
                    <h3> 
                      <span :class="[{on: (ecStatus.status==1)}, {off: (ecStatus.status!=1)}]">
                        EC<span v-if="ecStatus.mode != 2" style="color:red;">(INA)</span>
                      </span>  
                    : 
                      <span :class="[{on: (phStatus.status==1)}, {off: (phStatus.status!=1)}]" >
                        pH <span v-if="phStatus.mode != 2" style="color:red;">(INA)</span>
                      </span> 
                    
                    </h3>
                    <h3> {{ecStatus.crt}}/{{getControl[2].setpoint.setpoint}} : {{phStatus.crt}}/{{getControl[3].setpoint.setpoint}} </h3>
                </div>
            </router-link>
        </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
var type = {
  "waterprocess-cir": "Circulating",
  "waterprocess-wait": "Solution",
  "waterprocess-bsch": "waiting",
  "waterprocess-fill": "Fill water"
};
export default {
  data() {
    return {
        type: 'waterprocess-fill',
        image: {
            "waterprocess-cir": "/src/assets/img/circulating.svg",
            "waterprocess-wait": "/src/assets/img/flask.svg",
            "waterprocess-bsch": "/src/assets/img/hourglass.svg",
            "waterprocess-fill": "/src/assets/img/liquid.svg"
        }
    };
  },
  computed: {
    ...mapGetters(["mcuStatus", 'co2Status', 'ecStatus', 'phStatus', 'getControl','getSensors']),
    waterProcess() {
      return this.mcuStatus.waterProcess;
    },
    getWaterTypeName() {
      let tp = this.mcuStatus.waterProcess.type;
      if (tp != undefined) {
        return type[tp];
      } else {
        return "--:--";
      }
    },
    getWaterTiming() {
      let timing = this.mcuStatus.waterProcess.data;
      if (timing != undefined) {
        return this.secToTime( parseInt(timing.crt.toFixed(0))) + "-" + this.secToTime( parseInt(timing.max.toFixed(0)));
      } else {
        return "--:--";
      }
    },
    co2Valve(){
      let mode = this.co2Status.mode;
      if(mode == 3){
        return (this.co2Status.status == 1)? 'VALUE OPENED':'VALUE CLOSED'
      }
      else{
        // return 'INACTIVE'
        return '-'
      }
    },
    floatingSensor(){
      return this.$store.getSensors.floating
    }
  },
  methods: {
    secToTime(sec) {
      let hours = Math.floor(sec / 3600);
      sec %= 3600;
      let minutes = Math.floor(sec / 60);
      let seconds = sec % 60;
      return (
        this.addZero(hours) +
        ":" +
        this.addZero(minutes) +
        ":" +
        this.addZero(seconds)
      );
    },
    addZero(value) {
      if (value < 10) return "0" + value;
      return value;
    }
  },

  created() {}
};
</script>

<style scoped>
.grey-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
  padding-top: 1px;
}

.grey-panel:hover {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.li-sensor-temp {
  color: rgb(133, 219, 241);
}

.li-sensor-humi {
  color: rgb(130, 236, 204);
}

.font {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.mycontent-left {
  border-right: 3px solid rgb(145, 143, 143);
}

.block {
  display: inline-block;
  vertical-align: top;
}

hr.vertical {
  width: 0px;
  height: 40px;
  /* or height in PX */
}
.on {
  color: rgb(33, 206, 18);
  font-weight: bolder;
}
.off {
  color: rgb(224, 100, 100);
  font-weight: bolder;
}

.auto {
  color: rgb(52, 196, 253);
}
.manual {
  color: rgb(250, 175, 35);
}

.floating-sensor{
  position: absolute; 
  top: 10px; 
  right: 20px; 
}

</style>
