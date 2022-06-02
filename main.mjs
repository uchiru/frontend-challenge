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
    components: { allcats, liked },
    router: vue_router,
    methods: {
        async getJson(url) {
            try {
                const result = await fetch(url);
                return await result.json();  
            } catch (error) {
                console.log(error);
            }
        }
    }
}).$mount('#app')



