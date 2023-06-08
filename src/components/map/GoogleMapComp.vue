<template>
      <GmapMap
          :center=center
          :zoom="15"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
      >
      </GmapMap>

</template>
<script>

export default {
    name: "GoogleMapComp",

    data() {
        return {
            center: { lat: 37.5642135, lng: 127.0016985 },
            locationMarkers: [],
            locPlaces: [],
            existingPlace: null
        };
    },
}
</script>