<template>
  <div>
    <v-typical
      class="blink"
      :steps="['Hello', 1000, 'Hello World !', 600, 'Hello World ! 👋', 1000]"
      :loop="Infinity"
      :wrapper="'h2'"
    ></v-typical>
  </div>
</template>

<script lang="ts">
import VTypical from 'vue-typical';

export default {
  name: "Type",
  components:{
    VTypical
  },
}

</script>

<style scoped>

</style>
