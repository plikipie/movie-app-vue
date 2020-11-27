const ratingMixin = {
  methods: {
    getRatingColor() {
      if (this.movie.rating > 7) return "#c81912";

      if (this.movie.rating > 4) return "#f64b3c";

      return "#fdba9a";
    },
  },
};

export default ratingMixin;
