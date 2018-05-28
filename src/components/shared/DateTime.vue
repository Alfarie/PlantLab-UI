<template>
   <div style="display: inline-block; margin-right: 50px; " >
        <h1 class="datetime-text"> {{getTime}} </h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([ 'getTime'])
    },
    messages:{
        en:{
            date: 'Date',
            time: 'Time'
        },
        th:{
            date: 'วัน/เดือน/ปี',
            time: 'เวลา'
        }
    }
};
</script>

<style scoped>
.datetime-text {
  color: rgb(53, 122, 76);
}
</style>



