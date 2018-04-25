<template>
  <div>
      <transition name="slide" mode="out-in" appear>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <app-sensors></app-sensors>
            <app-status></app-status>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <app-activity></app-activity>
          </div>
        </div>
      </transition>
   
  </div>
</template>

<script>
  import Sensors from "../summary/sensors/sensors.vue";
  import Status from "../summary/status/status.vue";
  import Activity from "./activity/PlantActivity.vue";
  export default {
    components: {
      appSensors: Sensors,
      appStatus: Status,
      appActivity: Activity
    }
  };

</script>
