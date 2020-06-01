<template>
  <div class="player-no-city">
    <div class="player-no-city__item" />
  </div>
</template>

<script>
  export default {
    name: 'PlayerNoCity',
  };
</script>

<style lang="scss" scoped>
  .player-no-city {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
  .player-no-city__item {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
    background-image: url("~@/assets/images/player/nocover.png");
    background-position: center;
    background-size: contain;
    opacity: 0.6;
    animation: rotate 5s infinite linear;
  }
</style>
