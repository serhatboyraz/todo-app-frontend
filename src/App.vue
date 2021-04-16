<template>
  <div id="app">

    <AddToDo @todoAdded="todoAdded"/>
    <ToDoList :newToDo="addedToDo"/>

  </div>
</template>

<script>
import AddToDo from '@/components/AddToDo.vue'
import ToDoList from "@/components/ToDoList";

export default {
  name: 'App',
  components: {
    ToDoList,
    AddToDo
  },
  data: function () {
    return {
      addedToDo: null
    }
  },
  methods: {
    todoAdded(addedObject) {
     this.addedToDo = addedObject
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
