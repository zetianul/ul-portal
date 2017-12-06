<template>

  <div>
    <div id='main'>
      <article>
        <h2>抄来的todo-list</h2>
        <TodoList></TodoList>
      </article>
      <nav>nav</nav>
      <aside>aside</aside>
    </div>
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
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
#main {
  min-height: 800px;
  margin: 0px;
  padding: 0px;
  display: -webkit-flex;
  display:         flex;
  -webkit-flex-flow: row;
  flex-flow: row;
}

#main > article {
  padding: 5px;
  background: #dddd88;
  -webkit-flex: 3 1 60%;
  flex: 3 1 60%;
  -webkit-order: 2;
  order: 2;
}

#main > nav {
  padding: 5px;
  background: #ccccff;
  -webkit-flex: 1 6 20%;
  flex: 1 6 20%;
  -webkit-order: 1;
  order: 1;
}

#main > aside {

  padding: 5px;
  -webkit-flex: 1 6 20%;
  flex: 1 6 20%;
  -webkit-order: 3;
  order: 3;
}

/* 窄到已不足以支持三栏 */
@media all and (max-width: 640px) {

  #main, #page {
    -webkit-flex-flow: column;
    flex-direction: column;
  }

  #main > article, #main > nav, #main > aside {
    /* 恢复到文档内的自然顺序 */
    -webkit-order: 0;
    order: 0;
  }

  #main > nav, #main > aside, header, footer {
    min-height: 50px;
    max-height: 50px;
  }
}

</style>
