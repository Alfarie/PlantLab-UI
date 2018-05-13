<template>
  <div class="row">
    <div class="row text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/pump.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;" v-lang.title></span>
        </div>
      </div>
    </div>
    <div class="row text-center" style="margin-top: 30px;">
      <form>
        <input-value :title="cirTime" v-model="getWaterControl.cirTime" :operand="operand"></input-value>
        <input-value :title="waitTime" v-model="getWaterControl.waitTime" :operand="operand" ></input-value>
      </form>
    </div>

    <div class="row text-center" style="margin-top: 60px;">
      <div class="col-lg-6 col-lg-offset-3" @click="update">
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
      operand: 30
    };
  },
  components: {
    InputValue
  },
  computed: {
    ...mapGetters(["getWaterControl", 'getControl']),
    cirTime(){
      return this.translate("cirTime");
    },
    waitTime(){
      return this.translate("waitTime");
    }
  },
  methods: {
    update() {
      this.$store.dispatch("uploadWater");
      this.$store.dispatch("popupUpdateModal");
    }
  },
  messages: {
    en: {
      title: "WATER PROCESS",
      cirTime: "Circulating time(s)",
      waitTime: "Waiting Time(s)"
    },
    th: {
      title: "ระบบน้ำ",
      cirTime: "เวลาให้น้ำ(วินาที)",
      waitTime: "เวลาผสมปุ๋ย(วินาที)"
    }
  },
  created(){
    
  }
};
</script>

<style scope>

</style>
