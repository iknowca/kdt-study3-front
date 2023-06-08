<template>
    <v-footer
            padless
            dark
    >
        <v-card
                flat
                tile
                class="lighten-1 white--text text-center"
                width="100%"
        >
            <v-card-text>
                <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"

                >
                    <v-icon size="24px">
                        {{ icon.icon }}
                    </v-icon>
                    {{icon.title}}
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Iknow</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
  name: "LayoutFooter",
  data() {
    return {
      icons: [
        {icon: 'mdi-github', link: "https://github.com/iknowca/kdt-study3", title: "back"},
        {icon: 'mdi-github', link: "https://github.com/iknowca/kdt-study3", title: "front"},
        {icon: 'mdi-github', link: "https://github.com/iknowca/kdt-study3", title: "fastapi"},
      ],
    }
  }
}
</script>

<style scoped>

</style>