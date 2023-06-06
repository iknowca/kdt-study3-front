<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    >

        <div id="redcircle"></div>
        <div id="yellowcircle"></div>
        <div id="greencircle"></div>
        <div id="spacer">  </div>
        <router-link to="/" color="grey" id="current">
          <div class="d-flex align-center">

              <v-card-title id="title" class="black--text">
                  kdt-study3
              </v-card-title>

          </div>
        </router-link>
        <div id="spacer">  </div>

        <router-link to="/" color="grey">
            <div class="d-flex align-center">

                <v-card-title id="othertitle" class="black--text">
                    kdt-study2
                </v-card-title>

            </div>
        </router-link>
        <div id="spacer">  </div>

        <router-link to="/" color="grey">
            <div class="d-flex align-center">

                <v-card-title id="othertitle" class="black--text">
                    kdt-study1
                </v-card-title>

            </div>
        </router-link>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
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
