<template>
  <div id="sidebar">
    <filters />
    <button>Add Movie</button>
  </div>
</template>
<script>
import Filters from "./Filters";

export default {
  components: {
    Filters,
  },
};
</script>
<style lang="scss" scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 100vh;
  max-width: 150px;
  flex-grow: 1;
  background-color: white;
  justify-content: left;

  & > button {
    margin-top: 20px;
    height: 30px;
    background-color: #f64b3c;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
  }

  #movie-form {
    display: flex;
    flex-direction: coloumn;
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
      background-color: #fdba9a;
      text-align: center;
      color: white;
      margin-left: 5px;
      height: 100%;
      padding: 2px 10px;
      font-size: 20px;
      padding: 1rem;
      align-self: center;
      cursor: pointer;
    }
  }
  #add-movie {
    background-color: #333;
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
