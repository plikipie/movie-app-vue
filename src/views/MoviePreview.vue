<template>
  <div id="movie-preview">
    <h3>movie-preview</h3>
    <navbar />

    <div id="movie-container">
      <div id="movie-poster">
        <img :src="movie.poster" alt="movie.name" />
      </div>

      <div id="movie-info">
        <div>
          <h1>{{ movie.name }}</h1>
          <h3>Year : {{ movie.year }}</h3>
          <h3>Genre : {{ movie.genre }}</h3>
          <span
            id="movie-rating"
            :style="{ 'background-color': getRatingColor() }"
            >Rating : {{ movie.rating }}</span
          >
          <h3>Budget : {{ movie.budget }}</h3>
          <h3>Box Office : {{ movie.boxOffice }}</h3>
          <h3>
            Actors :
            <span v-for="(actor, index) in movie.actors" :key="index">{{
              actor.name
            }}</span>
          </h3>
          <strong>Description : </strong>
          <h3>{{ movie.storyline }}</h3>
        </div>
        <div id="options">
          <button class="edit">Edit</button>
          <button @click="deleteMovie" class="delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ratingMixin from "../mixins/getRatingColor.js";
export default {
  mixins: [ratingMixin],
  components: {
    Navbar,
  },

  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      movie: {},
    };
  },
  methods: {
    deleteMovie() {
      this.$store.dispatch("deleteMovie", parseInt(this.id));
      this.$router.push("/");
    },
  },
  created() {
    this.movie = this.$store.getters.getMovieById(parseInt(this.id));
  },
};
</script>

<style lang="scss" scoped>
#movie-preview {
  display: flex;
  overflow: auto;

  #movie-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-top: 90px;
    padding: 0 1rem;

    #movie-poster {
      flex-grow: 1;
      min-width: 400px;

      img {
        max-width: 300px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.473),
          0 10px 10px rgba(0, 0, 0, 0.473);
        margin-bottom: 7px;
        border-radius: 15px;
      }
    }

    #movie-info {
      display: flex;
      flex-grow: 2;
      text-align: left;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        color: white;
        margin-bottom: 2rem;
      }

      h3 {
        color: whitesmoke;

        #movie-rating {
          display: flex;
          justify-content: center;
          border-radius: 10px;
          font-size: 20px;
          width: 53px;
          color: white;
        }

        span {
          margin-right: 5px;
        }
      }

      #options {
        max-width: 180px;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        .edit {
          height: 30px;
          width: 80px;
          background-color: orange;
          color: white;
          border: none;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 10px;
          outline: none;
          cursor: pointer;
        }

        .delete {
          height: 30px;
          width: 80px;
          background-color: #e10505;
          color: white;
          border: none;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 10px;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }

  #movie-form {
    display: flex;
    flex-direction: column;
    text-align: left;

    & > div {
      display: flex;
      flex-direction: column;

      #actor-input {
        display: flex;
        justify-content: space-between;
      }
    }

    .add-actor {
      background-color: green;
      text-align: center;
      color: white;
      margin-left: 5px;
      height: 100%;
      padding: 2px 10px;
      font-size: 20px;
      padding: 1re;
      align-self: center;
      cursor: pointer;
    }
  }

  #update-movie {
    background-color: #5eb85e;
    border: none;
    padding: 5px;
    width: 70px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
  }
}
</style>
