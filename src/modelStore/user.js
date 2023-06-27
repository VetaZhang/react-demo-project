
export default {
  name: 'user',

  getValue() {
    return {
      name: '',
      age: 0,
    };
  },

  setName({ set }, newName) {
    set({ name: newName });
  },

  setAge({ set }, newage) {
    set({ age: newage });
  }
}
