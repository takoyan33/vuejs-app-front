<!-- <template>
  <section class="container">
    <h1 class="text-center my-8">Nuxt Todo App</h1>
    <div class="">
      <p class="text-center my-8">Todoを保存できます</p>
    </div>

    <v-card width="600px" class="mx-auto mt-5 py-10 px-10">
      <p>
        <v-text-field type="text" v-model="content" @focus="set_flg" />
      </p>

      <div class="m-auto my-5 text-center">
        <v-btn @click="insert" color="primary"  class="m-auto my-5">保存</v-btn>
        <v-btn @click="find" color="primary"  class="m-auto my-5">見つける</v-btn>
        <v-btn @click="flag_reset" color="primary"  class="m-auto my-5">全て</v-btn>
      </div>
    </v-card>
    <ul >
      <li v-for="(todo, index) in display_todos" :key="index">
        <span>{{ todo.content }}</span
        ><span>({{ todo.created }})</span
        ><v-btn color="primary"  @click="remove(todo)">完了</v-btn>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: function () {
    return {
      content: "",
      find_flg: false,
    };
  },
  computed: {
    ...mapState(["todos"]),
    display_todos: function () {
      if (this.find_flg) {
        const arr = [];
        const data = this.todos;
        data.forEach((element) => {
          if (element.content.toLowerCase() === this.content.toLowerCase()) {
            arr.push(element);
          }
        });
        return arr;
      } else {
        return this.todos;
      }
    },
  },
  methods: {
    insert: function () {
      this.$store.commit("insert", { content: this.content });
      this.content = "";
    },
    find: function () {
      this.find_flg = true;
    },
    set_flg: function () {
      if (this.find_flg) {
        this.find_flg = false;
        this.content = "";
      }
    },
    remove: function (todo) {
      this.$store.commit("remove", todo);
    },
    flag_reset: function () {
      this.find_flg = false;
    },
  },
};
</script> -->

<template>
  <div>
    <h1>Todoリスト</h1>
    <ul v-if="todos">
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
    <p v-else>データを取得できませんでした。</p>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    try {
      await store.dispatch("todos/fetchTodos");
      return {
        todos: store.state.todos.todos || null,
      };
    } catch (error) {
      console.error(error);
      return {
        todos: [],
      };
    }
  },
};
</script>
