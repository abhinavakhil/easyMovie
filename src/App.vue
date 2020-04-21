<template>
  <v-app>
    <v-toolbar dense app height="80px" style="margin-bottom:10px;">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>EasyMovie.com</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn small color="dark" @click="upcomingMovie()">Upcoming Movies</v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {},
  methods: {
    upcomingMovie() {
      this.$router.push("/upcomingmovies");
    },
  },
  computed: {},
};
</script>
