// /src/store/store.js

import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'

Vue.use(Vuex)

const apiRoot = 'http://localhost:8000' // This will change if you deploy later
// only required if you're using modules.
// We're using modlues in this tutorial.

const store =  new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        // Keep in mind that response is an HTTP response
        // returned by the Promise.
        // The mutations are in charge of updating the client state.
        'GET_TODOS': function(state, response) {
            state.todos = response.body
        },
        'ADD_TODO': function(state, response) {
            state.todos.push(response.body)
        },
        'CLEAR_TODOS': function(state) {
            console.log(state)
        },
        // Note that we added one more for logging out errors.
        'API_FAIL': function(state, error) {
            console.log(error)
        }
    },
    actions: {
        // We added a getTodos action for the initial load from the server
        // These URLs come straight from the Django URL router we did in Part 3
        getTodos(store) {
            return api.get(apiRoot + '/todos/')
                .then((response) => store.commit('GET_TODOS', response))
                .catch((error) => store.commit('API_FAIL', error))
        },
        addTodo(store, todo) {
            return api.post(apiRoot + '/todos/', todo)
                .then((response) => store.commit('ADD_TODOS', response))
                .catch((error) => store.commit('API_FAIL', error))
        },
        clearTodos(store) {
            return api.delete(apiRoot + '/todos/clear_todos/')
                .then((response) => store.commit('CLEAR_TODOS'))
                .catch((error) => store.commit('API_FAIL', error))
        }
    }
})

export default store
