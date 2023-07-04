<!-- <template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $supabase }) {
    const { data, error } = await $supabase
      .from('todos')
      .select('*')
    if (error) {
      console.error(error)
    }
    return { todos: data }
  }
}
</script> -->