<template>
  <div >
      <h3>MCU Status</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tdh">GPIO</td>
            <td>{{mcuStatus.gpio}}</td>
          </tr>
          <tr>
            <td class="tdh">MEMORY</td>
            <td>{{mcuStatus.memory}}</td>
          </tr>
        </tbody>
      </table>

    <h3>Water</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>type</th>
          <th>current time</th>
          <th>set time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{mcuStatus.waterProcess.type}}</td>
          <td>{{mcuStatus.waterProcess.data.crt}}</td>
          <td>{{mcuStatus.waterProcess.data.max}}</td>
        </tr>
      </tbody>
    </table>

    <h3>Nutrion</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>type</th>
          <th>mode</th>
          <th>current</th>
          <th>status</th>
          <th>sensor</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CO2</td>
          <td>{{mcuStatus.co2Status.mode}}</td>
          <td>{{mcuStatus.co2Status.crt}}</td>
          <td>{{mcuStatus.co2Status.status}}</td>
          <td>{{mcuStatus.co2Status.sensor}}</td>
        </tr>
        <tr>
          <td>EC</td>
          <td>{{mcuStatus.ecStatus.mode}}</td>
          <td>{{mcuStatus.ecStatus.crt}}</td>
          <td>{{mcuStatus.ecStatus.status}}</td>
          <td>{{mcuStatus.ecStatus.sensor}}</td>
        </tr>
        <tr>
          <td>pH</td>
          <td>{{mcuStatus.phStatus.mode}}</td>
          <td>{{mcuStatus.phStatus.crt}}</td>
          <td>{{mcuStatus.phStatus.status}}</td>
          <td>{{mcuStatus.phStatus.sensor}}</td>
        </tr>
      </tbody>
    </table>


  </div>


  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['mcuStatus'])
    }
  }

</script>
