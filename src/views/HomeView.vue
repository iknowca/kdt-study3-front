<template>
<v-container>
<GoogleMapComp/>
</v-container>
</template>

<script>


  import GoogleMapComp from "@/components/map/GoogleMapComp.vue";

  export default {
    name: 'HomeView',

    components: {
        GoogleMapComp

    },
  }
</script>
<style>

</style>
