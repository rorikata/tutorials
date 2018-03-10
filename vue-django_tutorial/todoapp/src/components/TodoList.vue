<template>
  <div id="todolist">
      <b-table striped hover
               @row-dblcliked="dblclicked"
               :items="todos"
               :fields="fields">
      </b-table>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  methods: {
    dblcliked (item, index, event) {
      console.log('double clicked: ', item.text)
    }
  },
  data () {
    return {
      fields: [
        {key: 'text', sortable: true},
        {key: 'deadline', sortable: true},
        {key: 'priority', sortable: true},
        {key: 'done', sortable: true},
        {key: 'memo', sortable: false}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
