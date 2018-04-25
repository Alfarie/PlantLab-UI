<template>
  <div class="row text-center">
    <div class="row">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/led.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;">LED TIMER LIST</span>
        </div>
      </div>
    </div>


    <div class="row" style="margin-top: 30px;">
      <div class="col-md-3 col-lg-3 col-lg-offset-3">
        <router-link tag="div" to="/control/led/add" style="margin-top: 10px;" class="grey-panel pn" @click="add">
          <div style="display: inline">
            <img src="/src/assets/img/plus.png" style="width: 60px; margin-top: 10px;">
          </div>
          <div class="block" style="margin: 10px;">
            <h2 v-lang.addtimer></h2>
          </div>
        </router-link >
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <router-link tag="div" to="/control/led/display?edit=true" style="margin-top: 10px;" class="grey-panel pn" @click="del">
          <div style="display: inline">
            <img src="/src/assets/img/error.png" style="width: 60px; margin-top: 10px;">
          </div>
          <div class="block" style="margin: 10px;">
            <h2 v-lang.deletetimer></h2>
          </div>
        </router-link>
      </div>
    </div>
    <transition 
      enter-active-class="animated flipInX"
      leave-active-class="animated flipOutX" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Add from './add/add.vue'
  import Display from './display/display.vue'
  import {
    mapGetters
  } from "vuex";
  export default {
    data() {
      return {
        addFlag: false,
        delFlag: false
      }
    },
    computed: {
      timerList() {
        return this.$store.getters.getControl[0].timer.list;
      }
    },
    methods: {
      add() {
        this.addFlag = true;
        this.delFlag = false;
      },
      del() {
        this.addFlag = false;
        this.delFlag = true;
      }
    },
    components: {
      appDisplay: Display,
      appAdd: Add
    }
  };

</script>

<style scoped>
  .border-sg {
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
    width: 200px;
    height: 150px;
  }

  .rcorners {
    border-radius: 25px;
    border: 2px solid rgba(199, 240, 142, 0.171);
  }

  hr {
    -moz-border-bottom-colors: none;
    -moz-border-image: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #EEEEEE -moz-use-text-color #FFFFFF;
    border-style: solid none;
    border-width: 1px 0;
    margin: 18px 0;
  }



  .slide-enter {
    opacity: 0;
    /*transform: translateY(20px);*/
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave {}

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    transition: opacity 0.5s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }

  .block {
    display: inline-block;
    vertical-align: top;
  }

</style>
