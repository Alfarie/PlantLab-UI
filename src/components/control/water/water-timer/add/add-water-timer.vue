<template>

  <div class="row" style="margin-top:30px;">
    <div class="row">
      <div class="col-lg-11 col-lg-offset-1">
        <div style="display: inline-block; ">
          <label v-lang.startTime style="font-size: 20px; margin-top:30px;">Start Time</label>
          <app-time-picker id="start-time" place="Start Time" v-model="startTime"></app-time-picker>
        </div>
        <div style="display: inline-block; ">
          <input-value title="Working Time" v-model="workingTime" :operand="operand"></input-value>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 30px;">
      <div class="col-lg-5 col-lg-offset-1 grey-panel pn text-center" @click="addTimer">
        <span class="timer-start-format">{{timer | timeFormat }}</span>
        <span style="text-align: center; margin: 10px; font-size: 30px;"> For</span>
        <span class="sec-format">{{workingTime}} Sec.</span>
      </div>
      <router-link tag="div" to="/control/water-timer" class="col-lg-5 grey-panel pn text-center" style="margin-left: 10px;">
        <span class="timer-stop-format" v-lang.cancle></span>
      </router-link>
    </div>
  </div>

</template>
<script>
  import TimerPicker from "./TimePicker.vue";
  import InputValue from "./inputvalue";
  import {
    mapGetters
  } from "vuex";
  export default {
    data() {
      return {
        startTime: "--:--",
        workingTime: 45,
        timer: 0,
        operand: 5,
        showAlert: 0
      };
    },
    computed: {
      ...mapGetters(["getControl"])
    },
    methods: {
      addTimer() {
        let timer = [this.timer, this.workingTime]
        this.$store.dispatch('addWaterTimer', timer);
        this.$router.push({name: 'water-timer-display'})
      },
      checkTimer() {
        return this.timer[0] < this.timer[1];
      }
    },
    watch: {
      startTime(value) {
        let a = value.replace(" ", "").split(":");
        this.timer = parseInt(a[0]) * 60 + parseInt(a[1]);
      }
    },
    components: {
      appTimePicker: TimerPicker,
      InputValue
    },
    filters: {
      timeFormat(value) {
        let h = Math.floor(value / 60);
        h = h < 10 ? "0" + h : h;
        let min = value % 60;
        min = min < 10 ? "0" + min : min;
        return h + ":" + min;
      }
    },
    messages: {
      en: {
        startTime: "Start Time",
        stopTime: "Stop Time"
      },
      th: {
        startTime: "เวลาเริ่มต้น",
        stopTime: "เวลาสิ้นสุด"
      }
    }
  };

</script>

<style scoped>
  .timer-start-format {
    font-size: 45px;
    color: rgb(83, 147, 231);
  }

  .timer-stop-format {
    font-size: 45px;
    color: rgb(236, 133, 130);
  }

  .sec-format {
    font-size: 35px;
    color: rgb(105, 105, 105);
  }

</style>
