<template>
  <div class="row">

    <div class="row  text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/wifi.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;" v-lang.wifi></span>
        </div>
      </div>
    </div>
    <p>{{wifiStatus}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters(['wifiStatus'])
  },
  create() {
    this.$store.dispatch("GetWifiStatus");
  }
};
</script>