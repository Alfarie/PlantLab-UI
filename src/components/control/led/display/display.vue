<template>
  <div class="row" style="margin-top: 30px;">
    <h2>Timer List</h2>
    <transition-group name="slide">
      <div class="col-md-5 col-md-offset-1" style="margin-top: 20px;" v-for="(tl,ind) in timerList" :key="$route.params.id + '-' +ind">
        <app-timer-box :data="tl" :index="ind"></app-timer-box>
      </div>
    </transition-group>

    <div class="col-md-10 col-md-offset-2" v-if="!timerList">
      <div class="alert alert-info">
        <strong style="font-size: 30px;">No timer list.</strong>
      </div>
    </div>
  </div>
</template>

<script>
import TimerBox from "./ledbox.vue";
export default {
  computed: {
    timerList() {
      return this.$store.getters.getControl[0].timer.list;
    }
  },
  components: {
    appTimerBox: TimerBox
  }
};
</script>

<style scoped>
.slide-enter {
  opacity: 0;
  /*transform: translateY(20px);*/
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
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
    transform: translateY(20px);
  }
}

@keyframes slide-left {
  from {
    transform: translateX(20px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-right {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(20px);
  }
}
</style>
