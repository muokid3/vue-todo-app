export default {
  addItem(state, payload) {
    state.todoList.push(payload);
  },

  removeItem(state, payload) {
    let updatedList = state.todoList.filter((item) => item.id !== payload.id);
    state.todoList = updatedList;
  },
};
