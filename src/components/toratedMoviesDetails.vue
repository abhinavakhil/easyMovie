<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :value="100"
        color="blue-grey"
        justify-center
      >
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-md text-xs-center style="margin-bottom:80px;">
    <v-layout row wrap style="margin-top:60px;">
      <v-flex xs4>
        <v-card dark color="primary">
          <v-img
            class="white--text align-end"
            height="400px"
            :src="'http://image.tmdb.org/t/p/w185/' + singleMovie.poster_path"
          >
            <v-card-title
              v-bind:style="{ backgroundColor: '#E0F2F1', opacity: 0.8 }"
              ><h3 style="color:black;opacity:1 !important">
                {{ singleMovie.title }}
              </h3></v-card-title
            >
          </v-img>
        </v-card>
      </v-flex>

      <v-flex xs8>
        <v-card dark color="blue">
          <v-btn block color="primary" dark></v-btn>
          <v-card-text class="px-2 white--text">
            <h3 class="black--text font-weight-bold">Description:</h3>
            {{ singleMovie.overview }}
          </v-card-text>
          <v-layout row wrap>
            <v-flex xs4>
              <v-card-text class="px-2 white--text ">
                <h3 class="black--text font-weight-bold">Release Date:</h3>
                {{ singleMovie.release_date }}
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <v-card-text class="px-2 white--text ">
                <h3 class="black--text font-weight-bold">Popularity:</h3>
                {{ singleMovie.popularity }}
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <v-card-text class="px-2 white--text text-center">
                <h3 class="black--text font-weight-bold">
                  Original Languange:
                </h3>
                {{ singleMovie.original_language }}
              </v-card-text>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs4>
              <v-card-text class="px-2 white--text ">
                <h3 class="black--text font-weight-bold">Vote Count:</h3>
                {{ singleMovie.vote_count }}
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <v-card-text class="px-2 white--text ">
                <h3 class="black--text font-weight-bold">Avg Vote:</h3>
                {{ singleMovie.vote_average }}
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <v-card-text class="px-2 white--text text-center">
                <h3 class="black--text font-weight-bold">
                  Original Title:
                </h3>
                {{ singleMovie.original_title }}
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-btn block color="primary" dark></v-btn>
        </v-card>
        <v-btn class="ma-2" color="darken-2" dark @click="back()">
          <v-icon dark left>mdi-arrow-left</v-icon>Back
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      singleMovie: [],
      userid: "",
      myuserid: "",
    };
  },
  mounted() {
    (this.userid = this.$route.path),
      (this.myuserid = this.userid.substring(10));
    console.log(this.myuserid);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=0facdfb4998030b94aa11ef10cea8c03&language=en-US&page=1"
      )
      .then((response) => {
        for (let i = 0; i < 20; i++) {
          // eslint-disable-next-line no-cond-assign
          if (this.myuserid == response.data.results[i].id) {
            this.singleMovie = response.data.results[i];
            console.log(this.singleMovie);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="stylus" scoped>
.v-progress-circular
  margin: 1rem
</style>
