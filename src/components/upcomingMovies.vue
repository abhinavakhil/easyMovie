<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green">
      </v-progress-circular>
    </div>
  </v-container>
  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs3 v-for="(item, index) in wholeResponse" :key="index" mb-2>
        <v-card class="mx-auto" @click="singleupcomingMovie(item.id)">
          <v-img
            :src="'http://image.tmdb.org/t/p/w185/' + item.poster_path"
            class="white--text align-end"
            mb-1
            contain
            height="390px"
            width="390px"
          >
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      wholeResponse: [],
      loading: true,
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=0facdfb4998030b94aa11ef10cea8c03&language=en-US&page=1"
      )
      .then((response) => {
        this.wholeResponse = response.data.results;
        console.log(this.wholeResponse);
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    singleupcomingMovie(id) {
      this.$router.push("/upcomingmovie/" + id);
    },
  },
};
</script>
<style lang="stylus" scoped>
.v-progress-circular
  margin: 1rem
</style>
