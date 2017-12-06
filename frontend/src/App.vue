<template>
  <div id="app">
    <Heads></Heads>
    <router-view/>
  </div>
</template>

<script>
  import Heads from './components/Heads'
export default {
  name: 'app',
  components:{
    Heads
  }
}
</script>

<style>

/**{margin:0px;padding:0px}*/
/*html,body{*/
  /*height: 100%;*/
  /*width: 100%;*/
/*}*/
  body{
    margin: 0 0;
  }
</style>
