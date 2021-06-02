<template>
  <div id="app">
    <HeaderMain></HeaderMain>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMain from "./HeaderMain";

export default {
  name: "app",
  components: {
    HeaderMain,
  },
};
</script>

<style src="normalize.css/normalize.css"></style>

