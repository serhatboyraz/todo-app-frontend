<template>
  <div class="add-todo">
    <input type="text" v-model="title" placeholder="do something"/>
    <button v-on:click="addTodo">Add</button>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "AddToDo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo() {
      axios.post("http://localhost:1323/todo", {
        'Title': this.title
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((resp) => {
        this.title = ''
        this.$emit('todoAdded', resp.data)
      })
    }
  }
}
</script>

<style scoped>

</style>