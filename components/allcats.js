const cat = Vue.component('cat', {
    data() {
        return {
            src: "https://dummyimage.com/225/E5E5E5/E5E5E5.jpg&text=+",
            likeNotActive: "M33 6C29.52 6 26.18 7.62 24 10.18C21.82 7.62 18.48 6 15 6C8.84 6 4 10.84 4 17C4 24.56 10.8 30.72 21.1 40.08L24 42.7L26.9 40.06C37.2 30.72 44 24.56 44 17C44 10.84 39.16 6 33 6ZM24.2 37.1L24 37.3L23.8 37.1C14.28 28.48 8 22.78 8 17C8 13 11 10 15 10C18.08 10 21.08 11.98 22.14 14.72H25.88C26.92 11.98 29.92 10 33 10C37 10 40 13 40 17C40 22.78 33.72 28.48 24.2 37.1Z",
            likeActive: "M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
        }
    },
    props: ['cat'],
    template: `
        <div class="image-block">
            <figure>
                <img class="image-block__img" :src="cat.url" alt="cat">
                <div class="image-block__menu">
                    <button class="image-block__btn" @click="$parent.like(cat)">
                        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path :d="likeNotActive" />
                        </svg>    
                    </button>
                </div>
            </figure>
        </div>
    `
});

const allcats =  Vue.component('allcats', {
    data () {
        return {
            cats: []
        }
    },
    mounted () {
        for (let i = 0; i < 15; i++) {
            this.$parent.getJson(`https://api.thecatapi.com/v1/images/search`)
                .then(data => {
                    this.$data.cats.push(data[0]);
                });
        }
    },
    components: { cat },
    methods: {
        like(cat) {
            let find = this.$root.liked.find(el => el.id === cat.id);
            if (!find) {
                this.$root.liked.push(cat);
            } else {
                console.log('Этот кот уже в любимчиках');
            }

        }
    },
    template: `
            <div>
                <section class="cats">
                    <cat 
                        v-for="cat of cats"
                        :key="cat.id"
                        :cat="cat"
                    >
                    </cat>
                </section>
                <p class="cats__loading">... загружаем еще котиков ...</p>
            </div>
    `
});

