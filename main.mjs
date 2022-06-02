const vue_router = new VueRouter({
    base: '/'
    , mode: 'hash'
    , routes: [{
        path: '/'
        , redirect: '/all'
    }, {
        path: '/all'
        , component: allcats
        , name: 'allcats'
    }, {
        path: '/liked'
        , component: liked
        , name: 'liked'
    }]
});

const app = new Vue({
    data () {
        return {
            liked: []
        }
    },
    components: { allcats, liked, navigation },
    router: vue_router,
    methods: {
        async getJson(url) {
            try {
                const result = await fetch(url);
                return await result.json();  
            } catch (error) {
                console.log(error);
            }
        },
        
        saveCats() {
            const parsed = JSON.stringify(this.liked);
            localStorage.setItem('liked', parsed);
        },
        
        removeCat(cat) {
            cat.like = false;
            this.liked = this.liked.filter(el => {
                return el !== cat;
            })
            this.saveCats();
        },
    }
}).$mount('#app')



