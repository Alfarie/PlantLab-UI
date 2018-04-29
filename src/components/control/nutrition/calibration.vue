<template>
  <div class="row">
    <div class="row  text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/calibre.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;" v-lang.title></span>
        </div>
      </div>
    </div>
    
    <div class="row text-center" style="margin-top: 60px;">
      <form>
        <input-value title="EC Sensor" v-model="getCalibration.ec" :operand="operand.setpoint"></input-value>
        <input-value title="pH Sensor" v-model="getCalibration.ph" :operand="operand.setpoint"></input-value>
      </form>
    </div>
    
    <div class="row text-center" style="margin-top: 30px;">
        <div class="col-lg-4 col-lg-offset-4" @click="update">
            <div class="grey-panel pn" style="padding: 10px;">
                <h1 style="color: rgb(83, 147, 231)" v-lang.update></h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import InputValue from "./inputvalue.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      operand: {
        time: 5,
        setpoint: 0.1
      }
    };
  },
  components: {
    InputValue
  },
  computed: {
    ...mapGetters(["getCalibration"]),
    
  },

  methods: {
    update() {
      this.$store.dispatch("popupUpdateModal");
      this.$store.dispatch("SetCalibration");
    }
  },
  messages:{
    en: {
      title: "CALIBRATION"
    },
    th: {
      title: "ตั้งค่าเซ็นเซอร์"
    }
  }
};
</script>


<style scoped>

</style>
