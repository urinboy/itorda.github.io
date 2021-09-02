const app = Vue.createApp({
    // template: '<h1> ITORDA Akademiyasiga hush kelibsiz!</h1> Men akademiya asoschisi {{firstName}}man.',
    data(){
        return {
            firstName: 'Urinboy',
            lastName: 'Tursunboev',
            gender: 'male',
            email: 'urinboytursunbiev@gmail.com',
            picture: 'https://urinboy.github.io/images/home-pic.png'
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            // console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')