<template>
    <div>
        <v-btn @click="fetchData">Fetch Data</v-btn>
        <div v-if="data">
            <h2>{{data.title}}</h2>
            
            <p>{{data.Body }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            data: null
        }
    },    
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('http://laraveldockerapp.test/api/home');
                this.data = response.data.data;
                console.log(response.data.data)
            }
            catch (error){
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>
<style lang="">
    
</style>