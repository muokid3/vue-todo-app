<template>
  <ul>
    <li v-for="todoList in todoLists" :key="todoList.id">
      {{ todoList.todo }}
      <button @click="removeItem(todoList.id)">Remove</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["todoLists"],
  emits: ["remove-item"],
  methods: {
    removeItem(id) {
      this.$emit("remove-item", id);
    },
  },
};
</script>

<style scoped>
button {
  font-size: 12px;
  padding: 6px;
  background-color: #a0a4d9;
  border: 1px solid #a0a4d9;
  color: #1f2023;
  font-weight: bold;
  outline: none;
  border-radius: 6px;
}
</style>