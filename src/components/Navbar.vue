<template>
  <div id="navbar-wrap" class="card-shadow">
    <div id="navbar">
      <h2>Movie.io</h2>
      <div>
        <input type="text" placeholder="Find Movie..." />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navbar-wrap {
  position: fixed;
  width: 100%;
  z-index: 999;

  #navbar {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    background-color: #c81912;

    h2 {
      margin: 0 1rem 0 0;
      color: white;
      cursor: pointer;
    }
    & > div {
      display: flex;
      flex-grow: 2;
      justify-content: flex-end;

      input {
        width: 20%;
        border: none;
        height: 25px;
        border-radius: 10px;
        box-sizing: border-box;
        outline: none;
      }
    }
  }
}
</style>
