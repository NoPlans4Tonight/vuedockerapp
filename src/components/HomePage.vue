<template>
    <v-container class="bg-surface-variant mb-6" grid-list-xs>
        <div>
            <v-btn v-on:click="fetchData">Fetch Data</v-btn>
            <div v-if="data">
                <h2>{{ data.title }}</h2>

                <p>{{ data.Body }}</p>
            </div>
        </div>
    </v-container>
</template>
<script>
import axios from '@/axios'

export default {
    data() {
        return {
            data: null
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('home');
                this.data = response.data.data;
                console.log(response.data.data)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>
<style lang="">
    
</style>