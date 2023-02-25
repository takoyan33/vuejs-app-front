import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const state = () => ({
  todos: [],
});

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
};

export const actions = {
  async fetchTodos({ commit }) {
    const { data } = await supabase.from("todos").select("*");
    commit("setTodos", data);
  },
};

export const getters = {
  getTodos: (state) => {
    return state.todos;
  },
};
