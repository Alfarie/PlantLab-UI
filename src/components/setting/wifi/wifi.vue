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

    <div class="row text-center" style="margin-top: 50px;">
      <div class="col-lg-10 col-lg-offset-1">
        <div class="alert alert-info">
          <h3>NO CONNECTION.</h3>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Available WI-FI
          <button type="button" class="btn btn-default btn-circle" @click="refresh">
            <i class="fa fa-sync"></i>
          </button>
        </h2>
        <!-- <p>{{AvailableWifi}}</p> -->
      </div>
      <div class="col-lg-12">
        <div class="col-lg-5 grey-panel wifi-list" v-for="wifi in AvailableWifi" :key="wifi.bssid">
          <div style="margin-top: 5px;">
            <div style="display: inline-block">
              <img src="/src/assets/img/wifi2.png" alt="">
            </div>
            <div style="display: inline-block">
              <h3 style="margin-left: 10px;"> {{wifi.ssid}}
                <small>({{wifi.signalLevel | percent}} %)</small>
              </h3>
            </div>
            <div class="pull-right" style="margin-top: 8px;">
              <button type="button" class="btn btn-success btn-circle btn-xl">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    computed: {
      ...mapGetters(['AvailableWifi'])
    },
    created() {
      this.$store.dispatch("GetAvailableWifi");
    },
    filters: {
      percent: (value) => {
        return Math.min(Math.max(2 * (value + 100), 0), 100)
      }
    },
    methods: {
        refresh(){
            this.$store.dispatch("GetAvailableWifi");
        }
    }
  };

</script>

<style scoped>
  .wifi-list {
    margin-top: 10px;
    margin-left: 60px;
    height: 80px;
  }

  .btn-circle.btn-xl {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    font-size: 28px;
  }

  .btn-circle {
    width: 40px;
    height:  40px;
    border-radius: 20px;
    font-size: 16px;
  }

</style>
