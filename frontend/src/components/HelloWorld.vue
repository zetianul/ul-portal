<template>
  <div>
    <Heads></Heads>
    <el-row>
      <el-col :span="3">
        <h1>welcome！ </h1>
        <h2>还没想好做什么</h2>
      </el-col>

      <el-col :span="3">
        <h2>抄来的todo-list</h2>
        <TodoList></TodoList>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Heads from './Heads'
  import TodoList from './TodoList'
export default {
  name: 'HelloWorld',
  components:{
    Heads,
    TodoList
  },
  data () {
    return {
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
