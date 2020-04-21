import Vue from "vue";
import VueRouter from "vue-router";
import topratedMovies from "@/components/topratedMovies";
import toratedMoviesDetails from "@/components/toratedMoviesDetails";
import upcomingMovies from "@/components/upcomingMovies";
import upcomingMoviesDetails from "@/components/upcomingMoviesDetails";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "topratedMovies",
      component: topratedMovies,
    },
    {
      path: "/topmovie/:id",
      name: "Movie",
      props: true,
      component: toratedMoviesDetails,
    },
    {
      path: "/upcomingmovies",
      name: "upcomingmovies",
      component: upcomingMovies,
    },
    {
      path: "/upcomingmovie/:id",
      name: "upcomingMoviesDetails",
      props: true,
      component: upcomingMoviesDetails,
    },
  ],
  mode: "history",
});
