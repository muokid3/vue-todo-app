export default {
  addItem(context, newItem) {
    context.commit("addItem", newItem);
  },
  removeItem(context, data) {
    context.commit("removeItem", data);
  },
};
