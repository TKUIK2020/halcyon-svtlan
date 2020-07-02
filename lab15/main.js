var app = new Vue ({
        el:'#app',
        methods: {
        async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data =  await response.json();
        this.data = data;
        console.log(data)
        }
        },   	
        data() {	
        return {
        data: {}
        }         	
        },
        beforeMount () {
        this.function();
     }
 });

