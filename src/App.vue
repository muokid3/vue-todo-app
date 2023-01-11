<template>
  <h1>ToDo App</h1>
  <form @submit.prevent="addItem">
    <label>New ToDO</label>
    <input type="text" v-model.trim="todo" />

    <button>Add ToDo</button>
  </form>

  <h2>ToDO List</h2>
  <todo-list :todoLists="todoList" @remove-item="removeItem"></todo-list>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todo: "",
      todoList: [],
    };
  },
  methods: {
    addItem() {
      const newItem = {
        id: new Date().getTime().toString(),
        todo: this.todo,
        isDone: false,
      };

      this.todo = "";

      this.todoList.push(newItem);
    },
    removeItem(id) {
      let updatedList = this.todoList.filter((item) => item.id !== id);
      this.todoList = updatedList;
    },
  },
};
</script>

<style>
#app {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #27292d;
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
label {
  font-size: 14px;
  font-weight: bold;
}
input {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.35);
  color: inherit;
}
input,
form button {
  height: 48px;
  box-shadow: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 12px;
}

form button {
  cursor: pointer;
  background-color: #a0a4d9;
  border: 1px solid #a0a4d9;
  color: #1f2023;
  font-weight: bold;
  outline: none;
  border-radius: 6px;
}

h1 {
  font-weight: bold;
  font-size: 28px;
  text-align: center;
}

h2 {
  font-size: 22px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.35);
  padding-bottom: 6px;
}
h4 {
  text-align: center;
  opacity: 0.5;
  margin: 0;
}

ul {
  padding: 10px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.35);
  padding: 12px 24px;
  border-radius: 6px;
  margin-bottom: 12px;
}

li span {
  cursor: pointer;
}

li .done {
  text-decoration: line-through;
}

li button {
  font-size: 12px;
  padding: 6px;
}
</style>
