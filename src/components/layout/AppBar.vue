<template>
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
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>

</style>