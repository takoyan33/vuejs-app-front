import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [],
    }),
    mutations: {
      insert: function (state, obj) {
        const d = new Date();
        const fmt =
          d.getFullYear() +
          "-" +
          ("00" + (d.getMonth() + 1)).slice(-2) +
          "-" +
          ("00" + d.getDate()).slice(-2) +
          " " +
          ("00" + d.getHours()).slice(-2) +
          ":" +
          ("00" + d.getMinutes()).slice(-2);
        state.todos.unshift({
          content: obj.content,
          created: fmt,
        });
      },
      //Todoの完了
      remove: function (state, obj) {
        for (let i = 0; i < state.todos.length; i++) {
          const ob = state.todos[i];
          if (ob.content === obj.content && ob.created == obj.created) {
            alert("完了しましたか? " + '"' + ob.content + '"');
            state.todos.splice(i, 1);
            return;
          }
        }
      },
    },
  });
};

export default createStore;

export const actions = {
  async fetchTodos({ commit }) {
    console.log("fetching todos...");
    const { data } = await supabase.from("todos").select("*");
    console.log("fetched todos:", data);
    commit("setTodos", data);
  },
};
