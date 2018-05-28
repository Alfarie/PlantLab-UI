<template>
  <div>
    <h3>MCU Status</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>CH</th>
          <th>Name</th>
          <th>Type</th>
          <th>mode</th>
          <th>sensor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{getControl[0].ch}}</td>
          <td>LED Timer</td>
          <td>{{getControl[0].timer.list}}</td>
          <td>{{getControl[0].mode}}</td>
          <td>{{getControl[0].sensor}}</td>
          <td>{{getControl[0].manual.status}}</td>
        </tr>
        <tr>
          <td>{{getControl[1].ch}}</td>
          <td>CO2 Valve</td>
          <td>{{getControl[1].setbound}}</td>
          <td>{{getControl[1].mode}}</td>
          <td>{{getControl[1].sensor}}</td>
          <td>{{getControl[1].manual.status}}</td>
        </tr>

        <tr>
          <td>{{getControl[2].ch}}</td>
          <td>EC</td>
          <td>{{getControl[2].setpoint}}</td>
          <td>{{getControl[2].mode}}</td>
          <td>{{getControl[2].sensor}}</td>
          <td>{{getControl[2].manual.status}}</td>
        </tr>
        <tr>
          <td>{{getControl[3].ch}}</td>
          <td>pH</td>
          <td>{{getControl[3].setpoint}}</td>
          <td>{{getControl[3].mode}}</td>
          <td>{{getControl[3].sensor}}</td>
          <td>{{getControl[3].manual.status}}</td>
        </tr>

        <tr>
          <td>{{getControl[4].ch}}</td>
          <td>water timer</td>
          <td>{{getControl[4].timer.list}}</td>
          <td>{{getControl[4].mode}}</td>
          <td>{{getControl[4].sensor}}</td>
          <td>{{getControl[4].manual.status}}</td>
        </tr>
        <tr>
          <td></td>
          <td>water sequence</td>
          <td>{{getWaterControl}}</td>
        </tr>
        <tr>
          <td></td>
          <td>calibration</td>
          <td>{{getCalibration}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['getControl', 'getWaterControl', 'getCalibration'])
    }
  }

</script>
