<template>
  <v-app>

    <appbar></appbar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>

</template>

<script>

import Footer from "@/components/layout/Footer.vue";
import Appbar from "@/components/layout/AppBar.vue";

export default {
  name: 'App',
  components: {Footer, Appbar},

  data: () => ({
  }),
};
</script>
<style>
#redcircle {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    margin-right: 10px;
}
#yellowcircle {
    width: 10px;
    height: 10px;
    background-color: #FFC81E;
    border-radius: 50%;
    margin-right: 10px;

}
#greencircle {
    width: 10px;
    height: 10px;
    background-color: #78E150;
    border-radius: 50%;
}
div#spacer {
    width: 20px;
}

#title {
    background-color:  white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: 30px;
    padding-top: 0px;
    padding-bottom: 30px;
}

#othertitle {
    background-color:  white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    padding-top: 10px;
}
a {
    text-decoration: none;
}
</style>
