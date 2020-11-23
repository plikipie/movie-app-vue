<template>
  <router-view />
</template>

<style lang="scss">
:root {
  $primaryColor: #c81912;
  $secondaryColor: #f64b3c;
  $terniaryColor: #fdba9a;
  $textColor: white;
  $pseudoColor: #42240c;
}
body {
  background-color: #3333;
  margin: 0;
}
.m-0 {
  margin: 0;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialized;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.card-shadow {
  -webkit-box-shadow: 0px 5px 5px 0px rgba(8, 8, 9, 0.5);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
}
</style>
