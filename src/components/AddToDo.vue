<template>
  <div class="add-todo">
    <input type="text" v-model="title" placeholder="do something"/>
    <select v-model="priority">
      <option value="HIGH">High</option>
      <option value="MEDIUM">Medium</option>
      <option value="LOW">Low</option>
    </select>

    <button v-on:click="addTodo">Add</button>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "AddToDo",
  data() {
    return {
      title: '',
      priority: 'MEDIUM'
    }
  },
  methods: {
    addTodo() {
      axios.put("http://localhost:1323/todo", {
        'Title': this.title,
        'Priority': this.priority
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((resp) => {
        this.title = ''
        this.priority = 'MEDIUM'
        this.$emit('todoAdded', resp.data)
      })
    }
  }
}
</script>

<style scoped>

</style>