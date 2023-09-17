
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

  addAge({ set, get }, num = 1) {
    set({ age: get('age') + num });
  }
}
