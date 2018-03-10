// src/store/api.js

import Vue from 'vue'
//import VueResource from 'vue-resource'
import axios from 'axios'

Vue.prototype.$http = axios

//Vue.use(VueResource)

export default {
    get(url, request) {
        return axios.get(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },
    post(url, request) {
        return axios.post(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },
    patch(url, request) {
        return axios.patch(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    },
    delete(url, request) {
        return axios.delete(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    }
}
