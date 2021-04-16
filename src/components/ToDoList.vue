<template>
  <div class="todoList">
    <p v-for="todo in todoList" :key="todo.id">
      {{ todo.title }} - {{ todo.priority }}
      <button v-on:click="removeTodo(todo.id)">X</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ToDoList",
  props: {
    todoList: {
      type: Array,
      default: () => []
    },
    newToDo: Object
  },
  methods: {
    removeTodo(todoId) {
      axios.delete("http://localhost:1323/todo?todoId=" + todoId).then(() => {
        const deleteItem = this.todoList.filter(x => x.id === todoId);
        this.todoList.splice(this.todoList.indexOf(deleteItem[0]), 1);
      })
    },
    getToDoList() {
      axios.get("http://localhost:1323/todo").then((resp) => {
        if (resp.data) {
          resp.data.forEach((y) => {
            this.todoList.push(y)
          })
        }
      })
    }
  },
  watch: {
    newToDo: function (todo) {
      this.todoList.push(todo)
    }
  },
  created() {
    this.getToDoList();
  }
}
</script>

<style scoped>

</style>