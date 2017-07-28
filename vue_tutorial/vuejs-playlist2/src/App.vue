<template>
    <div>
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component = 'form-one'">Show form one</button>
        <button v-on:click="component = 'form-two'">Show form two</button>
    </div>
</template>

<script>
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'
export default {
    data() {
        return {
            component: 'form-one'
        }
    },
    methods: {
        handleSubmit: function() {
            alert('thanks for submitting');
        }
    },
    components: {
        'form-one': formOne,
        'form-two': formTwo
    }
}
</script>

<style>

</style>
