<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form Two - Log In</h3>
                <p>Enter your details to log-in</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="username" required />
                <input type="password" placeholder="password" required />
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Login</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
import formHelper from './formHelper.vue'
export default {
    data() {
        return {

        }
    },
    methods: {
        handleSubmit: function() {
            alert('thanks for loggin in (form two)');
        }
    },
    components: {
        'form-helper': formHelper
    }
}
</script>

<style>
    margin: 0;
    font-famiily: 'Nunito SemiBold';
</style>
