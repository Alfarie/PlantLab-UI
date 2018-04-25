<template>
    <div class="navbar navbar-fixed-bottom" style="background-color: rgb(238, 238, 238); height: 5px;">
        <div class="pull-right" >
                <button 
                    style="height: 40px; width: 80px; margin: 5px;"
                    class="label label-default btn btn-default" 
                    @click="changeLanguage">
                    <span :class="flag" style="font-size: 25px;"></span> 
                    <span  style="font-size: 25px;">{{language}}</span>
                </button>
        </div>
    </div>
</template>

<script>
//  style="background-color: rgb(238, 238, 238);"
export default {
  computed: {
    flag() {
      let lang = "";
      if (this.language == "en") lang = "us";
      else if (this.language == "th") lang = "th";
      return "flag-icon flag-icon-" + lang;
    }
  },
  methods: {
    changeLanguage() {
      if (this.language == "th") this.language = "en";
      else if (this.language == "en") this.language = "th";
      console.log(this.language);
    }
  },
  filters: {
    toUpperCase(value) {
      console.log(value);
      return this.value.toUpperCase();
    }
  }
};
</script>


<style scoped>

</style>
