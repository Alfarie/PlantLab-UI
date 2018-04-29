<template>

  <div class="row" style="margin-top:30px;">
    <div class="row">
      <div class="col-lg-10 col-lg-offset-1">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <div style="display: inline-block; margin: 20px;">
          <h1 v-lang.startTime>Start Time</h1>
          <app-time-picker id="start-time" place="Start Time" v-model="startTime"></app-time-picker>
        </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div style="display: inline-block; margin: 20px;">
          <h1 v-lang.stopTime>Stop Time</h1>
          <app-time-picker id="stop-time" place="Stop Time" v-model="stopTime"></app-time-picker>
        </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 30px;">
          <div class="col-lg-5 col-lg-offset-1 grey-panel pn text-center" @click="addTimer">
            <span class="timer-start-format">{{timer[0] | timeFormat}}</span> 
            <span style="text-align: center; margin: 10px; font-size: 30px;"> To</span>  
            <span class="timer-stop-format">{{timer[1] | timeFormat}}</span>
          </div>
          <router-link tag="div" to="/control/led/display" class="col-lg-5 grey-panel pn text-center" style="margin-left: 10px;">
            <span class="timer-stop-format" v-lang.cancle></span>
          </router-link>
    </div>
  <!-- {{getControl}} -->
    <transition enter-active-class="animated shake" leave-active-class="animated fadeOut" appear-active-class="animated fadeIn">

      <div class="row" style="margin-top: 30px;" v-if="showAlert == 1">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="alert alert-danger text-center">
            <h2><strong>Failure: </strong> Start time should less than stop. </h2>
          </div>
        </div>
      </div>
      
      <div class="row" style="margin-top: 30px;" v-else-if="showAlert == 2">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="alert alert-success text-center">
            <h2><strong>Success: </strong></h2>
          </div>
        </div>
      </div>

    </transition>
  </div>

</template>

<script>
import TimerPicker from "./TimePicker.vue";
import TimerBox from "../display/ledbox.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      imgLink: "/src/assets/img/led.png",
      startTime: "--:--",
      stopTime: "--:--",
      timer: [0, 0],
      showAlert: 0
    };
  },
  computed: {
    ...mapGetters(["getControl"])
  },
  methods: {
    addTimer() {
      if (this.checkTimer()) {
        this.showAlert = 2;
      } else {
        this.showAlert = 1;
        return;
      }
      setTimeout(() => {
        this.$store.dispatch("addTimer", this.timer);
      }, 2000);

      this.$router.push({ name: "disp-led" });
    },
    checkTimer() {
      return this.timer[0] < this.timer[1];
    }
  },
  watch: {
    startTime(value) {
      let a = value.replace(" ", "").split(":");
      this.timer[0] = parseInt(a[0]) * 60 + parseInt(a[1]);
      if (this.checkTimer()) this.showAlert = 2;
      else this.showAlert = 1;
    },
    stopTime(value) {
      let a = value.replace(" ", "").split(":");
      this.timer[1] = parseInt(a[0]) * 60 + parseInt(a[1]);
      if (this.showAlert != 0) {
        if (this.checkTimer()) this.showAlert = 2;
        else this.showAlert = 1;
      }
    }
  },
  components: {
    appTimePicker: TimerPicker,
    appTimerBox: TimerBox
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
</style>

