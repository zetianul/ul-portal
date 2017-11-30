<template>
  <div>
    <el-row>
      <el-col :span="12" >
        <h1>welcome！ </h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <h2>还没想好做什么</h2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
